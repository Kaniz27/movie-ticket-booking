import { initializeApp } from 'firebase/app';
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
} from 'firebase/auth';


const firebaseConfig = {
apiKey: 'REPLACE_WITH_YOUR_API_KEY',
authDomain: 'REPLACE_WITH_YOUR_AUTH_DOMAIN',
projectId: 'REPLACE_WITH_YOUR_PROJECT_ID',
storageBucket: 'REPLACE_WITH_YOUR_STORAGE_BUCKET',
messagingSenderId: 'REPLACE_WITH_YOUR_MESSAGING_SENDER_ID',
appId: 'REPLACE_WITH_YOUR_APP_ID',
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
auth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
};