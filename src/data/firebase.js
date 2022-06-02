import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCG8zVmZMk_oqimR4NcehsDI9UXewMJ6UM",
  authDomain: "webfood-45487.firebaseapp.com",
  databaseURL: "https://webfood-45487-default-rtdb.firebaseio.com",
  projectId: "webfood-45487",
  storageBucket: "webfood-45487.appspot.com",
  messagingSenderId: "869104997791",
  appId: "1:869104997791:web:42d887b7eaf17ddc6399aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
