// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCxyni04YEBBYtdpWQlN-7Ij-JsJj9aGcg",
	authDomain: "github-profiles-b79e1.firebaseapp.com",
	projectId: "github-profiles-b79e1",
	storageBucket: "github-profiles-b79e1.appspot.com",
	messagingSenderId: "791678301652",
	appId: "1:791678301652:web:f9ca98e79824d662725241",
	measurementId: "G-00M2VY1YWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
