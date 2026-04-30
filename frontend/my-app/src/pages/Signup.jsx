import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup error");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>

        {/* Logo */}
        <div className="auth-logo">
          <div className="logo-mark">
            <svg viewBox="0 0 24 24">
              <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
          <div className="logo-text">CIS <span>ENGINEERING</span></div>
        </div>

        {/* Heading */}
        <div>
          <h2 className="auth-heading">Create account</h2>
          <p className="auth-sub">Get started with CIS Engineering</p>
        </div>

        <div className="auth-divider" />

        {/* Fields */}
        <input
          type="text"
          name="fullname"
          placeholder="Full name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Create account</button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>

      </form>
    </div>
  );
};

export default Signup;