import React, { useState, useEffect } from "react";

const UserData = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    setUser(json.results[0]);
    setLoading(false); // Stop loading
  };

  useEffect(() => {
    fetchData();
  }, []); // Runs only once on mount

  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, [user]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>👤 User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        user && (
          <div>
            <img src={user.picture.large} alt="User Avatar" />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p>Email: {user.email}</p>
            <p>
              Location: {user.location.city}, {user.location.country}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default UserData;
