import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecart-login-598fa.firebaseapp.com",
  projectId: "onecart-login-598fa",
  // storageBucket: "onecart-login-598fa.firebasestorage.app",
  storageBucket: "onecart-login-598fa.appspot.com",
  messagingSenderId: "1032295722279",
  appId: "1:1032295722279:web:9584ae2ac39a696fd80d02",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDzKnjGxrDovWzaI4kRd7EHkrkC5fUv8qI",
//   authDomain: "onecart-login-598fa.firebaseapp.com",
//   projectId: "onecart-login-598fa",
//   storageBucket: "onecart-login-598fa.firebasestorage.app",
//   messagingSenderId: "1032295722279",
//   appId: "1:1032295722279:web:9584ae2ac39a696fd80d02",
//   measurementId: "G-BE4L1MZ55M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
