import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Category />
      <Footer />
    </div>
  );
};

export default Home;
