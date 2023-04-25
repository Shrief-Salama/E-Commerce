import React from "react";

import styles from "./TopPicksSection.module.css";
import { Container, Row, Col } from "react-bootstrap";
import chair1 from "../../assets/products/tate-armchair.jpg";
import chair2 from "../../assets/products/tate-armchair01.jpg";
import chair3 from "../../assets/products/tate-armchair02.jpg";
import { NavLink } from "react-router-dom";

const TopPicksSection = () => {
  return (
    <div className={`${styles.boxes} pdd70`}>
      <Container>
        <Row className={styles.boxTitle}>
          <h3>Top Picks For You</h3>
          <p>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </Row>
        <Row>
          <Col md={4}>
            <NavLink to='/shop/1' className={styles.productCard}>
              <div className={styles.box}>
                <img className="img-fluid" src={chair1} alt="Chair" />
              </div>
              <p className={styles.title}>Tate Armchair</p>
              <div className={styles.price}>$ 899.00 USD</div>
            </NavLink>
          </Col>
          <Col md={4}>
            <NavLink to='/shop/1' className={styles.productCard}>
              <div className={styles.box}>
                <img className="img-fluid" src={chair2} alt="Chair" />
              </div>
              <p className={styles.title}>Tate Armchair</p>
              <div className={styles.price}>$ 899.00 USD</div>
            </NavLink>
          </Col>
          <Col md={4}>
            <NavLink to='/shop/1' className={styles.productCard}>
              <div className={styles.box}>
                <img className="img-fluid" src={chair3} alt="Chair" />
              </div>
              <p className={styles.title}>Tate Armchair</p>
              <div className={styles.price}>$ 899.00 USD</div>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopPicksSection;
