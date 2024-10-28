
import { createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import AddProduct from "../views/AddProducts";
import ProductList from "../views/products";
import ProductDetail from "../views/productDetail";
import { onAuthStateChanged, auth } from "./firebase/firebasemethod";
import { useEffect, useState } from "react";
import  Navbar  from "../components/navbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  // Main component acts as the root
    

    children: [
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/",
        element: <Login />,
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
        path: "/productDetail/:_id",
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

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
     console.log("user logged in", user)
        setUser(user);
        console.log("User logged in:", user);
       
        if (pathname === "/login") {
          navigate('/login');

        }
        
      } else {
        setUser(null);
        console.log("User logged out");
        navigate('/login');

        
        if (pathname === "/addProduct") {
          navigate("/login");
        }
        if (pathname === "/signup") {
          navigate('/signup');
          
        }
      }
    },[window.location.pathname, user]);


    // Cleanup subscription on unmount
    return () => unsubscribe();

  }, [navigate, window.location.pathname, user]);

   
  // , window.location.pathname, user
   
  return (
   
    
  

    
    <div >
    
    <Navbar />
      <Outlet /> {/* Renders the child route components */}
      
      </div>
    
  );
}
export default router
  
        
        

        
    


// export default function Router() {
//   return
//   // return <RouterProvider router={router} navbar={Navbar} />;
//   <RouterProvider router={router}>
//   <Navbar /> {/* Make sure Navbar is inside RouterProvider */}
// </RouterProvider>
// }
// export default function Router() {
//   return (
//     <RouterProvider router={router}>
//       <Navbar /> {/* Navbar is now within the RouterProvider */}
//       {/* <Main /> */}
//     </RouterProvider>
//   );
// }
