import React from "react";
import { Link } from "react-router-dom";
import "./Announcement.css";

const Announcement = () => {
  return (
    <Link to="/">
      <div className="container-announcement">
        Super Deal! Free Shipping on Orders Over $5000
      </div>
    </Link>
  );
};

export default Announcement;
