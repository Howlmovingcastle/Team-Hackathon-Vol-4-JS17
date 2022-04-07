import React, { useContext, useEffect, useState } from "react";
import { favoriteContext } from "../../../contexts/favoriteContext";
import { List, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";

import "./Favorites.css";

const Favorites = () => {
  const {
    getFavorites,
    favorite,
    deleteFromFavorites,
    changeProductCountFavorites,
  } = useContext(favoriteContext);

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="animated-background">
      <div className="container">
        <List
          itemLayout="horizontal"
          dataSource={favorite.products}
          footer={<h2>Total: {favorite.totalPrice}$</h2>}
          renderItem={(item) => (
            <List.Item
              extra={<img src={item.item.image1} alt="image1" width={272} />}
            >
              <List.Item.Meta
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3>{item.item.brand}</h3>
                      <h4>{item.item.model}</h4>
                    </div>
                    <h3>{"$" + item.item.price}</h3>
                  </div>
                }
                description={
                  <>
                    <div style={{ color: "#030303" }}>
                      {item.item.description}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "40%",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <h4>SubPrice</h4>
                        <h3>{"$" + item.subPrice}</h3>
                      </div>
                    </div>
                    <Button onClick={() => deleteFromFavorites(item.item.id)}>
                      Remove from favorites
                    </Button>
                    <Link to="/cart">
                      <Button
                        style={{
                          margin: "35px",
                        }}
                        onClick={() => {
                          alert("Succesfully dragged into a cart");
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Link>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Favorites;
