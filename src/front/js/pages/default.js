import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center text-center flex-column pt-5 gap-3">
      <h1>Welcome to the Home Page</h1>
      <p>This is the default route.</p>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/private")}>Go to Private</button>
    </div>
  );
};

export default Home;
