"use client";
import LandingPageBody from "./body";
import Footer from "./footer";
import Header from "./header";

const LandingPageContainer = () => {
  return (
    <div>
      <Header />

      {/* Body Goes here */}
      <LandingPageBody />
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default LandingPageContainer;
