import React from "react";
import BlueBox from "./BlueBox";
import Services from "./Services";
import Customers from "./Customers";
import IndustriesServed from "./IndustriesServed";
import Faq from "./Faq";
import Footer from "../Footer";
import Testimony from "./Testimony";

const HomePage = () => {
  return (
    <div className="home-container" style={{ background: "#fafafa" }}>
      <BlueBox />
      <Services />
      <Customers />
      <IndustriesServed />
      <Testimony />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
