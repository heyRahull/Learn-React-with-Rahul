import React from "react";
import ProfileCard from "../components/ProfileCard";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Meet Our Team</h1>
      <ProfileCard
        name="Rahul"
        image="https://randomuser.me/api/portraits/men/1.jpg"
      >
        React Developer | Loves JavaScript 🚀
      </ProfileCard>

      <ProfileCard
        name="Sara"
        image="https://randomuser.me/api/portraits/women/2.jpg"
      >
        Frontend Engineer | UI/UX Enthusiast 🎨
      </ProfileCard>
    </div>
  );
};

export default App;
