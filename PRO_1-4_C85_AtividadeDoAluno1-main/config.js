import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD1re3ybEghNTL-wWGYcXbi_vlbcglDXUY",
  authDomain: "projetoaula-98a6f.firebaseapp.com",
  projectId: "projetoaula-98a6f",
  storageBucket: "projetoaula-98a6f.appspot.com",
  messagingSenderId: "1009058363741",
  appId: "1:1009058363741:web:9f684a0d053ebcfabe90b4"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
