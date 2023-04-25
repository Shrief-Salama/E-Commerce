import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../redux/slices/cart-slice";
import styles from "./NavCart.module.css";
import { NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { AiOutlineClose } from 'react-icons/ai';


const NavCart = ({ cartModal, cartModalHandler }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const onClickIncreaseHandler = (item) => {
    dispatch(cartActions.increaseItem(item));
  };

  const onClickDecreaseHandler = (item) => {
    dispatch(cartActions.decreaseItem(item));
  };

  const submitButtonHandler = () => {
    if (subTotalPrice === 0) {
      return (
        <NavLink to={"/shop"}>
          <button>Continue to Shop</button>
        </NavLink>
      );
    } else {
      return (
        <NavLink to={"/cart"}>
          <button>Continue to Cart</button>
        </NavLink>
      );
    }
  };

  return (
    <div className={styles.cartModalWrapper}>
      <div
        className={`${styles.cartOverlay} ${cartModal ? styles.activeCart : ""
          }`}
        onClick={cartModalHandler}
      ></div>
      <div
        className={`${styles.navCart} ${cartModal ? styles.activeCart : ""}`}
      >
        <div className={styles.navCartHead}>
          <h4>Your Cart</h4>
          <button onClick={cartModalHandler}><AiOutlineClose /></button>
        </div>
        <div className={styles.navCartBody}>
          {cartItems &&
            cartItems.length >= 1 &&
            cartItems.map((item) => (
              <Row key={item._id}>
                <div className={styles.cartProductBox}>
                  <Col className={styles.cartProductInfo}>
                    <div>
                      <NavLink to={"/shop/" + item._id}>
                        <img src={item.img} alt={item.name} />
                      </NavLink>
                    </div>
                  </Col>
                  <Col className={styles.cartProductDetails}>
                    <div>
                      <NavLink to={"/shop/" + item._id}>{item.name}</NavLink>
                    </div>
                  </Col>
                  <Col className={styles.cartProductDetails}>
                    <div>
                      <span>$ {item.price} USD</span>
                    </div>
                  </Col>
                  <Col className={styles.cartProductQuantity}>
                    <div className={styles.cartProductAddRemove}>
                      <button onClick={() => onClickDecreaseHandler(item)}>
                        -
                      </button>
                    </div>
                    <div>
                      <span>x {item.quantity}</span>
                    </div>
                    <div className={styles.cartProductAddRemove}>
                      <button onClick={() => onClickIncreaseHandler(item)}>
                        +
                      </button>
                    </div>
                  </Col>
                  <Col className={styles.cartProductDetails}>
                    <div>
                      <span>$ {item.totalPrice} USD</span>
                    </div>
                  </Col>
                </div>
              </Row>
            ))}
          {cartItems.length === 0 && <div>Please add some products...</div>}
        </div>
        <div className={styles.navCartFooter}>
          <div className={styles.total}>
            <h5>Subtotal</h5>
            <div>$ {subTotalPrice} USD</div>
          </div>
          <div className={styles.navCartFooterAction}>
            {submitButtonHandler()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCart;
