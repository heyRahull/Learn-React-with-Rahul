import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User Info:\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>📝 User Form</h2>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
