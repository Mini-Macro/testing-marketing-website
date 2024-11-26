import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-main-container">
      <div className="tally-img-container">
        <img src="/tally.png" alt="Tally Image" className="tally-image" />
      </div>
      <div className="services-content-container">
        <div className="content-title">Welcome To Finkeep</div>
        <div className="content-subtitle">
          We Are the Best Accounting Agency
        </div>
        <div className="services">
          {/* Accounting/Bookkeeping */}
          <div className="service">
            <div className="service-icon-container">
              <img
                src="/accounting.png"
                alt="Tally Image"
                className="service-icon"
              />
            </div>
            <div className="title-description-container">
              <div className="service-title">Accounting/Bookkeeping</div>
              <div className="service-description">
                Recording and organizing of financial transactions for informed
                decision <br /> making.
              </div>
            </div>
          </div>

          {/* Financial eports */}
          <div className="service">
            <div className="service-icon-container">
              <img
                src="/financial_report.png"
                alt="Tally Image"
                className="service-icon"
              />
            </div>
            <div className="title-description-container">
              <div className="service-title">Financial Reports</div>
              <div className="service-description">
                A comprehensive snap-shot of company’s financial performance and{" "}
                <br /> position.
              </div>
            </div>
          </div>

          {/* Bank/Ledger reconciliation */}
          <div className="service">
            <div className="service-icon-container">
              <img
                src="/distributed-ledger.png"
                alt="Tally Image"
                className="service-icon"
              />
            </div>
            <div className="title-description-container">
              <div className="service-title">Bank/Ledger reconciliation</div>
              <div className="service-description">
                Process of comparing records, identifying discrepancies to
                maintain <br /> financial integrity.
              </div>
            </div>
          </div>

          {/* GST reconciliation */}
          <div className="service">
            <div className="service-icon-container">
              <img
                src="/taxes.png"
                alt="Tally Image"
                className="service-icon"
              />
            </div>
            <div className="title-description-container">
              <div className="service-title">GST reconciliation</div>
              <div className="service-description">
                Double checking and matching of GST data between your records
                and the <br /> government data to ensure timely compliance and
                filling of tax.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
