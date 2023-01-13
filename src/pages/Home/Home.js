import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Advertise from "./Advertise";
import Banner from "./Banner";
import Category from "./Category";
import PhotoGallary from "./PhotoGallary";

const Home = () => {
  const category = useLoaderData();

  return (
    <div>
      <header>
        <Navbar />
        <Banner />
      </header>
      <Category category={category} />
      <Advertise />
      <PhotoGallary />
      <Footer />
    </div>
  );
};

export default Home;
