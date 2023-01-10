import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Category />
    </div>
  );
};

export default Home;
