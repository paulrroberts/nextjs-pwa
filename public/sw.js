console.log('loading sw.js')


self.addEventListener("install", (event) => {
  console.log("Custom Service Worker installing.");
  // Add any setup you need here
});

self.addEventListener("activate", (event) => {
  console.log("Custom Service Worker activating.");
  // Add any activation steps here
});

self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log('Push received....');
  console.log('data.body:', data.body);

  const options = {
      body: data.body,
      icon: '/apple-touch-icon.png'
  };
  event.waitUntil(
      self.registration.showNotification(data.title, options)
  );
});

