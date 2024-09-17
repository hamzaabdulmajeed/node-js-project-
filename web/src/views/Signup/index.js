import { useState } from "react";
import { register } from "../../config/firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signUp = async () => {
    try {
      await register(email, password);
      alert("register Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };
  const navigateToLogin = () => {
    navigate("/login");  // Navigate to the Signup page
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
      <p className="signup-prompt">
        Allready have an account?{" "}
        <span onClick={navigateToLogin} className="signup-link">
          Login here
        </span>
      </p>
    </div>
  );
}
