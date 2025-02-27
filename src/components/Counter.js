import React, { useState } from "react";

const Counter = () => {
  // Step 1: Declare a state variable for count
  const [count, setCount] = useState(0);

  // Step 2: Create functions to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={styles.button}>
        ➕ Increase
      </button>
      <button onClick={decrement} style={styles.button}>
        ➖ Decrease
      </button>
      <button onClick={reset} style={styles.resetButton}>
        🔄 Reset
      </button>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    width: "250px",
    margin: "20px auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
  button: {
    margin: "5px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  resetButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Counter;
