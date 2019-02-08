importScripts('https://www.gstatic.com/fiebasejs/3.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebase.js/3.9.0/firebase-messaging.js');


var  config = {
    apiKey: "AIzaSyDCyW1t9NH7MY4ckgOQ9OAIeEHL3dA0c0M",
    authDomain: "connecting-3fade.firebaseapp.com",
    databaseURL: "https://connecting-3fade.firebaseio.com",
    projectId: "connecting-3fade",
    storageBucket: "connecting-3fade.appspot.com",
    messagingSenderId: "75220225305"
  };
  firebase.initializeApp(config);
  //retrieve an instance of firebase messaging so that it will handle background
  const messaging = firebase.messaging();