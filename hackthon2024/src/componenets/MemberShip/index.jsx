import React, { useState } from "react";
import "./style.css";
const MemberShip = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    payment: "",
    membership: "",
    health: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data or handle form logic here
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="membership-form">
        <h1>Fitness Club Membership Form</h1>

        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="payment">Payment Mode:</label>
        <select
          id="payment"
          name="payment"
          value={formData.payment}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment Mode</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
          <option value="netbanking">Net Banking</option>
        </select>

        <fieldset>
          <legend>Membership Type:</legend>
          <label>
            <input
              type="radio"
              name="membership"
              value="basic"
              checked={formData.membership === "basic"}
              onChange={handleChange}
              required
            />{" "}
            Basic
          </label>
          <label>
            <input
              type="radio"
              name="membership"
              value="premium"
              checked={formData.membership === "premium"}
              onChange={handleChange}
              required
            />{" "}
            Premium
          </label>
          <label>
            <input
              type="radio"
              name="membership"
              value="vip"
              checked={formData.membership === "vip"}
              onChange={handleChange}
              required
            />{" "}
            VIP
          </label>
        </fieldset>

        <label htmlFor="health">Health Issues:</label>
        <textarea
          id="health"
          name="health"
          placeholder="Mention any health issues (if any)"
          rows="3"
          value={formData.health}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="agree">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />{" "}
          I agree to the terms and conditions
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MemberShip;
