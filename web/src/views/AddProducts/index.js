import { useState } from "react";
import { toast } from "react-toastify";
import { addProduct } from "../../config/firebase/firebasemethod";
import "./index.css";
export default function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const onSubmit = async () => {
    try {
      await addProduct({ title, description, price, image });
      toast.success("Product added Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="product-container">
      <h2>Add Product</h2>

      <input
        id="title"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        id="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        id="price"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        id="file"
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}



