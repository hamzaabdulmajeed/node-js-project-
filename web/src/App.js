// import { useState, useEffect } from "react";
// import router from "./config/router";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { onAuthStateChanged, auth } from "./config/firebase/firebasemethod";
// import { Link } from "react-router-dom";
// import Navbar from "./components/navbar";
// import {store, persistor} from "./store";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { RouterProvider } from "react-router-dom";
// import { setTheme } from "./store/themeSlice";
// import { useDispatch, useSelector } from "react-redux";

// // import ProductList from "./views/products";
// // import AddProduct from "./views/AddProducts";
// import logo from "./logo.svg";
// import "./App.css";

// // function Navbar() {
// //   return (
    
// //       <div className="navbar">
// //         <Link to="/" className="nav-link">products</Link>
// //         <Link to="/ProductsList" className="nav-link">products</Link>
// //         <Link to="/AddProducts" className="nav-link">Add Products</Link>
// //         <Link to="/logout" className="nav-link">logout</Link>
// //       </div>
// //       )}


// function App() {
//   const [user, setUser] = useState()
//   // const dispatch = useDispatch()
//   const color = useSelector(state => state.themeStore.color);  // Ensure themeStore and color are correctly set in the state
//   // Correctly accessing the color
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

//   return (
//     // <Provider store={store}>
//     // <PersistGate loading={null} persistor={persistor} >  
//     // {/* <div className="App"> */}
//     // <RouterProvider router={router}>
      
//     //       <Navbar />
//     //       <h3>{user?.email}</h3>

      
//     //   {/* <header className="App-header"> */}
//     //     {/* <Router /> */}
//     //     <ToastContainer />
//     //     </RouterProvider>

//     //   {/* </header> */}
//     // {/* </div> */}
//     // </PersistGate>
//     // </Provider>
    
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
     
//       <div className="App" style={{ backgroundColor: color }}>
//         <RouterProvider router={router}>
        
//           <Navbar />
//           {/* <Navbar /> Ensure Navbar is within the RouterProvider */}
//           <ToastContainer />
//         </RouterProvider>
//         </div>
    
//       </PersistGate>
//     </Provider>
   
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { onAuthStateChanged, auth } from "./config/firebase/firebasemethod";
import Navbar from "./components/navbar";
import { store, persistor } from "./store";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const color = useSelector((state) => state.themeStore.color);  // Access theme color

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user logged in", user);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <Navbar />
      <h3>{user?.email}</h3>
      {/* <ToastContainer /> */}
    </div>
  );
}

function RootApp() {
  return (
    <div>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </PersistGate>
    </Provider>
    </div>
  );
}

export default RootApp;