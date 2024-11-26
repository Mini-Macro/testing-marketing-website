import React from "react";
import "./IndustriesServed.css";

const IndustriesServed = () => {
  return (
    <div className="industry-main-container">
      <div className="industry-heading-container">
        <div className="industry-section-heading">Industries Served</div>
        <div className="industry-section-blueline"></div>
      </div>
      <div className="industry-content-container">
        <div className="content-upperline">
          <div className="industry-container">
            <div className="industry-number">48</div>
            <div className="industry-title">SCHOOLS & COLLEGES</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">7</div>
            <div className="industry-title">FUTURE & OPTIONS TRADERS</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">7</div>
            <div className="industry-title">GTA & CHA</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">3</div>
            <div className="industry-title">PHARMACY & RESEARCH</div>
          </div>
        </div>
        <div className="content-lowerline">
          <div className="industry-container">
            <div className="industry-number">4</div>
            <div className="industry-title">IT COMPANIES</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">6</div>
            <div className="industry-title">MANUFACTURING & TRADING</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">2</div>
            <div className="industry-title">HOTELS</div>
          </div>
          <div className="industry-container">
            <div className="industry-number">5</div>
            <div className="industry-title">OTHERS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesServed;
