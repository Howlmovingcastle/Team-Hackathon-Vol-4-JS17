import React, { useContext, useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { Badge } from "@material-ui/core";
import Button from "@mui/material/Button";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ADMIN_EMAIL } from "../../helpers/consts";
import { authContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const { currentUser, handleLogOut } = useContext(authContext);
  const navigate = useNavigate();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img
            src="https://logos.textgiraffe.com/logos/logo-name/Layla-designstyle-pastel-m.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <div />
          <a href="">best</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="">categories</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="">main assortment</a>
        </li>
        <li className="app__flex p-text">
          <div />
          <Link to="/products">products</Link>
        </li>
        <li className="app__flex p-text">
          <div />
          <a href="">contact us</a>
        </li>
        {currentUser === ADMIN_EMAIL ? (
          <li className="app__flex p-text">
            <div />
            <Link
              className={
                location.pathname === "/admin"
                  ? "navbar-item-active"
                  : "app__flex p-text"
              }
              to="/admin"
            >
              admin
            </Link>
          </li>
        ) : null}
      </ul>
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {currentUser ? (
            <span>
              {currentUser}
              <Button onClick={handleLogOut}>Logout</Button>
            </span>
          ) : (
            <Button onClick={() => navigate("/auth")}>Login/ Sign up</Button>
          )}
        </div>
        <Badge badgeContent={0} color="primary">
          <Link to="/cart">
            <ShoppingCartOutlined />
          </Link>
        </Badge>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "best",
                "categories",
                "main assortment",
                "products",
                "contact us",
              ].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
