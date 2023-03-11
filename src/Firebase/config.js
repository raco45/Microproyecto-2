
import { initializeApp } from "firebase/app";
import{getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDHQNToWRV2yTobrbCEg64UYsGUp5Q1tp8",
  authDomain: "microproyecto2-43daa.firebaseapp.com",
  projectId: "microproyecto2-43daa",
  storageBucket: "microproyecto2-43daa.appspot.com",
  messagingSenderId: "682725764130",
  appId: "1:682725764130:web:bf3c98a36fdbab67d0ee7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);  //conexion con el modulo de autenticacion de firebase
export const db= getFirestore(app);  //conexion con el modulo de base de datos de firebase
export const store= getStorage(app);  //conexion con el modulo de Storage de firebase

export const googleProvider= new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:"select_account"});