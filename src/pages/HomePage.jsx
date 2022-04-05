import React from "react";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
