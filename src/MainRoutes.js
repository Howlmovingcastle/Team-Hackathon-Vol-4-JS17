import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Error404 from "./pages/Error404";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {PRIVATE_ROUTES.map((item) => (
          <Route key={item.id} path={item.link} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
