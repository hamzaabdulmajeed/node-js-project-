import { useEffect, useState } from "react";
import { getProducts } from "../../config/firebase/firebasemethod";
import "./index.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getProducts();
      setProducts(productsList);
    };

    fetchData();
  }, []);

  // useEffect(async () => {
  //   const products = await getProducts()
  //   setProducts(products)
  // }, [])

  const buyNow = (product) => {
    navigate(`/productDetail/${product._id}`);
  };

  const { Meta } = Card;

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="products">
        {products.length > 0 ? (
          products.map((product) => (
            <Card
              className="product-item"
              key={product._id}
              hoverable
              // style={{
              //   width: 240,
              //   margin: 16,
              // }}
              cover={<img alt={product.title} src={product.image} />}
            >
              <Meta title={product.title} />
              <Meta title={product.description} />
              <Meta title={product.price} />
              <button onClick={() => buyNow(product)}>buy now</button>
            </Card>
            //   <div key={product.id} className="product-item">
            //     <img src={product.image} alt={product.title} style={{width:1000}} />
            //     <h3>{product.title}</h3>
            //     <p>{product.description}</p>
            //     <p>{product.price}</p>

            //   </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
// useEffect(() => {
//   async function fetchData() {
//     try {
//       const productsList = await getProducts();
//       setProducts(productsList);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   }

//   fetchData();
// }, []);
