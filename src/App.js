import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Announcement from "./components/Announcement/Announcement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Announcement />
        <MainRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
