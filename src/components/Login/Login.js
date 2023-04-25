import React, { Fragment, useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { isAuth, isAuthenticated } from "../../Helper/Helpers";
import MainButton from "../MainButton/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/apiCalls";
import { loginUser } from "../../redux/slices/user";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState({});
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const [isLoading, setIsLoading] = useState(false);
  const error = useSelector((state) => state.user.error);

  const navigate = useNavigate();

  const changeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isAuth) navigate('/', { replace: true })
  }, [isAuth]);


  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      dispatch(loginUser(user));
      setIsLoading(false);
    }, 3000);
  };

  const boxCheckedHandler = () => {
    setChecked((checked) => !checked);
  };

  return (
    <Fragment>
      <p className={styles.loginTitle}>Log In</p>
      <form className={styles.loginContent} onSubmit={submitHandler}>
        <div className={styles.contentInput}>
          <label htmlFor="user">Email Address</label>
          <input name="email" type="email" id="user" onChange={changeHandler} />
        </div>
        <div className={styles.contentInput}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={changeHandler}
          />
        </div>
        {/* <div className={styles.contentCheckbox}>
          <input
            type="checkbox"
            id="check"
            className={styles.check}
            onChange={boxCheckedHandler}
          />
          <label htmlFor="check">Remember Me</label>
        </div> */}
        {error && <div className={styles.errorMsg}>the candidates are wrong</div>}
        <div className={styles.loginSubmit}>
          <MainButton submit="submit" style="primary" text="Log In" />
          {isLoading && <Spinner animation="border" variant="success" />}
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
