import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIRE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIRE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIRE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIRE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIRE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIRE_APP_ID}`,
};

// const firebaseConfig = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`,
//   authDomain: "reactecommerce-fea10.firebaseapp.com",
//   databaseURL:
//     "https://reactecommerce-fea10-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "reactecommerce-fea10",
//   storageBucket: "reactecommerce-fea10.appspot.com",
//   messagingSenderId: "562379286850",
//   appId: "1:562379286850:web:d505a03a9c5e572fcc00db",
// };

//initialize firebase:
const fireApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(fireApp);
export const auth = getAuth(fireApp);
