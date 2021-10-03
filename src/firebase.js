import firebase from 'firebase';
import '@firebase/auth';
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAcM-sxNZT4QXA44gcSEj_A6Uy2MsVTgyw',
	authDomain: 'persistent-doctor.firebaseapp.com',
	projectId: 'persistent-doctor',
	storageBucket: 'persistent-doctor.appspot.com',
	messagingSenderId: '559785915675',
	appId: '1:559785915675:web:34ed361339f63fcd2e8fbe',
	measurementId: 'G-WL5GXXTNN9'
};

// //intializeApp parses the firebaseConfig into firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();
// const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
// export default db;
