import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getFirestore,
    setDoc,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDe0HCYv6rZ97du6OEEJvLLt9vPF1Regpk",
    authDomain: "potted-db.firebaseapp.com",
    projectId: "potted-db",
    storageBucket: "potted-db.appspot.com",
    messagingSenderId: "1064245355540",
    appId: "1:1064245355540:web:b04424b5539beee5b3f301",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestoreDB = getFirestore();

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(firestoreDB, `users/${userAuth.uid}`);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }
    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
