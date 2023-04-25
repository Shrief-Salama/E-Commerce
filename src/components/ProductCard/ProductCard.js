import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  const { _id, name, price, img } = item;
  return (
    <NavLink to={`/shop/${_id}`} className={styles.productCard}>
      <div className={styles.box}>
        <img className="img-fluid" src={img} alt={name} />
      </div>
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.price}>$ {price} USD</div>
    </NavLink>
  );
};

export default ProductCard;
