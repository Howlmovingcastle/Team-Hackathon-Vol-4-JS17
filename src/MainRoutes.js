import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";
import EditProduct from "./components/CRUD/EditProduct/EditProduct";
import Cart from "./components/CRUD/Cart/Cart";
import Details from "./components/Details/Details";
import ProductsList from "./components/CRUD/ProductsList/ProductsList";
import Auth from "./components/Auth/Auth";
import Visa from "./components/Visa/Visa";
import { authContext } from "./contexts/AuthContext";

import { ADMIN_EMAIL } from "./helpers/consts";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 2,
    },
    {
      link: "/products",
      element: <ProductsList />,
      id: 3,
    },
    {
      link: "/products/:id",
      element: <Details />,
      id: 4,
    },
    {
      link: "/cart",
      element: <Cart />,
      id: 5,
    },
    {
      link: "/visa",
      element: <Visa />,
      id: 6,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
    },
  ];

  const { currentUser } = useContext(authContext);
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {PRIVATE_ROUTES.map((item) => (
          <Route
            key={item.id}
            path={item.link}
            element={
              currentUser === ADMIN_EMAIL ? (
                item.element
              ) : (
                <Navigate replace to="*" />
              )
            }
          />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
