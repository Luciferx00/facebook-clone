import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZd23hADFMTbvz_bSFv4KidAh5BRtwGi8",
    authDomain: "buzz-itt.firebaseapp.com",
    projectId: "buzz-itt",
    storageBucket: "buzz-itt.appspot.com",
    messagingSenderId: "918963576758",
    appId: "1:918963576758:web:d34aebe5214a5b8fea2b17"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;