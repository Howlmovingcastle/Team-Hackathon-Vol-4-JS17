import React from "react";
import { Select, Slider } from "antd";
import { brands } from "../../../data";

const Filters = ({ brand, setBrand, price, setPrice }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        value={brand}
        onChange={(e) => setBrand(e)}
        placeholder="Filter by brand"
        style={{ width: "40vw" }}
        allowClear
        mode="multiple"
      >
        {brands.map((item) => (
          <Select.Option key={item.id} value={item.brand}>
            {item.brand}
          </Select.Option>
        ))}
      </Select>
      <Slider
        style={{ width: "30vw" }}
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 10000]}
        min={0}
        max={10000}
        step={100}
        range
      />
    </div>
  );
};

export default Filters;
