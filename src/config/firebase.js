import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUFeiulLhJ3fK1jJjuoFIsOJv-eADUL8w",
  authDomain: "estoque-app-bd2eb.firebaseapp.com",
  projectId: "estoque-app-bd2eb",
  storageBucket: "estoque-app-bd2eb.appspot.com",
  messagingSenderId: "307469986937",
  appId: "1:307469986937:web:49e3ec9e612e34576578a8"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;