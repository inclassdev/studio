import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  projectId: "ethereal-folio-u1l1u",
  appId: "1:653082140505:web:ce7fd02467455790c13648",
  storageBucket: "ethereal-folio-u1l1u.firebasestorage.app",
  apiKey: "AIzaSyD-FZBM2qriDHzzNwU5jyqm_SdgxuoEvEY",
  authDomain: "ethereal-folio-u1l1u.firebaseapp.com",
  measurementId: "",
  messagingSenderId: "653082140505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
