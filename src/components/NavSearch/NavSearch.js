import React, { Fragment, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "./NavSearch.module.css";
import { NavLink } from "react-router-dom";

const NavSearch = ({ searchModal, searchModalHandler }) => {
  const [inputValue, setInputValue] = useState("");
  const [products, setProducts] = useState([]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

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

  return (
    <div
      className={`${styles.navbarSearchWrapper} ${
        searchModal ? styles.activeSearch : ""
      }`}
    >
      <div
        className={styles.searchbarLayout}
        onClick={searchModalHandler}
      ></div>
      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input
          htmlFor="click"
          id="bar"
          type="text"
          placeholder="Search Here!"
          onChange={inputChangeHandler}
        />
      </div>
      {inputValue.length >= 1 && (
        <Fragment>
          {products.filter((products) =>
            products.name.toLowerCase().includes(inputValue)
          ).length >= 1 &&
            !inputValue.startsWith(" ") && (
              <div className={styles.searchResults}>
                <ul>
                  {products
                    .filter((products) =>
                      products.name.toLowerCase().includes(inputValue)
                    )
                    .map((products) => (
                      <li key={products._id} onClick={searchModalHandler}>
                        <NavLink to={"/shop/" + products._id}>
                          {products.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          {inputValue.startsWith(" ") && " "}
          {products.filter((products) =>
            products.name.toLowerCase().includes(inputValue)
          ).length === 0 && (
            <div className={styles.searchResults}>
              <ul>
                <li>No Items Found !</li>
              </ul>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default NavSearch;
