
import Firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDcHtDM8bhInpq62cV2RyWvJbemHHRfOfw",
    authDomain: "pizza-planet-f8a35.firebaseapp.com",
    databaseURL: "https://pizza-planet-f8a35.firebaseio.com",
    projectId: "pizza-planet-f8a35",
    storageBucket: "pizza-planet-f8a35.appspot.com",
    messagingSenderId: "470376824109",
    appId: "1:470376824109:web:115430f4f0b1213e17a7a4"
  };
  // Initialize Firebase
  const firebbaseApp = Firebase.initializeApp(firebaseConfig);

  const db = firebbaseApp.database();

  //this will automatically create folder in the firebase.
  export const dbMenuRef = db.ref('menu');

  //then with in the firebase, set the rules read and write to true for admin user 