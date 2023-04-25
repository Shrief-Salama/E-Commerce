import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import styles from "./LoginSuccess.module.css";

const LoginSuccess = () => {
  useEffect(() => {
    const time = setTimeout(() => {
      window.location.replace("/myaccount");
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <p className={styles.message}>
            You Are
            <span className={styles.successLogin}>Successfully Logged In</span>,
            You Will Be Redirect Automatically To
            <span className={styles.homePage}>Your Profile</span>.....
            <br />
            <span>Or</span>
            <NavLink to="/myaccount"> "Click Here"</NavLink>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSuccess;
