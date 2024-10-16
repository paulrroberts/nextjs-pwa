'use client'

import React, { useState, useEffect } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { urlBase64ToUint8Array } from '../utils/util'
import { subscribeUser, unsubscribeUser, sendNotification } from '../utils/actions'

export default function PushNotificationManager() {
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
        if (subscription) {
            const subscriptionJson = subscription.toJSON()
            await sendNotification(message, subscriptionJson)
            setMessage('')
        }
    }

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>
    }

    return (
        <div>
            <h3>Push Notifications</h3>
            <Typography variant="body1">To receive push notifications, you need to subscribe to them.</Typography>
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
            )}
        </div>
    )
}
