import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyByrIYQCV2y4Kj_GUXhgmPVwqOE5qRoWlM",
  authDomain: "authentic-project-2be95.firebaseapp.com",
  projectId: "authentic-project-2be95",
  storageBucket: "authentic-project-2be95.appspot.com",
  messagingSenderId: "233977466652",
  appId: "1:233977466652:web:6679c71af4f1994db074d9",
  measurementId: "G-6X45TR2SPZ"
})


export const auth = app.auth()
export default app
