// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMzrP2SsMn4soYdYFT2oozpT2TmJZYuU",
  authDomain: "mrhollowman-eat-it.firebaseapp.com",
  projectId: "mrhollowman-eat-it",
  storageBucket: "mrhollowman-eat-it.appspot.com",
  messagingSenderId: "647681357783",
  appId: "1:647681357783:web:f94fc585f7a93a00e57d92",
  measurementId: "G-M7FPBMN327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// //init services
// const projectFirestore = firebase.firestore();
// const projectAuth=firebase.auth();
// const projectStorage=firebase.storage();

// //timestamp
// const timestamp = firebase.firestore.Timestamp

// export { projectFirestore, projectAuth, projectStorage, timestamp}

export const auth = getAuth(app);
export default app;