'use server'

import webpush from 'web-push'

webpush.setVapidDetails('mailto:proberts@nuskin.com', process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY)

let subscription = null

export async function subscribeUser(sub) {
    console.log('called subscribeUser() function')
    subscription = sub
    console.log('subscription from actions.js', subscription)
    // In a production environment, you would want to store the subscription in a database
    // For example: await db.subscriptions.create({ data: sub })
    return { success: true }
}

export async function unsubscribeUser() {
    console.log('called unsubscribeUser() function')
    subscription = null
    // In a production environment, you would want to remove the subscription from the database
    // For example: await db.subscriptions.delete({ where: { ... } })
    return { success: true }
}

export async function sendNotification(message, subscriptionJSON) {
    console.log('called sendNotification() function')
    subscription = subscriptionJSON
    if (!subscription) {
        throw new Error('No subscription available')
    }

    try {
        await webpush.sendNotification(
            subscription,
            JSON.stringify({
                title: 'Test Notification',
                body: message,
                icon: '/icon-192x192.png'
            })
        )
        return { success: true }
    } catch (error) {
        console.error('Error sending push notification:', error)
        return { success: false, error: 'Failed to send notification' }
    }
}
