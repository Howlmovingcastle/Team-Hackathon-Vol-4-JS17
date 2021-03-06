import React, { useContext, useState } from "react";
import { Form, Input, Button, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";

const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  const { handleLogin, handleSignUp, error } = useContext(authContext);
  const navigate = useNavigate();

  function validatePassword(rule, value, callback) {
    let regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if (regex.test(value)) {
      callback();
    } else {
      callback(
        "Password should contain at least one digit,one lower case,one upper case, 8 from the mentioned characters"
      );
    }
  }

  const onFinish = (values) => {
    const { email, password } = values;
    if (isLoginForm) {
      handleLogin(email, password, navigate);
    } else {
      handleSignUp(email, password, navigate);
    }
  };

  return (
    <Row
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        textTransform: "none",
      }}
    >
      <Col span={7}></Col>
      <Col span={10}>
        {error ? <Alert type="error" description={error} /> : null}
        <Form
          style={{ textTransform: "none" }}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            style={{ textTransform: "none" }}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
              {
                type: "email",
                message: "Is not valid email!",
              },
            ]}
          >
            <Input
              style={{ textTransform: "none" }}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            style={{ textTransform: "none" }}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
              {
                validator: validatePassword,
              },
            ]}
          >
            <Input
              style={{ textTransform: "none" }}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {isLoginForm ? "Log In" : "Sign Up"}
            </Button>
            <br />
            {isLoginForm ? (
              <>
                Or{" "}
                <span onClick={() => setIsLoginForm(false)}>register now!</span>
              </>
            ) : (
              <>
                Have an accout?{" "}
                <span onClick={() => setIsLoginForm(true)}>Log In</span>
              </>
            )}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Auth;
