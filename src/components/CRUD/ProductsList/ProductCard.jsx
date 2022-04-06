import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../../contexts/cartContext";

const { Meta } = Card;

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));

  useEffect(() => {}, []);

  return (
    <Card
      style={{ width: "280px", margin: "10px" }}
      cover={<img alt="example" src={item.image1} />}
      actions={[
        <HeartOutlined
          key="icon-heart"
          style={{ fontSize: "25px", color: "black" }}
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
