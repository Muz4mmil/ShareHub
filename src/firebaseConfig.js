import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNue2gX4BvYWkWdisG8BRkxNidAmnCp0Q",
    authDomain: "app-sharehub.firebaseapp.com",
    projectId: "app-sharehub",
    storageBucket: "app-sharehub.appspot.com",
    messagingSenderId: "22683360244",
    appId: "1:22683360244:web:b74dc4506f7108a9f7f7a1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);