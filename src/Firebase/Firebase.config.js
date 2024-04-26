import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const all = import.meta.env;

const firebaseConfig = {
    // apiKey: all.APIKEY,
    // authDomain: all.AUTHDOMAIN,
    // projectId: all.PROJECTID,
    // storageBucket: all.STORAGEBUCKET,
    // messagingSenderId: all.MESSAGINGSENDERID,
    // appId: all.APPID,
    apiKey: "AIzaSyDznv7s3HEtKveO_pq2gcHT0Z6Ydy5tUag",
    authDomain: "react-dashboard-auth-fed48.firebaseapp.com",
    projectId: "react-dashboard-auth-fed48",
    storageBucket: "react-dashboard-auth-fed48.appspot.com",
    messagingSenderId: "186819475763",
    appId: "1:186819475763:web:11310d47ab051023dbe646",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
