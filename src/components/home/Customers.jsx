import React from "react";
import { Link } from "react-router-dom";
import "./Customers.css";

const Customers = () => {
  return (
    <div className="customer-parent">
      <div className="parent-heading-container">
        <div className="parent-heading">How you Benefit From FinKeep</div>
        <div className="customer-heading-line"></div>
      </div>
      <div className="customers-container">
        {/* Chartered Accountants */}
        <div className="customer-container">
          <div className="customer-icon-container">
            <img
              src="/chartered_accountant.png"
              alt="business owner"
              className="customer-icon"
            />
          </div>
          <div className="customer-name">Chartered Accountants</div>
          <div className="customer-description">
            Outsourcing accounting tasks to us optimizes CA expertise
            utilization, facilitating more tax audits without compromising
            quality, averting delays, and maintaining excellence.
          </div>
          <div className="read-more-btn">
            <Link to="/chartered-accountant">Read More</Link>
          </div>
        </div>
        {/* Business Owner */}
        <div className="customer-container">
          <div className="customer-icon-container">
            <img
              src="/business_owner.png"
              alt="business owner"
              className="customer-icon"
            />
          </div>
          <div className="customer-name">Business Owner</div>
          <div className="customer-description">
            Our cost-effective accounting services require no year-round
            commitment, offering savings of up to 1/3, allowing you to focus on
            core business functions while we handle your accounting needs.
          </div>
          <div className="read-more-btn">
            <Link to="/business-owners">Read More</Link>
          </div>
        </div>

        {/* Accounting Firm */}
        <div className="customer-container">
          <div className="customer-icon-container">
            <img
              src="/accounting_firm.png"
              alt="business owner"
              className="customer-icon"
            />
          </div>
          <div className="customer-name">Accounting Firms</div>
          <div className="customer-description">
            Our scalable services eliminate excess capacity, enabling business
            growth without added overhead costs. Enhance client engagements and
            reputation with our client-pleasing reports.
          </div>
          <div className="read-more-btn">
            <Link to="/accounting-firm">Read More</Link>
          </div>
        </div>
        {/* Professional Affiliates */}
        <div className="customer-container">
          <div className="customer-icon-container">
            <img
              src="/professional_affiliates.png"
              alt="business owner"
              className="customer-icon"
            />
          </div>
          <div className="customer-name">Professional Affiliates</div>
          <div className="customer-description">
            Future aspirants can boost their practice effortlessly with extra
            stipends by using our discounted services to manage books of new
            clients and ensuring quality compliance from onset.
          </div>
          <div className="read-more-btn">
            <Link to="/professional-affiliates">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
