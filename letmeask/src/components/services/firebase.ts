import{ initializeApp } from 'firebase/app'

 import { getAuth } from 'firebase/auth';
 import { getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp ( {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
});

 const auth = getAuth(firebaseApp);
 const db = getFirestore(firebaseApp);

//  onAuthStateChanged (auth, user => {
//      if(user ≠ null) {
//          console.log('logged in!');
//      } else {
//          console.log('No user');
//      }
//  });