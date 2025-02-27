import { useState } from "react";
import "./LoginButton.css"; // Import the CSS file

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      <h2 className="heading">Welcome to AccessEase</h2>
      <button
        className={isLoggedIn ? "logout" : "login"}
        onClick={handleToggle}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      <p className="status">
        {isLoggedIn ? "You are logged in ✅" : "You are logged out ❌"}
      </p>
    </div>
  );
};

export default AuthButton;
