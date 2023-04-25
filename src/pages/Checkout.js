import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import MainButton from "../components/MainButton/MainButton";
import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";
import SubFooter from "../layout/SubFooter/SubFooter";
import SubHeader from "../layout/SubHeader/SubHeader";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const radioHandler = (e) => {
    const value = e.target.value;
    setPaymentMethod(value);
  };

  const renderPaymentMethod = () => {
    if (paymentMethod === "bank") {
      return (
        <p>
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </p>
      );
    } else if (paymentMethod === "cash") {
      return (
        <p>
          Please make sure you show your ID to our agents so you they can
          deliver your package, And never pay more than what showed in our
          site,Your order will not be shipped in 5 days.
        </p>
      );
    } else {
      return <p></p>;
    }
  };

  const currentPath = [
    { name: "Home", url: "/" },
    { name: "Checkout", url: "/checkout" },
  ];

  return (
    <div>
      <NavBar />
      <SubHeader title="Checkout" path={currentPath} />
      <Container className={styles.container}>
        <form>
          <Row>
            <Col xs={5} className={styles.billInfo}>
              <p>Billing Details</p>
              <div className={styles.mainInfo}>
                <div className={styles.firstName}>
                  <label htmlFor="firstname">First Name</label>
                  <input id="firstname" type="text" required />
                </div>
                <div className={styles.lastName}>
                  <label htmlFor="lastname">Last Name</label>
                  <input id="lastname" type="text" required />
                </div>
              </div>
              <div className={styles.otherInfo}>
                <label htmlFor="companyname">Company Name (Optional)</label>
                <input type="text" id="companyname" />
                <label htmlFor="country">Country / Region</label>
                <select defaultValue="Country" id="country" name="country">
                  <option value="Egypt">Egypt</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
                <label htmlFor="street">Street address</label>
                <input type="text" id="street" required />
                <label htmlFor="town">Town / City</label>
                <input type="city" id="town" required />
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" id="phone" required />
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" required />
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col xs={5} className={styles.productsInfo}>
              <div>
                <div className={styles.title}>
                  <p>Product</p>
                  <p>Subtotal</p>
                </div>
                {cartItems.map((item) => (
                  <div className={styles.name} key={item._id}>
                    <p className={styles.productQuantity}>
                      {item.name} <span> x {item.quantity}</span>
                    </p>
                    <p className={styles.productTotalPrice}>
                      $ {item.totalPrice} USD
                    </p>
                  </div>
                ))}
                <div className={styles.total}>
                  <p className={styles.totalPriceTitle}>Total Price</p>
                  <p className={styles.totalPrice}>$ {totalPrice} USD</p>
                </div>
              </div>
              <hr />
              <div>
                <div className={styles.payInfo}>
                  <div className={styles.bankRadio}>
                    <input
                      type="radio"
                      id="bank"
                      value="bank"
                      name="payment"
                      onChange={radioHandler}
                    />
                    <label htmlFor="bank">Direct Bank Transfer</label>
                  </div>
                  <div className={styles.cashRadio}>
                    <input
                      type="radio"
                      id="cash"
                      value="cash"
                      name="payment"
                      onChange={radioHandler}
                    />
                    <label htmlFor="cash">Cash On Delivery</label>
                  </div>
                  {renderPaymentMethod()}
                </div>
                <div className={styles.privacyPolicy}>
                  <p>
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account,
                    and for other purposes described in our
                    <span> privacy policy.</span>
                  </p>
                  <div className={styles.btn}>
                    <MainButton
                      submit="submit"
                      style="primary"
                      text="Place Order"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Checkout;
