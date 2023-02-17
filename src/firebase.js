// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEgx23x-wl0ZM07-nfFRfmYhfzCUNP7CM',
  authDomain: 'rona-rates-1f112.firebaseapp.com',
  projectId: 'rona-rates-1f112',
  storageBucket: 'rona-rates-1f112.appspot.com',
  messagingSenderId: '521618398134',
  appId: '1:521618398134:web:789cc1569aedb6875cff17',
  measurementId: 'G-9D9V6EGMNM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
