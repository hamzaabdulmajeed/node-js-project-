// import { useDispatch, useSelector } from "react-redux";
// import "./navbar.css"; 
// import { setTheme } from "../../store/themeSlice";

// export default function Navbar() {
//   const dispatch = useDispatch()
//   const cart = useSelector(state => state.cart)
//   console.log("cart", cart)
//   return <div className="navbar">
//    <div className="box red" onClick={()=> dispatch(setTheme('red'))}>1</div>
//    <div className="box blue" onClick={()=> dispatch(setTheme('blue'))}>2</div>
//    <div className="box green" onClick={()=> dispatch(setTheme('green'))}>3</div>

//    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s" />
//    <p>{cart.length}</p>
//    </div>
  
// }
// import { useDispatch, useSelector } from "react-redux";
// import "./navbar.css"; 
// import { setTheme } from "../../store/themeSlice";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart);

//   return (
//     <div className="navbar">
//       <div className="theme-box red" onClick={() => dispatch(setTheme('red'))}>1</div>
//       <div className="theme-box blue" onClick={() => dispatch(setTheme('blue'))}>2</div>
//       <div className="theme-box green" onClick={() => dispatch(setTheme('green'))}>3</div>
      
//       <img 
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s" 
//         alt="cart" 
//         className="cart-icon"
//       />
//       <p className="cart-count">{cart.length}</p>
//     </div>
//   );
// }

// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import "./navbar.css"; 
// import { setTheme } from "../../store/themeSlice";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const cart = useSelector(state => state.cart);
//   const [showCart, setShowCart] = useState(false); // State to toggle cart dropdown

//   const toggleCart = () => {
//     setShowCart(!showCart); // Toggle cart visibility
//   };

//   return (
//     <div className="navbar">
//       <div className="theme-box red" onClick={() => dispatch(setTheme('red'))}>1</div>
//       <div className="theme-box blue" onClick={() => dispatch(setTheme('blue'))}>2</div>
//       <div className="theme-box green" onClick={() => dispatch(setTheme('green'))}>3</div>
      
//       <div className="cart-container">
//         <img 
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaWuBqdezOEyiEtjSWbCNliFIMMjIwIpQVQ&s" 
//           alt="cart" 
//           className="cart-icon"
//           onClick={toggleCart} // Toggle cart on click
//         />
//         <p className="cart-count">{cart.length}</p>
//         {showCart && (
//           <div className="cart-dropdown">
//             {cart.length > 0 ? (
//               cart.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <img src={item.image} alt={item.title} className="cart-item-image" />
//                   <div className="cart-item-info">
//                     <p className="cart-item-title">{item.title}</p>
//                     <p className="cart-item-price">${item.price}</p>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="cart-empty">Your cart is empty</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// import { useDispatch, useSelector } from "react-redux";
// import "./navbar.css";
// import { setTheme } from "../../store/themeSlice";
// import CartDropdown from "../cart"; // Import the CartDropdown component

// export default function Navbar() {
//   const dispatch = useDispatch();
//   // const theme = useSelector(state => state.themeStore.setTheme);

//   return (
//     <div className="navbar">
//       <div
//         className="theme-box red"
//         onClick={() => dispatch(setTheme("red"))}
//       >
//         1
//       </div>
//       <div
//         className="theme-box blue"
//         onClick={() => dispatch(setTheme("blue"))}
//       >
//         2
//       </div>
//       <div
//         className="theme-box green"
//         onClick={() => dispatch(setTheme("green"))}
//       >
//         3
//       </div>

//       <CartDropdown /> {/* Include the CartDropdown component */}
//     </div>
//   );
// }
import { useDispatch, useSelector } from "react-redux";
import "./navbar.css";
import { setTheme } from "../../store/themeSlice";
import CartDropdown from "../cart";

export default function Navbar() {
  const dispatch = useDispatch();
  const currentColor = useSelector(state => state.themeStore.color); // Correctly accessing the color

  return (
    <div className="navbar" style={{ backgroundColor: currentColor }}>
      <div
        className="theme-box red"
        onClick={() => dispatch(setTheme("red"))}
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
        className="theme-box green"
        onClick={() => dispatch(setTheme("green"))}
      >
        3
      </div>

      <CartDropdown /> {/* Include the CartDropdown component */}
    </div>
  );
}
