// import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
// // import Dashboard from "../views/Dashboard";
// // import Detail from "../views/Detail";
// import Login from "../views/Login";
// import Signup from "../views/Signup";
// import AddProduct from "../views/AddProducts";
// import ProductList from "../views/products";
// import ProductDetail from "../views/productDetail";
// // import Navbar from "../components/navbar";
// import { onAuthStateChanged, auth } from "./firebase/firebasemethod";
// import { useEffect, useState } from "react";
// const router = createBrowserRouter([
  
//   {
//     path: "/",
//     element:<Main />,
//     children: [{
//      path:"/",
//       element: <ProductList />,
//   },
//   // {
//   //   path: "/detail/:id",
//   //   element: <Detail />,
//   // },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "signup",
//     element: <Signup />,
//   },
//   {
//     path: "addProduct",
//     element: <AddProduct />,
//   },
  
//   {
//     path: "/productDetail/:id",
//     element: <ProductDetail/>,
//   },]
// }
// ]);
// function Main(){
//   const navigate = useNavigate()
//   const [user, setUser] = useState()

//   useEffect{ ()=>{
// const {pathname} =window.location
// if(user){
//   console.log("user logged in", user)
// }
// if(pathname === "/login")
// navigate('/')
//   }}
// else {
//   console.log("user logged out")
//   if(pathname === "/addProduct"){
//     navigate("/login")
//   }
// }
// },(window.location.pathname, user)

// return <div>
//   <Outlet />
// </div>

// export default function Router() {
//   return <RouterProvider router={router} />;
// }
import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import AddProduct from "../views/AddProducts";
import ProductList from "../views/products";
import ProductDetail from "../views/productDetail";
import { onAuthStateChanged, auth } from "./firebase/firebasemethod";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  // Main component acts as the root
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/productDetail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { pathname } = window.location;

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User logged in:", currentUser);
        
        if (pathname === "/login") {
          navigate('/');
        }
      } else {
        setUser(null);
        console.log("User logged out");
        
        if (pathname === "/addProduct") {
          navigate("/login");
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, [navigate, window.location.pathname, user]);

  return (
    <div>
      <Outlet /> {/* Renders the child route components */}
    </div>
  );
}

export default function Router() {
  return <RouterProvider router={router} />;
}
