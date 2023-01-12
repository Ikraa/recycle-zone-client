import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "./Banner";
import Category from "./Category";

const Home = () => {
  const category = useLoaderData();

  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Category category={category} />
      <Footer />
    </div>
  );
};

export default Home;
