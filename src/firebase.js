import firebase from "firebase/app"
import "firebase/firebase-firestore"

const firebaseConfig = {
	apiKey: "AIzaSyAF395G2nP9M-GNwC5tHcH_rZftBjapKyQ",
	authDomain: "ticket-polimi.firebaseapp.com",
	projectId: "ticket-polimi",
	storageBucket: "ticket-polimi.appspot.com",
	messagingSenderId: "758207357344",
	appId: "1:758207357344:web:ee970266eddf17d7f044c5",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
