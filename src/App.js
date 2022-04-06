import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Announcement from "./components/Announcement/Announcement";
import AuthContextProvider from "./contexts/AuthContext";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";

import "./index.css";
import FavoriteContextProvider from "./contexts/favoriteContext";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    margin-top: 250px;
  `;

  return (
    <>
      {loading ? (
        <HashLoader css={override} color="F4A0E8" loading={loading} size={75} />
      ) : (
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
      )}
    </>
  );
};

export default App;
