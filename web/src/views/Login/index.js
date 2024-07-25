import { useState } from "react";
import { login } from "../../config/firebase/firebasemethod";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      await login(email, password);
      toast.success("Login Successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div className="orm-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="orm-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={() => signIn()}>Login</button>
    </div>
  );
}
