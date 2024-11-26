import React from "react";
import "./Advantage.css";

const Advantage = () => {
  return (
    <div className="advantage-container">
      <div className="accountant-img-container">
        <img
          src="/accountant_manager.jpg"
          alt="accountant manager image"
          className="accountant-image"
        />
        <h1 className="accountant-image-title">Accountant Manager</h1>
      </div>
      <div className="advantage-content-container">
        <div className="advantage-content-title">The Finkeep Advantage</div>
        <div className="advantage-title-underline"></div>
        <div className="advantages">
          {/* ------Automation for Efficiency------  */}
          <div className="advantage">
            <div className="advantage-description-container">
              <div className="advantage-title">
                1. Automation for Efficiency
              </div>
              <div className="advantage-description">
                We harness the power of automation and AI to streamline
                repetitive, time-consuming accounting tasks. From data entry and
                invoice processing to expense tracking and financial reporting,
                we let technology do the heavy lifting, leaving your team with
                more time to innovate and grow.
              </div>
            </div>
          </div>

          {/* ------Human Expertise for Precision------  */}
          <div className="advantage">
            <div className="advantage-description-container">
              <div className="advantage-title">
                2. Human Expertise for Precision
              </div>
              <div className="advantage-description">
                While automation and AI bring efficiency, we understand that the
                human touch is irreplaceable when it comes to making critical
                financial decisions. Our skilled team of accountants and
                financial experts ensures that your finances are managed with
                the utmost precision and compliance.
              </div>
            </div>
          </div>

          {/* ------Customized Solutions------  */}
          <div className="advantage">
            <div className="advantage-description-container">
              <div className="advantage-title">3. Customized Solutions</div>
              <div className="advantage-description">
                We recognize that each business is unique. That's why we offer
                tailor-made financial solutions to meet your specific needs.
                Whether you're a startup, a growing enterprise, or an
                established corporation, we have the expertise to adapt to your
                requirements.
              </div>
            </div>
          </div>

          {/* ------Data Security------  */}
          <div className="advantage">
            <div className="advantage-description-container">
              <div className="advantage-title">4. Data Security</div>
              <div className="advantage-description">
                We prioritize the security of your financial data. Our robust
                systems and stringent security measures guarantee the
                confidentiality and integrity of your sensitive
                information.Trust us to uphold the highest standards of data
                protection and privacy in every aspect of our service.
              </div>
            </div>
          </div>

          {/* ------24/7 Accessibility------  */}
          <div className="advantage">
            <div className="advantage-description-container">
              <div className="advantage-title">5. 24/7 Accessibility</div>
              <div className="advantage-description">
                Thanks to our technology-driven approach, you can access your
                financial data and insights whenever and wherever you need them,
                giving you full control and transparency over your financial
                operations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
