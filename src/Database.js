import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://luv-wooya.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
};
const firebaseApp = firebase.initializeApp(config);
