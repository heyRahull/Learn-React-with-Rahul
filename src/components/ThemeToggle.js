import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
      className="themeToggle"
    >
      <h2>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2>
      <button onClick={toggleTheme} style={styles.button}>
        Toggle Theme
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ThemeToggle;
