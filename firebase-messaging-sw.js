importScripts(
  "https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAUZxP--9ycqK5oom_CZMVH5imyes_aKHU",
  authDomain: "khazaana-7088c.firebaseapp.com",
  projectId: "khazaana-7088c",
  storageBucket: "khazaana-7088c.firebasestorage.app",
  messagingSenderId: "988898941531",
  appId: "1:988898941531:web:851a3d3db24c85e9fa3d7e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Background message:", payload);

  const title =
    payload.notification?.title || "🔔 NEW Khazaana ORDER";

  const options = {
    body:
      payload.notification?.body ||
      "A new Khazaana order has arrived.",
    icon: "/icon.png",
    badge: "/icon.png",
    data: {
      link:
        payload.fcmOptions?.link ||
        payload.data?.link ||
        "https://helpkhazaana-eng.github.io/khazaana---admin/"
    }
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const link =
    event.notification?.data?.link ||
    "https://helpkhazaana-eng.github.io/khazaana---admin/";

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then((clientList) => {

      for (const client of clientList) {
        if ("focus" in client) {
          client.navigate(link);
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(link);
      }
    })
  );
});