import React, { Fragment } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Log.module.css";
import { isAuth, isAuthenticated } from "../../Helper/Helpers";

const Log = () => {
  return (
    <Fragment>
      {!isAuthenticated() && (
        <div className={styles.content}>
          <Container>
            <Row>
              <Col>
                <Login />
              </Col>
              <Col>
                <Register />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {isAuthenticated() && <p>Hello User</p>}
    </Fragment>
  );
};

export default Log;
