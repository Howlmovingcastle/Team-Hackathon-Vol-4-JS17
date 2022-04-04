import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import "antd/dist/antd.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
