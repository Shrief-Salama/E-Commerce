import React from "react";

import styles from "./FollowUsSection.module.css";
import { Container } from "react-bootstrap";

const FollowUsSection = () => {
  return (
    <div className={styles.content}>
      <Container className={styles.container}>
        <p>Our Instagram</p>
        <h6>Follow our store on Instagram</h6>
        <button>Follow Us</button>
      </Container>
    </div>
  );
};

export default FollowUsSection;
