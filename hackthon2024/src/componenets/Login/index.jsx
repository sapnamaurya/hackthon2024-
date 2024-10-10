import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

import Footer from "../Footer";
import ContHeader from "../ContHeader";

const Login = () => {
  const navigate = useNavigate();
  // State to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to hold error messages
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    // Perform Login logic (API call or similar)
    console.log("Loging up...", formData);

    // Reset the form
    setFormData({ username: "", email: "", password: "" });
  };
  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <>
      <ContHeader />
      <div style={{ height: " 70vh;", padding: " 2% ", background: "white" }}>
        <div style={styles.container}>
          <h1>Login</h1>
          {error && <p style={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={handleLogin} type="submit" style={styles.button}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "0px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#e84949",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  cont: {
    display: "flex",
  },
};

export default Login;
