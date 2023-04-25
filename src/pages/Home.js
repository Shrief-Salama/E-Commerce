import React, { Fragment, useLayoutEffect } from "react";

import MainHeader from "../layout/MainHeader/MainHeader";
import TopPicksSection from "../components/TopPicksSection/TopPicksSection";
import NewArrivalsSection from "../components/NewArrivalsSection/NewArrivalsSection";
import SubFooter from "../layout/SubFooter/SubFooter";
import Footer from "../layout/Footer/Footer";

const Homepage = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <Fragment>
      <MainHeader />
      <TopPicksSection />
      <NewArrivalsSection />
      <SubFooter />
      <Footer />
    </Fragment>
  );
};

export default Homepage;
