import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Announcement from "./components/Announcement/Announcement";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

import "./index.css";
import FavoriteContextProvider from "./contexts/favoriteContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductsContextProvider>
            <CartContextProvider>
              <FavoriteContextProvider>
                <Announcement />
                <MainRoutes />
              </FavoriteContextProvider>
            </CartContextProvider>
          </ProductsContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
