import React, { useEffect, useState, useMemo } from "react";

import styles from "./NavBar.module.css";
import NavSearch from "../../components/NavSearch/NavSearch";
import NavCart from "../../components/NavCart/NavCart";
import logo from "../../assets/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Redirect } from "react-router-dom";
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiSearch,
  FiLogOut,
} from "react-icons/fi";
// import { isAuthenticated } from "../../Helper/Helpers";
// import { signout } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/user";

const NavBar = () => {
  const [cartModal, setCartModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const currentUser = useSelector((state) => state.user.currentUser);

  const cartModalHandler = () => {
    setCartModal((cartModal) => !cartModal);
  };

  const searchModalHandler = () => {
    setSearchModal((searchModal) => !searchModal);
  };

  const signOutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.navbarWrapper}>
      <Container>
        <Row className={styles.content}>
          <Col>
            <div className={styles.logo}>
              <NavLink to={"/"}>
                <img src={logo} alt="Shop" />
              </NavLink>
            </div>
          </Col>
          <Col className={styles.links}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            {/* <NavLink to="/sale">Sale</NavLink>
            <NavLink to="/contact">Contact</NavLink> */}
          </Col>
          <Col className={styles.icons}>
            {!isAuth && (
              <NavLink to="/myaccount">
                <button>
                  <FiUser />
                </button>
              </NavLink>
            )}
            <button onClick={searchModalHandler}>
              <FiSearch />
            </button>
            {/* Start Searhbar */}
            <NavSearch
              searchModal={searchModal}
              searchModalHandler={searchModalHandler}
            />
            {/* End Searchbar */}
            {/* <button>
              <FiHeart />
            </button> */}
            <button onClick={cartModalHandler}>
              <FiShoppingCart />
              <span className={styles.cartProductsNumbers}>{cartQuantity}</span>
            </button>
            {isAuth && (
              <div className={styles.authUser}>
                <span>{currentUser.user.name}</span>
                <button onClick={signOutHandler} title="Logout">
                  <FiLogOut />
                </button>
              </div>
            )}
            {/* Start Navcart */}
            <NavCart
              cartModalHandler={cartModalHandler}
              cartModal={cartModal}
            />
            {/* End Navcart */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
