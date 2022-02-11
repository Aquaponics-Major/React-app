import firebase from 'firebase';

const firebaseConfig = {
	// Your Credentials
  apiKey: "AIzaSyB-JVOhbRXzkk3XkMLeHpXSwVirK6tJSsU",
  authDomain: "aquaponics-5a5a7.firebaseapp.com",
  databaseURL: "https://aquaponics-5a5a7-default-rtdb.firebaseio.com",
  projectId: "aquaponics-5a5a7",
  storageBucket: "aquaponics-5a5a7.appspot.com",
  messagingSenderId: "275682898912",
  appId: "1:275682898912:web:31073ba85ccff15ef8f185",
  measurementId: "G-JDW35B8V2K"
};
	
firebase.initializeApp(firebaseConfig);


export default firebase;
