import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      home_page <br />
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
};

export default HomePage;
