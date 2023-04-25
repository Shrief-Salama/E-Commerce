import React from "react";

import styles from "./MainHeader.module.css";
import rocket from "../../assets/Rocket single seater 1.png";
import NavBar from "../NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import MainButton from "../../components/MainButton/MainButton";

const MainHeader = () => {
  return (
    <div className={styles.header}>
      <NavBar className={styles.nav} />
      <div className={styles.headerWrapper}>
        <div className={styles.headerContent}>
          <h3>
            The Extraordinary <br /> Care You Deserve
          </h3>
          <p>The fresh new style you'll were on repeat</p>
          <MainButton
            text="Shop the collection"
            type="link"
            style="secondary"
            link="/shop"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
