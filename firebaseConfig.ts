// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, doc
} from "firebase/firestore"
import { exerciseType } from "./dataTypes";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-ivVhkbDnSO0h7osfMUIqiu7hwWRgks",
  authDomain: "iknite-fitness-app.firebaseapp.com",
  projectId: "iknite-fitness-app",
  storageBucket: "iknite-fitness-app.appspot.com",
  messagingSenderId: "473644823661",
  appId: "1:473644823661:web:025c04b058eb438c68bb64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initializing services
const db = getFirestore()

// Collection ref
const exerciseColRef = collection(db, "exercises");
const workoutCategoriesColRef = collection(db, "workout-categories");
const workoutTypesColRef = collection(db, "workout-type");

// get collection data
getDocs(exerciseColRef)
    .then((exercise) => {
        let exerciseData : exerciseType[] = []
        exercise.docs.forEach((exerc) => exerciseData.push({
            ...exerc.data(),
            title: "",
            imagePreview: "",
            category: "",
            desc: [],
            focusArea: [],
            restTime: 0,
            duration: 0
        }))
    })
    .catch((err) => console.log(err.message))

