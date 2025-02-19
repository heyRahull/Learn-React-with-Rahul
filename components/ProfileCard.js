import React from "react";

const ProfileCard = ({ name, image, children }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p>{children}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "2px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "250px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
    margin: "10px auto",
  },
  image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
};

export default ProfileCard;
