// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKrbIlqRtkH-m4gj5VN0R7K4vnFYZA25U",
  authDomain: "daily-news-react-c393a.firebaseapp.com",
  projectId: "daily-news-react-c393a",
  storageBucket: "daily-news-react-c393a.appspot.com",
  messagingSenderId: "423017770762",
  appId: "1:423017770762:web:7d0fac33842aa539ea14f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;