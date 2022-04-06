import { HeartOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productsContext } from "../../../contexts/productsContext";
import Filters from "../Filters/Filters";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { getProducts, products, productsCount } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [brand, setBrand] = useState([]);
  const [price, setPrice] = useState([1, 10000]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(6);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      brand: brand,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [searchValue, brand, price, page, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="container">
      <div className="products-search">
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          placeholder="Search..."
          style={{ width: "25vw" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Link to="/cart">
          <ShoppingCartOutlined />
        </Link>
        <Link to="/favorites">
          <HeartOutlined style={{ fontSize: "25px" }} />
        </Link>
      </div>
      {showFilters ? (
        <Filters
          brand={brand}
          setBrand={setBrand}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
