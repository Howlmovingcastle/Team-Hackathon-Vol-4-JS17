import React, { useContext, useEffect } from "react";
import { cartContext } from "../../../contexts/cartContext";
import { List, Button, InputNumber } from "antd";
import { Link } from "react-router-dom";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

  return (
    <div className="container">
      <List
        itemLayout="horizontal"
        dataSource={cart.products}
        footer={<h2>Total: {cart.totalPrice}$</h2>}
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
                  <div>{item.item.description}</div>
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
                      <h4>Quantity</h4>
                      <Button
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber disabled value={item.count} />
                      <Button
                        onClick={() =>
                          changeProductCount(item.count + 1, item.item.id)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      <h4>SubPrice</h4>
                      <h3>{"$" + item.subPrice}</h3>
                    </div>
                  </div>
                  <Button onClick={() => deleteFromCart(item.item.id)}>
                    Remove from cart
                  </Button>
                  <Link to="/visa">
                    <Button
                      style={{
                        backgroundColor: "blue",
                        margin: "35px",
                        color: "white",
                      }}
                    >
                      {" "}
                      Shop Now
                    </Button>
                  </Link>
                </>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cart;
