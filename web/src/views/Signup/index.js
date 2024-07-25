import { useState } from "react";
import { register } from "../../config/firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./index.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      await register(email, password);
      toast.success("Login Successful!");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="register-container">
      

      <h2>Register</h2>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={() => signUp()}>Register</button>
    </div>
  );
}
