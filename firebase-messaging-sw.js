importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
   apiKey: "AIzaSyAENm0LwiSoKmdW3eSxIsrX_dL8pZHsniw",
    authDomain: "chatting-84fb7.firebaseapp.com",
    databaseURL: "https://chatting-84fb7.firebaseio.com",
    projectId: "chatting-84fb7",
    storageBucket: "chatting-84fb7.firebasestorage.app",
    messagingSenderId: "181377678457",
    appId: "1:181377678457:web:e6b79c0d342c11e94728a8",
     measurementId: "G-0TESJ516W7",
});

const messaging = firebase.messaging();