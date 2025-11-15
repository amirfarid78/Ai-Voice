'use client';
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { firebaseConfig } from './config';

let firebaseApp: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

function getFirebase() {
  if (firebaseApp && auth && firestore) {
    return { firebaseApp, auth, firestore };
  }

  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    auth = getAuth(firebaseApp);
    firestore = getFirestore(firebaseApp);
  } else {
    firebaseApp = getApps()[0];
    auth = getAuth(firebaseApp);
    firestore = getFirestore(firebaseApp);
  }

  return { firebaseApp, auth, firestore };
}

export { getFirebase };
