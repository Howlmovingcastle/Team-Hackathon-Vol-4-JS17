import React, { useContext, useEffect } from "react";
import { Button, Form, Select, Input, InputNumber } from "antd";
import { brands } from "../../../data";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../../contexts/productsContext";

const EditProduct = () => {
  const params = useParams();
  const { getOneProduct, oneProduct, updateProduct } =
    useContext(productsContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);
  // console.log(oneProduct);
  function save(values) {
    // console.log(values)
    updateProduct(params.id, values);
    navigate("/admin");
  }
  return (
    <div className="container">
      <h2>Edit product</h2>
      <Form layout="vertical" name="basic" form={form} onFinish={save}>
        <Form.Item
          label="Brand"
          name="brand"
          rules={[
            {
              required: true,
              message: "Please input brand!",
            },
          ]}
        >
          <Select>
            {brands.map((item) => (
              <Select.Option key={item.id} value={item.brand}>
                {item.brand}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please input model!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input descriptiom!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input price!",
            },
          ]}
        >
          <InputNumber min={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Image 1"
          name="image1"
          rules={[
            {
              required: true,
              message: "Please input URL of image 1!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Image 2"
          name="image2"
          rules={[
            {
              required: true,
              message: "Please input URL of image 2!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Video"
          name="video"
          rules={[
            {
              required: true,
              message: "Please input URL of video!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
