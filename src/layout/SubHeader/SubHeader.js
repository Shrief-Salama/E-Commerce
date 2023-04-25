import React from "react";

import styles from "./SubHeader.module.css";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const SubHeader = ({ title, path }) => {
  return (
    <div className={styles.all}>
      <div className="overlay"></div>
      <Container>
        <div className={styles.content}>
          <p>{title}</p>
          <Breadcrumbs path={path} />
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
