import React from "react";
import HelloUser from "../components/HelloUser";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <HelloUser name="Rahul" />
      <HelloUser name="Sam" />
      <HelloUser />{" "}
      {/* This will show "Hello, Guest!" because of the default prop */}
    </div>
  );
}

export default App;
