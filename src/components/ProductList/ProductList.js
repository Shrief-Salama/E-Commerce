import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

import styles from './ProductList.module.css';
import Loader from "../Loader/Loader";

const ProductList = ({ products }) => {

    return (
        <div className={styles.productList}>
            <Container>
                {products.length === 0 && <Loader />}
                <Row>
                    {products?.map((item) => (
                        <Col md={4} key={item._id}>
                            <ProductCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductList;
