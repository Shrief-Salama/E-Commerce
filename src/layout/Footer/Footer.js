import React, { useLayoutEffect } from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

import logo from "../../assets/logo.png";

import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <Container className={styles.content}>
        <Row>
          <Col xs={6}>
            <div className={styles.footerDetails}>
              <img src={logo} alt="Logo" />
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className={styles.detailsInfo}>
                <div>
                  <FiMapPin />
                  <span>Cairo, Egypt</span>
                </div>
                <div>
                  <FiPhone />
                  <a href="tel:+125865892">+1 2586 5892</a>
                </div>
                <div>
                  <FiMail />
                  <a href="malito:hello@example.com">hello@example.com</a>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={3}>
            <div className={styles.links}>
              <h4>Links</h4>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/shop">Shop</NavLink>
              <NavLink to="#">Sale</NavLink>
              <NavLink to="#">Contact</NavLink>
            </div>
          </Col>
          <Col xs={3}>
            <div className={styles.links}>
              <h4>Help</h4>
              <a href="#">Payment Options</a>
              <a href="#">Returns</a>
              <a href="#">Privacy Policies</a>
            </div>
          </Col>
        </Row>
        <div className={styles.copyright}>
          <p>All Rights Reserved &#169; {year}, Shrief Salama.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
