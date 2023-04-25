import React from "react";

import styles from "./NewArrivalsSection.module.css";
import newCollection from "../../assets/newcollection.png";
import { Container, Row, Col } from "react-bootstrap";
import MainButton from "../MainButton/MainButton";

const NewArrivalsSection = () => {
  return (
    <div className={styles.content}>
      <Container>
        <Row>
          <Col xs={8} className={styles.photo}>
            <img src={newCollection} alt="Asgaard" className="img-fluid" />
          </Col>
          <Col className={styles.info}>
            <span>New Arrivals</span>
            <p>Furniture</p>
            <MainButton type="link" style="primary" text="Shop Now" link="/shop" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewArrivalsSection;
