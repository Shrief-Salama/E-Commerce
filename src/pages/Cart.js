import React, { Fragment } from "react";

import styles from "./Cart.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";
import SubFooter from "../layout/SubFooter/SubFooter";
import SubHeader from "../layout/SubHeader/SubHeader";
import MainButton from "../components/MainButton/MainButton";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cart-slice";

const Cart = () => {
  const currentPath = [
    { name: "Home", url: "/" },
    { name: "Cart", url: "/cart" },
  ];
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const onClickIncreaseHandler = (item) => {
    dispatch(cartActions.increaseItem(item));
  };

  const onClickDecreaseHandler = (item) => {
    dispatch(cartActions.decreaseItem(item));
  };

  const cartSubmitHandler = () => {
    if (totalPrice === 0) {
      return (
        <div>
          <div>
            <h5>Please Add Some Products...</h5>
          </div>
          <div className={styles.cartSubmit}>
            <MainButton
              type="link"
              text="Go To Shop"
              style="primary"
              link="/shop"
            />
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          <div>
            <h2>Cart Total</h2>
          </div>
          <div className={styles.cartTotal}>
            <p className={styles.cartTotalNumber}>$ {totalPrice} USD</p>
          </div>
          <div className={styles.cartSubmit}>
            <MainButton
              type="link"
              text="Check Out"
              style="primary"
              link="/checkout"
            />
          </div>
        </Fragment>
      );
    }
  };

  return (
    <div>
      <NavBar />
      <SubHeader title="Cart" path={currentPath} />
      <Container>
        <Row className={styles.fullCart}>
          <Col xs={8} className={styles.cartItemsInfo}>
            <Row className={styles.miniHeader}>
              <Col xs={4}>
                <p>Product</p>
              </Col>
              <Col xs={2}>
                <p>Price</p>
              </Col>
              <Col>
                <p>Quantity</p>
              </Col>
              <Col xs={2} className={styles.miniHeaderSubTotal}>
                <p>Subtotal</p>
              </Col>
            </Row>
            {cartItems.map((item) => (
              <Row className={styles.content} key={item._id}>
                <Col xs={4} className={styles.contentName}>
                  <NavLink to={item._id}>
                    <img src={item.img} alt={item.name} />
                  </NavLink>
                  <NavLink to={item._id}>
                    <p>{item.name}</p>
                  </NavLink>
                </Col>
                <Col xs={2} className={styles.contentPrice}>
                  <p>$ {item.price} USD</p>
                </Col>
                <Col className={styles.contentQtn}>
                  <div className={styles.cartProductAddRemove}>
                    <button onClick={() => onClickDecreaseHandler(item)}>
                      -
                    </button>
                  </div>
                  <p>x {item.quantity}</p>
                  <div className={styles.cartProductAddRemove}>
                    <button onClick={() => onClickIncreaseHandler(item)}>
                      +
                    </button>
                  </div>
                </Col>
                <Col xs={2} className={styles.contentTotalPrice}>
                  <p>$ {item.totalPrice} USD</p>
                </Col>
              </Row>
            ))}
            {totalPrice === 0 && (
              <Row>
                <div className={styles.noProducts}>
                  <h5>Please pick some Products!</h5>
                </div>
              </Row>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col xs={3} className={styles.cartDetails}>
            {cartSubmitHandler()}
          </Col>
        </Row>
      </Container>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Cart;
