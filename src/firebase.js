// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpW-kFZ2Kgi9yTHmtCdMpV0y6zGlM2Ca0',
  authDomain: 'converse2k25.firebaseapp.com',
  projectId: 'converse2k25',
  storageBucket: 'converse2k25.firebasestorage.app',
  messagingSenderId: '51039039017',
  appId: '1:51039039017:web:f999cceb69db3446283638',
  measurementId: 'G-71EN0H21W7',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
