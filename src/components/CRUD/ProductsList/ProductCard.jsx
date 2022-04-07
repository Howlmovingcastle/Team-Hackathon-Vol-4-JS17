import React, { useContext, useEffect, useState } from "react";
import { Badge, Card, message } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  LikeOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../../contexts/cartContext";
import { favoriteContext } from "../../../contexts/favoriteContext";
import { productsContext } from "../../../contexts/productsContext";
import { authContext } from "../../../contexts/AuthContext";

const { Meta } = Card;

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));

  const { addProductToFavorites, checkItemInFavorites } =
    useContext(favoriteContext);
  const [checkItem1, setCheckItem1] = useState(checkItemInFavorites(item.id));

  const { editOneLike, getProducts } = useContext(productsContext);
  const { currentUser } = useContext(authContext);

  useEffect(() => {
    getProducts();
  }, []);

  function saveLikes() {
    let like = {
      user: currentUser,
      id: Date.now(),
    };
    let userLikes = item.likes.some((elem) => elem.user === currentUser);

    if (userLikes) {
      let filteredLikes = item.likes.filter((item) => {
        return item.user !== currentUser;
      });
      editOneLike(item.id, filteredLikes);
    } else {
      let likes = [...item.likes, like];
      editOneLike(item.id, likes);
    }
  }

  return (
    <Card
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <Badge count={item.likes.length}>
          <LikeOutlined
            onClick={() =>
              currentUser
                ? saveLikes()
                : setTimeout(() => message.warning("Please Sign Up"))
            }
            style={{
              fontSize: "28px",
              cursor: "pointer",
              marginRight: "5px",
              color: "black",
            }}
          />
        </Badge>,

        <HeartOutlined
          key="icon-heart"
          style={{ fontSize: "25px", color: checkItem1 ? "blue" : "black" }}
          onClick={() => {
            addProductToFavorites(item);
            setCheckItem1(checkItemInFavorites(item.id));
          }}
        />,
        <ShoppingOutlined
          key="icon-cart"
          onClick={() => {
            addProductToCart(item);
            setCheckItem(checkItemInCart(item.id));
          }}
          style={{ fontSize: "25px", color: checkItem ? "red" : "black" }}
        />,

        <Link key="ellipsis" to={`/products/${item.id}`}>
          <EllipsisOutlined style={{ fontSize: "25px", color: "black" }} />
        </Link>,
      ]}
    >
      <Meta
        title={item.brand}
        description={
          <>
            <h3>{item.model}</h3>
            <h2>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
