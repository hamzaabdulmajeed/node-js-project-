import { useState } from "react";
import { login } from "../../config/firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    if (!email || !password) {
      toast.error("Please fill in both email and password fields.");
      return;
    }

    try {
      await login(email, password);
      toast.success("Login Successful!");
      navigate("/products");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const navigateToSignup = () => {
    navigate("/signup");  // Navigate to the Signup page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

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
      <button onClick={signIn}>Login</button>
      <p className="signup-prompt">
        Don't have an account?{" "}
        <span onClick={navigateToSignup} className="signup-link">
          Sign up here
        </span>
      </p>
      <ToastContainer />
    </div>
  );
}
