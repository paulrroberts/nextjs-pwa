console.log('loading sw.js with notificationonclick2')


self.addEventListener("install", (event) => {
  console.log("Custom Service Worker installing.")
  // Add any setup you need here
})

self.addEventListener("activate", (event) => {
  console.log("Custom Service Worker activating.")
  // Add any activation steps here
})

self.addEventListener('push', function(event) {
  const data = event.data.json()
  console.log('Brand new Push2 received....')
  console.log('data.body:', data.body)

  const options = {
      body: data.body,
      icon: '/apple-touch-icon.png',
      data: {
        url: '/nuskin/home'
      }
  }
  event.waitUntil(
      self.registration.showNotification(data.title, options)
  )
})

self.addEventListener("notificationclick", (event) => {
  console.log("On notification click: ", event.notification.tag)
  console.log("url: ", event.notification.data.url)
  event.notification.close()

  const targetUrl = event.notification.data.url

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients.matchAll({ type: "window", }).then((clientList) => {
        console.log('clientList:', clientList)
        for (const client of clientList) {
          console.log('client:', client)
          if (client.url === targetUrl && "focus" in client) return client.focus()
        }
        if (clients.openWindow) return clients.openWindow(targetUrl)
      }),
  )
})
