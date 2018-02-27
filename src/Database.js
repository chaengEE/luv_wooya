import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0hMpXcorka0JsrggH1OhdmBTtEoaBhP8",
    authDomain: "luv-wooya.firebaseapp.com",
    databaseURL: "https://luv-wooya.firebaseio.com",
    projectId: "luv-wooya",
    storageBucket: "luv-wooya.appspot.com",
    messagingSenderId: "373478064493"
});

const database = firebaseApp.database();

export default database;
