import React, { Fragment, useLayoutEffect, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FilterSection from "../components/FilterSection/FilterSection";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./Shop.module.css";

import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";
import SubHeader from "../layout/SubHeader/SubHeader";
import SubFooter from "../layout/SubFooter/SubFooter";
import ProductList from "../components/ProductList/ProductList";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("newest");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  const currentPath = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
  ];

  useEffect(() => {
    const productsItems = async () => {
      try {
        await fetch("http://localhost:8080/products", {
          method: "GET",
          headers: { "content-type": "application/json" },
        }).then(async (res) => {
          const response = await res.json();
          setProducts(response);
        });
      } catch (error) {
        console.log(error);
      }
    };
    productsItems();
  }, []);

  useEffect(() => {
    if (filter === "newest") {
      setFilteredProducts(products.sort((a, b) => b.createdAt - a.createdAt));
    } else if (filter === "low") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [products, filter]);

  const getFilterValue = (value) => {
    setFilter(value);
  };

  return (
    <Fragment>
      <NavBar />
      <SubHeader title="Shop" path={currentPath} />
      <FilterSection getFilterValue={getFilterValue} />
      <ProductList products={filteredProducts} />
      <SubFooter />
      <Footer />
    </Fragment>
  );
};

export default Shop;
