import React from "react";

const HelloUser = ({ name = "Guest" }) => {
  return <h1 style={styles.heading}>Hello, {name}!</h1>;
};

const styles = {
  heading: {
    color: "#007bff",
    fontFamily: "Arial, sans-serif",
  },
};

export default HelloUser;
