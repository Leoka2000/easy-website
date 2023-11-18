import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {

    apiKey: `${process.env.REACT_APP_API_KEY}`,
//   we should create an environment variable for this API key!
    authDomain: "easy-tramitt.firebaseapp.com",
  
    projectId: "easy-tramitt",
  
    storageBucket: "easy-tramitt.appspot.com",
  
    messagingSenderId: "224189969504",
  
    appId: "1:224189969504:web:6fe0abf38d5c7aa02b3f05",
  
    measurementId: "G-7WFG3EG9N1"
  
  };
  

  const app = initializeApp(firebaseConfig)

 export const db = getFirestore(app)