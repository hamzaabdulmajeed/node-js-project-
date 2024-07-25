import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  useEffect(() => {
    
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
      .catch(err => console.error("Failed to fetch product", err));
  }, [id]); 

  console.log("product ==>", product);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={product.image} width="50" alt={product.title} />
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
}