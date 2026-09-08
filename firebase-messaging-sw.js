importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB_UipI_NKsbMWrmqCh26t_L7lBbRRw3GE",
  authDomain: "khazaana-7088c.firebaseapp.com",
  projectId: "khazaana-7088c",
  storageBucket: "khazaana-7088c.firebasestorage.app",
  messagingSenderId: "988898941531",
  appId: "1:988898941531:web:851a3d3db24c85e9fa3d7e"
});

// Firebase Messaging needs this worker to be active for FCM token registration.
// Background notification messages are displayed automatically by FCM when the
// page is not in the foreground, so we intentionally do not call
// showNotification() here (that would risk duplicate notifications).
const messaging = firebase.messaging();
