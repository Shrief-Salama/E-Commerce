import React from "react";

import Button from "../Button/Button";
import sideTable from "../../assets/Side table.png";
import sideSofa from "../../assets/Side chair.png";
import styles from "./FeaturedSection.module.css";
import { Col, Container, Row } from "react-bootstrap";

const FeaturedSection = () => {
  return (
    <div className={styles.boxes}>
      <Container>
        <Row>
          <Col className={styles.box}>
            <Row>
              <img src={sideTable} alt="table" />
            </Row>
            <Row className={styles.secRow}>
              <p>Side Table</p>
              <Button />
            </Row>
          </Col>
          <Col className={styles.box}>
            <Row>
              <img src={sideSofa} alt="table" />
            </Row>
            <Row className={styles.secRow}>
              <p>Side Sofa</p>
              <Button />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedSection;
