import React, { useContext, useEffect, useState } from "react";
import { Button, Carousel } from "antd";
import { Link, useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";
import Comments from "../../comments/Comments";
import video2 from "../../assets/video2.mp4";

const Details = ({ item }) => {
  const { getOneProduct, oneProduct } = useContext(productsContext);

  const params = useParams();
  console.log(params);
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  console.log(oneProduct);
  return oneProduct ? (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "35vw" }}>
          <Carousel autoplay>
            <div>
              <img width="100%" src={oneProduct.image1} alt="" />
            </div>
            <div>
              <img width="100%" src={oneProduct.image2} alt="" />
            </div>
          </Carousel>
        </div>
        <div style={{ width: "40vw" }}>
          <h2>{oneProduct.brand}</h2>
          <h3>{oneProduct.model}</h3>
          <h2>{"$ " + oneProduct.price}</h2>
          <Link to="/cart">
            <Button size="large" style={{ width: "100%", margin: "15px 0px" }}>
              Add to cart
            </Button>
          </Link>
          <Link to="/cart">
            <Button size="large" style={{ width: "100%", margin: "15px 0px" }}>
              Shop Now
            </Button>
          </Link>
          <div>{oneProduct.description}</div>
        </div>
      </div>
      <video src={video2} autoPlay loop muted width="100%"></video>
      <div>
        <Comments currentUserId={"1"} />
      </div>
    </div>
  ) : (
    <div>
      <center>
        <h1>Loading</h1>
      </center>
    </div>
  );
};

export default Details;
