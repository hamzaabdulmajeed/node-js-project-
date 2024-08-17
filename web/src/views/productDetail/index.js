// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getProductById } from "../../config/firebase/firebasemethod";
// import { Card } from "antd";
// import { UseSelector, useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../store/cartSlice";
// import "./index.css"

// const { Meta } = Card;

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate()
//   const [product, setProduct] = useState(null);
//   const dispatch = useDispatch()

//   const color = useSelector(state => state.color)
//   console.log('color', color)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const productData = await getProductById(id);
//       setProduct(productData);
//     };

//     fetchProduct();
//   }, [id]);
//   // useEffect(() => {

//   //   getProductById()
//   // }, [])

//   // const getProductById = async () => {
//   //   const product = await getProductById(id)
//   //   setProduct(product)
//   // }

//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="product-detail" style={{backgroundColor: color}} >

//     <button onClick={() => dispatch(addToCart(product))}>Add to Cart </button>
//       <Card >
//       <div className="product-detail-card">
//         <div>
//          {<img alt={product.title} src={product.image} />}
//          </div>
//          <div>
//         <p>{product.title} </p>
        
//         <p>{product.description}</p>
        
//         <p>{`Price: $${product.price}`}</p>
//         </div>
//         </div>
//       </Card>
//     </div>
//   );
// }
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const productData = await getProductById(id);
//       setProduct(productData);
//     } catch (error) {
//       console.error("Error fetching product details:", error);
//     }
//   }

//   fetchData();
// }, [id]);
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../config/firebase/firebasemethod";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux"; // Corrected imports
import { addToCart } from "../../store/cartSlice";
import "./index.css";

const { Meta } = Card;

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const color = useSelector((state) => state.themeStore.color); // Correctly access the theme color from Redux
  console.log("color", color);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail" style={{ backgroundColor: color }}>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <Card>
        <div className="product-detail-card">
          <div>
            <img alt={product.title} src={product.image} />
          </div>
          <div>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{`Price: $${product.price}`}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
