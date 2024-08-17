// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore,  collection, addDoc, getDocs, getDoc, doc  } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf7LKWC1ZSDjEmMtPBVp6gi0z6PVoJx4Y",
  authDomain: "exp-1-1bfa1.firebaseapp.com",
  projectId: "exp-1-1bfa1",
  storageBucket: "exp-1-1bfa1.appspot.com",
  messagingSenderId: "559834894928",
  appId: "1:559834894928:web:a17f11fb1321711ddaf755",
  measurementId: "G-9H842ND7RD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


async function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

async function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    //   alert("Success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   alert(errorMessage);
    });
}
async function addProduct(product) {

  const {title, description, price, image} = product
  const storageRef = ref(storage, 'products/' + image.name);
  await uploadBytes(storageRef, image)
  const url = await getDownloadURL(storageRef)

  return addDoc(collection(db, "products"), {
    title, description, price, image: url
    });
}
// async function getProducts() {
//   const productsCol = collection(db, "products");
//   const productSnapshot = await getDocs(productsCol);
//   const productList = productSnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data()
//   }));
//   return productList;
// }
async function getProducts(){
const querySnapshot = await getDocs(collection(db, "products"));
const products = []
querySnapshot.forEach((doc) => {
  const data = doc.data()
  data.id = doc.id
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  products.push(data)
});
return products
}

async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    throw new Error("No such document!");
  }
}


// async function getProductById(id){
// const docRef = doc(db, "products", "id");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }
// return docSnap
// }

export { register, login, onAuthStateChanged, auth, addProduct, getProducts, getProductById };
