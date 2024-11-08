'use client'

import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography, Switch } from '@mui/material'
import { subscribeUser, unsubscribeUser, sendNotification } from '../utils/actions'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import './pushNotificationManager.css'

const ACCOUNT_SUB = 'accountSub'
const PRODUCT_SUB = 'productSub'
const EVENT_SUB = 'eventSub'

const NEXT_PUBLIC_VAPID_PUBLIC_KEY = 'BNPnMguxotxK9szzmYdWGfRlwyA_l48_o0iHLBhGzPp6NMQP4xlK6k1FA-CRCUMFObInxSYdhlgFwTwjI8cpE2w'

/**
 *
 * @param {string} base64String
 * @returns
 */
export function urlBase64ToUint8Array(base64String) {
    console.log('called urlBase64ToUint8Array() function', base64String)
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

// This subscription is the 'id' of the particular subscriptions displayed to the user
// It is also the key name of the cookie
const SUBSCRIPTIONS = ['accountSub', 'productSub', 'eventSub']

export default function PushNotificationManager() {
    const [isSubChecked, setIsSubChecked] = useState({})

    const [isSupported, setIsSupported] = useState(false)
    const [subscription, setSubscription] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const newSubChecked = {}
        for (const subscription of SUBSCRIPTIONS) {
            newSubChecked[subscription] = getCookie(subscription) === 'true'
        }
        console.log('newSubChecked = ', newSubChecked)
        setIsSubChecked(newSubChecked)

        const myFunc = async () => {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                setIsSupported(true)
                await registerServiceWorker()
            }
        }

        myFunc()
    }, [setIsSubChecked])

    async function registerServiceWorker() {
        const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
            updateViaCache: 'none'
        })
        const sub = await registration.pushManager.getSubscription()
        setSubscription(sub)
    }

    async function subscribeToPush() {
        console.log('called subscribeToPush() function')
        const registration = await navigator.serviceWorker.ready
        console.log('registration', registration)
        const sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY)
        })
        console.log('sub', sub)
        setSubscription(sub)

        // Convert the subscription to a plain object
        const subscriptionJson = sub.toJSON()
        console.log('subscriptionJson', subscriptionJson)
        await subscribeUser(subscriptionJson)
    }

    // async function unsubscribeFromPush() {
    //     console.log('called unsubscribeFromPush() function')
    //     await subscription?.unsubscribe()
    //     setSubscription(null)
    //     await unsubscribeUser()
    // }

    async function sendTestNotification() {
        console.log('called sendTestNotification() function')
        console.log(subscription)
        if (subscription) {
            const subscriptionJson = subscription.toJSON()
            await sendNotification(message, subscriptionJson)
            setMessage('')
        }
    }

    function isThisChecked(sub) {
        return isSubChecked[sub]
    }

    // Handle switch toggle
    function handleToggle(event) {
        const element = event.target
        const subscriptionType = element.id
        const type = element.id.slice(0, -3)
        const isTurningOn = element.checked

        const date = new Date()
        date.setDate(date.getDate() + 400)

        setIsSubChecked({...isSubChecked, [subscriptionType]:isTurningOn})
        if (isTurningOn) {
            setCookie(subscriptionType, true, { expires: date })
        } else {
            deleteCookie(subscriptionType)
        }
        console.log('Switch clicked, new state:', isTurningOn)

        if (isTurningOn) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    // alert('Permission Granted')
                    registerAndSendToAWS(type)
                } else {
                    alert('User does not allow permission')
                }
            })
        } else {
            unregister(type)
        }
    }

    async function registerAndSendToAWS(type) {
        console.log('registering with AWS!!!!')
        console.log('subscrption:', subscription)
        let sub
        if (subscription === null) {
            console.log('No subscription yet!!!')
            // Not initialized yet
            const registration = await navigator.serviceWorker.ready
            sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(NEXT_PUBLIC_VAPID_PUBLIC_KEY)
            })
            // Note that after setSubscription, you need to wait for the next cycle to get the updated value
            setSubscription(sub)
            console.log('after setting subscription is', subscription)
        } else {
            sub = subscription
        }

        const payload = { subscription: sub, type }

        // // Send the subscription object to your server
        await fetch('https://devapi.cloud.nuskin.com/webPushDemo/v1/subscriptions', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    async function unregister(type) {
        console.log('unregistering with AWS')
        let sub
        if (subscription === null) {
            console.log('No subscription yet!!!')
            // Not initialized yet
            const registration = await navigator.serviceWorker.ready
            sub = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(NEXT_PUBLIC_VAPID_PUBLIC_KEY)
            })
            setSubscription(sub)
        } else {
            sub = subscription
        }

        console.log('sub:', sub)
        const payload = { subscription: sub, type }
        // // Send the subscription object to your server
        await fetch('https://devapi.cloud.nuskin.com/webPushDemo/v1/subscriptions', {
            method: 'DELETE',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await subscription?.unsubscribe()
        setSubscription(null)
    }

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>
    }

    return (
        <div className="push-notification-wrapper">
            <h3>Push Notifications</h3>
            <div>
                <Switch id="accountSub" checked={isThisChecked('accountSub')} onChange={handleToggle} color="primary" inputProps={{ 'aria-label': 'controlled' }} />
                <label htmlFor="accountoSub">Subscribe to Account Notifications</label>
            </div>
            <div>
                <Switch id="productSub" checked={isThisChecked('productSub')} onChange={handleToggle} color="primary" inputProps={{ 'aria-label': 'controlled' }} />
                <label htmlFor="productSub">Subscribe to Product Notifications</label>
            </div>
            <div>
                <Switch id="eventSub" checked={isThisChecked('eventSub')} onChange={handleToggle} color="primary" inputProps={{ 'aria-label': 'controlled' }} />
                <label htmlFor="eventSub">Subscribe to Sales Event Notifications</label>
            </div>
        </div>
    )
}
