import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore';

import { setNewBabyDragons } from '../../contexts/dragons.context';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT_1WbiuTmPyPDM778n9gYvoRnTz6VT0c",
  authDomain: "tulpagtochi-db.firebaseapp.com",
  projectId: "tulpagtochi-db",
  storageBucket: "tulpagtochi-db.firebasestorage.app",
  messagingSenderId: "624103859584",
  appId: "1:624103859584:web:a6a195ccf537fad84ccd65",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const getDocumentCollection = async(collectioName, userUid) => {
    // console.log(collectioName);
    // console.log(userUid);
    const docRef = doc(db, collectioName, userUid);
    const docSnapshot = await getDoc(docRef);
    try {

        if(docSnapshot.exists()) {
            return docSnapshot.data();
        }
        else {
            console.log("unable to find document")
        }
    }
    catch(error) {
        console.log(error);
    }
}

export const addDocumentToCollection = async(collectionName, userUid, objectArrayToAdd) => {
    //console.log(collectionName);
    // console.log(userUid);
    // console.log(objectArrayToAdd);
    try {

        const docRef = doc(db,collectionName, userUid);
        await setDoc(docRef,  objectArrayToAdd)
        .then(console.log('done adding a document to collection'));
    }
    catch(error)
    {
        console.log(error);
    }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    // console.log(collectionKey);
    // console.log(objectsToAdd)
    try {

        const collectionReference = collection(db, collectionKey);
        const batch = writeBatch(db);
        
        objectsToAdd.forEach((object) => {
            const docRef = doc(collectionReference, object.id);
            batch.set(docRef, object);
        });
        
        await batch.commit();
        console.log("done");
    }
    catch (error) {
        console.log(error);
    }

}

export async function getDocumentById(collectioName, documentId) {
    // console.log(collectioName);
    // console.log(documentId);
    const docRef = doc(db, collectioName, documentId);
    const docSnapshot = await getDoc(docRef);

    const returnedDocument = docSnapshot.data();

    return returnedDocument;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        const isNewUser = true; //if the userSnapshot does not exist, they're a new user and need random baby dragons

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            });
            //console.log(userAuth);
            isNewUser ? await setNewBabyDragons(userAuth) : console.log("isNewUser: " + isNewUser)
            //await setDoc(userDocRef, { ...userDocRef, isNewUser: false });
        }
        catch (error) {
            console.log('error creating the users', error.message);
        }
    }
    return userDocRef; 
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);