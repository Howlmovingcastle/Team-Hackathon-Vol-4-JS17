import React from "react";
import Categories from "../components/Categories/Categories";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Contacts from "../components/Contacts/Contacts";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Categories />
      <Products />
      <Newsletter />
      <Contacts />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
