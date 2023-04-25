import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCart } from 'react-icons/bs';
import { BsBoxSeam } from 'react-icons/bs';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


import styles from "./SubFooter.module.css";

const SubFooter = () => {
  return (
    <div className={styles.content}>
      <Container>
        <Row>
          <Col>
            <BsCart />
            <h4>Free Delivery</h4>
            <p>We offer free delivery for all orders over $80 and with the order that contain 10 or more items.</p>
          </Col>
          <Col>
            <BsBoxSeam />
            <h4>30- Days Returns</h4>
            <p>At North, we offer complimentary 30-day returns, so that you can make sure your purchase is just right</p>
          </Col>
          <Col>
            <IoMdCheckmarkCircleOutline />
            <h4>International Warranty</h4>
            <p>Our quest for excellence has allowed us to extend the international warranty to 5 years.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooter;
