import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  console.log("products ==>", products);

  const goToDetail = (item) => {
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {products.map((item) => (
        <div
          key={item.id}
          className="product-item"
          onClick={() => goToDetail(item)}
        >
          <img src={item.image} width="20" alt={item.title} />
          <h5>{item.title}</h5>
        </div>
      ))}
    </div>
  );
}
