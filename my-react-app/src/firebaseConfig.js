import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAvI95xTDujCYZX3fh5MtLxYNvT7PFBmGU",
  authDomain: "tiendamates912.firebaseapp.com",
  projectId: "tiendamates912",
  storageBucket: "tiendamates912.firebasestorage.app",
  messagingSenderId: "787259796361",
  appId: "1:787259796361:web:2a196f0f61101e42774f58"
};

const app = initializeApp(firebaseConfig);

export default app;