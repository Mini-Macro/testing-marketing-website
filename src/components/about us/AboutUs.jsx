import React from "react";
import HeroSection from "./HeroSection";
import Advantage from "./Advantage";
import OurCommitment from "./OurCommitment";
import OurMission from "./OurMission";
import Footer from "../Footer";

const AboutUs = () => {
  return (
    <div className="aboutus-container" style={{ background: "#fafafa" }}>
      <HeroSection />
      <Advantage />
      <OurCommitment />
      <OurMission />
      <Footer />
    </div>
  );
};

export default AboutUs;
