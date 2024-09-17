import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { setTheme } from "../../store/themeSlice";
import { addProduct, logout,auth } from  "../../config/firebase/firebasemethod";
import CartDropdown from "../cart";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "../../config/firebase/firebasemethod";
import { useNavigate, useLocation } from "react-router-dom";
import ProductList from "../../views/products";
export default function Navbar() {
  const dispatch = useDispatch();
  const currentColor = useSelector(state => state.themeStore.color); // Correctly accessing the color
 const navigate = useNavigate()
 const [user, setUser] = useState(null)
 const location = useLocation();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);  // User is logged in
    } else {
      setUser(null);  // User is logged out
    }
  });// Cleanup the subscription when the component unmounts
  return () => unsubscribe();
}, []);
  
 
 const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");  // Redirect to login page after logout
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };
  const handleAddProduct = () => {
    navigate("/addProduct");  // Directly navigate to the AddProduct page
  };
  const handleProduct = () => {
    navigate("/products");  // Directly navigate to the AddProduct page
  };
  return (
    <div className="navbar" style={{ backgroundColor: currentColor }}>
      <div
        className="theme-box black"
        onClick={() => dispatch(setTheme("black"))}
      >
        1
      </div>
      <div
        className="theme-box blue"
        onClick={() => dispatch(setTheme("blue"))}
      >
        2
      </div>
      <div
        className="theme-box moccasin"
        onClick={() => dispatch(setTheme("moccasin"))}
      >
        3
      </div>
      {/* <div>
      <button style={{width:"100px"}} onClick={handleLogout}>Logout</button>
      </div>
      <div>
      <button style={{width:"100px"}} onClick={handleAddProduct}>addProduct</button>
      </div>
      <div>
      <button style={{width:"100px"}} onClick={handleProduct}>Product</button>
      </div> */}
        {/* Conditionally render buttons based on user authentication */}
        {user ? (
        <>
          <div>
            <button style={{ width: "100px" }} onClick={handleLogout}>
              Logout
            </button>
          </div>
          {/* Only show the "Add Product" button if NOT on the "Add Product" page */}
          {location.pathname !== "/addProduct" && (
            <div>
              <button style={{ width: "100px" }} onClick={handleAddProduct}>
                Add Product
              </button>
            </div>
            
          )}
          {location.pathname !== "/products" && (
            <div>
              <button style={{ width: "100px" }} onClick={handleProduct}>
                 Products
              </button>
            </div>
            
          )}
          
        </>
      ) : null}

      <CartDropdown />  
      {/* Include the CartDropdown component */}
    </div>
  );
}
