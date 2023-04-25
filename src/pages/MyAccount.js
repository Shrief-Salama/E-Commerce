import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Footer from "../layout/Footer/Footer";
import NavBar from "../layout/NavBar/NavBar";
import SubFooter from "../layout/SubFooter/SubFooter";
import SubHeader from "../layout/SubHeader/SubHeader";
import Log from "../components/MyAccountContent/Log";
import { reset, logout } from "../redux/slices/user";

const MyAccount = () => {
  const dispatch = useDispatch();

  const currentPath = [
    { name: 'Home', url: '/' },
    { name: 'My account', url: '/myaccount' }
  ];

  useEffect(() => {
    dispatch(reset())
  }, [])

  return (
    <div>
      <NavBar />
      <SubHeader title="My Account" path={currentPath} />
      <Log />
      <SubFooter />
      <Footer />
    </div>
  );
};

export default MyAccount;
