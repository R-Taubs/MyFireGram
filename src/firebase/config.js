import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyD-Sb20HkrwuRtSG0uKieGGUB6kkmFrZgc",
    authDomain: "firegram-tutorial-projec-b9464.firebaseapp.com",
    projectId: "firegram-tutorial-projec-b9464",
    storageBucket: "firegram-tutorial-projec-b9464.appspot.com",
    messagingSenderId: "179369573587",
    appId: "1:179369573587:web:fbea52654769c19ce82826"
  };
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };