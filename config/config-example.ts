import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "Change this to your API key",
  authDomain: "Change this to your authDomain",
  databaseURL: "Change this to your databaseURL",
  projectId: "Change this to your projectID",
  storageBucket: "Change this to your storageBucket",
  messagingSenderId: "Change this to your messagingSenderId",
  appId: "Change this to your appId"

};

const app = initializeApp(firebaseConfig);