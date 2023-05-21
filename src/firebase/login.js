import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBjCsFVI5cPepO2KRBrHeGTiQV_l6E_Oho",
    authDomain: "shopping-2840b.firebaseapp.com",
    databaseURL: "https://shopping-2840b-default-rtdb.firebaseio.com",
    projectId: "shopping-2840b",
    storageBucket: "shopping-2840b.appspot.com",
    messagingSenderId: "59454923657",
    appId: "1:59454923657:web:58ef7ed700d77201df7758",
    measurementId: "G-RS704421WS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);