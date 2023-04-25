import React, { Fragment, useState } from "react";
import MainButton from "../MainButton/MainButton";

import styles from "./Register.module.css";
import { Spinner } from "react-bootstrap";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState();
  const [emailError, setEmailError] = useState("");
  const [registerMsg, setRegisterMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const formValidation = () => {
    let lettersAndNumbers = /^[a-zA-Z0-9]+$/;
    const uppercase = /[A-Z]/;
    let err = {};
    if (!lettersAndNumbers.test(user.name))
      err.name = "UserName Must Be Letters Or Numbers Only! ";
    if (user.name.length <= 3)
      err.name = "UserName Must Be More Than 3 Characters!";
    if (!user.email.includes("@")) err.email = "Email Must Contain @";
    if (!uppercase.test(user.password))
      err.password = "Password Must Containt 1 UpperCase Letter!";
    if (user.password.length === 0 || user.password.length < 8)
      err.password = "Password Must Be More Than 8 Characters!";
    return err;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isErrors = formValidation();
    setIsLoading(true);
    setErrors();
    setEmailError("");
    setRegisterMsg("");
    setTimeout(() => {
      if (Object.keys(isErrors).length === 0) {
        fetch("http://localhost:8080/signup", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        }).then(async res => {
          const response = await res.json();
          if (response.email) setEmailError(response.email);
          if (response.message) setRegisterMsg(response.message);
        })
          .catch((err) => console.log('err', err));
      } else {
        setErrors({ isErrors });
      }
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Fragment>
      <p className={styles.contentTitle}>Register</p>
      <form className={styles.regContent} onSubmit={submitHandler}>
        <div className={styles.contentInput}>
          <label htmlFor="name">Your Name</label>
          <input name="name" id="name" type="text" onChange={changeHandler} />
          {errors && <p className={styles.errors}>{errors.isErrors.name}</p>}
        </div>
        <div className={styles.contentInput}>
          <label htmlFor="email">Email Address</label>
          <input
            name="email"
            id="email"
            type="email"
            onChange={changeHandler}
          />
          {errors && <p className={styles.errors}>{errors.isErrors.email}</p>}
          {emailError && <p className={styles.errors}>{emailError}</p>}
        </div>
        <div className={styles.contentInput}>
          <label htmlFor="pass">Password</label>
          <input
            name="password"
            id="pass"
            type="password"
            onChange={changeHandler}
          />
          {errors && (
            <p className={styles.errors}>{errors.isErrors.password}</p>
          )}
        </div>
        <div className={styles.regInfo}>
          <p>
            Your personal data will be used to support your experience
            <br />
            throughout this website, to manage access to your account,
            <br />
            and for other purposes described in our
            <span> privacy policy.</span>
          </p>
        </div>
        <div className={styles.regButtons}>
          <MainButton submit="submit" style="primary" text="Register" />
          {isLoading && <Spinner animation="border" variant="success" />}
        </div>
        {registerMsg && <p className={styles.success}>{registerMsg}</p>}
      </form>
    </Fragment>
  );
};

export default Register;
