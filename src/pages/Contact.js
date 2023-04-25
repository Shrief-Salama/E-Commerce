import React, { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";

import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";
import SubFooter from "../layout/SubFooter/SubFooter";
import SubHeader from "../layout/SubHeader/SubHeader";
import styles from "./Contact.module.css";
import gps from "../assets/GPS.png";
import phone from "../assets/phone.png";
import clock from "../assets/clock.png";

const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const submitHandler = () => {
    setIsSubmit(true);
  };

  const currentPath = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <div>
      <NavBar />
      <SubHeader title="Contact" path={currentPath} />
      <Container className={styles.content}>
        <Row>
          <div className={styles.title}>
            <h2>Get In Touch With Us</h2>
            <h6>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us <br />
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </h6>
          </div>
          <Col>
            <div className={styles.cont}>
              <img src={gps} alt="gps" />
              <div>
                <h5>Address</h5>
                <h6>236 5th SE Avenue, New York NY10000, United States</h6>
              </div>
            </div>
            <div className={styles.cont}>
              <img src={phone} alt="phone" />
              <div>
                <h5>Phone</h5>
                <h6>
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </h6>
              </div>
            </div>
            <div className={styles.cont}>
              <img src={clock} alt="clock" />
              <div>
                <h5>Working Time</h5>
                <h6>
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </h6>
              </div>
            </div>
          </Col>
          <Col>
            <div className={styles.form}>
              <label htmlFor="name">Your Name</label>
              <input id="name" type="name" />
            </div>
            <div className={styles.form}>
              <label htmlFor="mail">Email address</label>
              <input id="mail" type="email" />
            </div>
            <div className={styles.form}>
              <label htmlFor="sub">Subject</label>
              <input id="sub" type="text" placeholder="This Is Optional!" />
            </div>
            <div className={styles.form1}>
              <label htmlFor="msg">Message</label>
              <textarea id="msg" type="text" />
            </div>
            <div className={styles.div5}>
              <button onClick={submitHandler}>Submit</button>
              {isSubmit && (
                <p className={styles.message}>
                  Your Message Sent Successfully, Thanks.
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default Contact;
