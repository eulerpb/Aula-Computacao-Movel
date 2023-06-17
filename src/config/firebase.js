import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjF938g-KaIIGsXadLIMv4QxZ757YSsxE",
  authDomain: "estoque-f4e7c.firebaseapp.com",
  projectId: "estoque-f4e7c",
  storageBucket: "estoque-f4e7c.appspot.com",
  messagingSenderId: "742346216006",
  appId: "1:742346216006:web:b446dab0bb9cf1db17b047"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
