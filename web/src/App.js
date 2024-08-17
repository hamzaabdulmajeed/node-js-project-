import { useState, useEffect } from "react";
import Router from "./config/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged, auth } from "./config/firebase/firebasemethod";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import {store, persistor} from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import ProductList from "./views/products";
// import AddProduct from "./views/AddProducts";
import logo from "./logo.svg";
import "./App.css";

// function Navbar() {
//   return (
    
//       <div className="navbar">
//         <Link to="/" className="nav-link">products</Link>
//         <Link to="/ProductsList" className="nav-link">products</Link>
//         <Link to="/AddProducts" className="nav-link">Add Products</Link>
//         <Link to="/logout" className="nav-link">logout</Link>
//       </div>
//       )}

function App() {
//   const [user, setUser] = useState()
// useEffect(() => {
//   onAuthStateChanged(auth, (user) => {
//   if(user){
//     console.log("user logged in", user)
//     setUser(user)
//     const uid = user.uid
//   }else{

//   }
// })
// }, [])

  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >  
    <div className="App">
    <Navbar />
      
      <header className="App-header">
        {/* <h3>{user?.email}</h3> */}
        <Router />
        <ToastContainer />
        
      </header>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;

    