import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";
import Announcement from "./components/Announcement/Announcement";
import AuthContextProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Announcement />
          <MainRoutes />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
