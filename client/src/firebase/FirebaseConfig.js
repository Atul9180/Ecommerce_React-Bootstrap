import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArg2J0QZmt9RLAbMVBMUIjAEZeDVZjsN8",
  authDomain: "reactecommerce-fea10.firebaseapp.com",
  databaseURL:
    "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactecommerce-fea10",
  storageBucket: "reactecommerce-fea10.appspot.com",
  messagingSenderId: "562379286850",
  appId: "1:562379286850:web:d505a03a9c5e572fcc00db",
};

//initialize firebase:
const fireApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(fireApp);
export const auth = getAuth(fireApp);
