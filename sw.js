self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated.');
});

self.addEventListener('push', event => {
  let data = {};
  try {
    data = event.data.json();
  } catch (e) {
    data = { title: 'New Notification', body: event.data.text() };
  }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/icon.png'
    })
  );
});
