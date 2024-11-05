'use client'

import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography, Switch } from '@mui/material'
import { subscribeUser, unsubscribeUser, sendNotification } from '../utils/actions'

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

export default function PushNotificationManager() {
    const [isPromoChecked, setIsPromoChecked] = useState(false)
    const [isEventChecked, setIsEventChecked] = useState(false)
    const [isSupported, setIsSupported] = useState(false)
    const [subscription, setSubscription] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const myFunc = async () => {
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                setIsSupported(true)
                await registerServiceWorker()
            }
        }

        myFunc()
    }, [])

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

    async function unsubscribeFromPush() {
        console.log('called unsubscribeFromPush() function')
        await subscription?.unsubscribe()
        setSubscription(null)
        await unsubscribeUser()
    }

    async function sendTestNotification() {
        console.log('called sendTestNotification() function')
        console.log(subscription)
        if (subscription) {
            const subscriptionJson = subscription.toJSON()
            await sendNotification(message, subscriptionJson)
            setMessage('')
        }
    }

    // Handle switch toggle
    function handleToggle(event) {
        const element = event.target
        const type = element.id.slice(0, -3)
        const isTurningOn = element.checked

        // Update the state
        switch (type) {
            case 'promo':
                setIsPromoChecked(isTurningOn)
                break
            case 'event':
                setIsEventChecked(isTurningOn)
                break
            default:
                console.log('No type is given')
        }
        console.log('Switch clicked, new state:', isTurningOn)
        if (isTurningOn) {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    alert('Permission Granted')
                    registerAndSendToAWS(type)
                } else {
                    alert('User does not allow permission')
                }
            })
        } else {
            unregister(type)
        }
    }

    function registerAndSendToAWS(type) {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(function (registration) {
                    registration.update()
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array('BNPnMguxotxK9szzmYdWGfRlwyA_l48_o0iHLBhGzPp6NMQP4xlK6k1FA-CRCUMFObInxSYdhlgFwTwjI8cpE2w')
                    })
                })
                .then(function (subscription) {
                    alert('Device subscripted:  ' + JSON.stringify(subscription))
                    const payload = { subscription, type }
                    // // Send the subscription object to your server
                    fetch('https://devapi.cloud.nuskin.com/webPushDemo/v1/subscriptions', {
                        method: 'POST',
                        body: JSON.stringify(payload),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                })
                .catch(function (error) {
                    console.error('Error subscribing to push notifications:', error)
                })
        } else {
            alert('No Service worker availalbe in navigator')
        }
    }

    // We need to make sure the subscription is still around (maybe a file or some kind of storage)
    // For this demo, I just need to turn it off by registering it again
    function unregister(type) {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(function (registration) {
                    registration.update()
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array('BNPnMguxotxK9szzmYdWGfRlwyA_l48_o0iHLBhGzPp6NMQP4xlK6k1FA-CRCUMFObInxSYdhlgFwTwjI8cpE2w')
                    })
                })
                .then(function (subscription) {
                    alert('Device subscripted:  ' + JSON.stringify(subscription))
                    const payload = { subscription, type }
                    // // Send the subscription object to your server
                    fetch('https://devapi.cloud.nuskin.com/webPushDemo/v1/subscriptions', {
                        method: 'DELETE',
                        body: JSON.stringify(payload),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                })
                .catch(function (error) {
                    console.error('Error subscribing to push notifications:', error)
                })
        } else {
            alert('No Service worker availalbe in navigator')
        }
    }

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>
    }

    return (
        <div>
            <h3>Push Notifications</h3>
            <div>
                <Switch id="promoSub" checked={isPromoChecked} onChange={handleToggle} color="primary" inputProps={{ 'aria-label': 'controlled' }} />
                <label htmlFor="promoSub">Subscribe to Promotion message</label>
            </div>
            <div>
                <Switch id="eventSub" checked={isEventChecked} onChange={handleToggle} color="primary" inputProps={{ 'aria-label': 'controlled' }} />
                <label htmlFor="eventSub">Subscribe to Event message</label>
            </div>

            {/* <Typography variant="body1">To receive push notifications, you need to subscribe to them.</Typography>
            {subscription ? (
                <>
                    <p>You are subscribed to push notifications.</p>
                    <div className="mb-5 mt-5">
                        <Button variant="text" onClick={unsubscribeFromPush}>
                            Unsubscribe
                        </Button>
                    </div>
                    <div className="mb-5">
                        <TextField variant="outlined" label="Enter notification message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <Button variant="contained" onClick={sendTestNotification}>
                            Send Test
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <p>You are not subscribed to push notifications.</p>
                    <Button onClick={subscribeToPush}>Subscribe</Button>
                </>
            )} */}
        </div>
    )
}
