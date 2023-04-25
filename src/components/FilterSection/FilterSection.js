import React from "react";

import styles from "./FilterSection.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { VscSettings } from 'react-icons/vsc';

const FilterSection = ({ getFilterValue }) => {

  const handleChange = (e) => {
    getFilterValue(e.target.value);
  }

  return (
    <div className={styles.filterSection}>
      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <h3><VscSettings /> Filter</h3>
          </Col>
          <Col md={8}>
            <div className={styles.sortBy}>
              <label>Sort By</label>
              <select onChange={handleChange}>
                <option value="newest">Newest</option>
                <option value="low">Low to high</option>
                <option value="high">high to low</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FilterSection;
