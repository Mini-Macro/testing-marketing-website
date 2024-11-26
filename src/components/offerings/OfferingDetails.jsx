import React, { useState } from "react";
import "./OfferingDetails.css";
import ModalWindow from "./ModalWindow";

const OfferingDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSowButtonClick = () => {
    // Construct the URL of the file in the public folder
    const filePath = "/SOW Finkeep.docx"; // Adjust the file path and name as needed

    // Create a link element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "SOW Finkeep.docx"; // Adjust the file name as needed

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);
  };

  const handleGetQuoteButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="offerings-container">
      {/* -----Annual Accounting------ */}
      <div className="offering">
        <div className="offering-img-container">
          <img src="/annual_accounting copy.jpg" alt="annual accounting" />
        </div>
        <div className="offering-container">
          <div className="offering-title">ANNUAL ACCOUNTING</div>
          <div className="offering-sub-tittle">
            Introducing AI-Powered Accounting Services - Revolutionizing
            Financial Management for Chartered Accountants
          </div>
          <div className="offering-description">
            For clients who may need to maintain financial records primarily for
            compliance reasons or find themselves facing last-minute tax audits,
            our annual bookkeeping bundles provide a lifeline. We understand
            that certain tax-saving strategies, such as 44AE, may become less
            attractive over time, but maintaining accurate accounts is
            non-negotiable. Our services are designed to cater to your specific
            needs, ensuring that your financial records are prepared
            meticulously and in compliance with the latest regulations. We offer
            these essential services at the fairest prices without compromising
            on the quality you deserve. Count on us to provide a reliable safety
            net, ensuring your financial stability and peace of mind, even in
            the face of unexpected challenges.
          </div>
        </div>
        <div className="offering-btns">
          <button
            className="offering-btn"
            id="btn-1"
            onClick={handleSowButtonClick}
          >
            SOW
          </button>
          <button
            className="offering-btn"
            id="btn-2"
            onClick={handleGetQuoteButtonClick}
          >
            Get a Quote
          </button>
        </div>
        <ModalWindow open={isModalOpen} onClose={handleCloseModal} />
      </div>
      {/* -----Periodical Accounting------ */}
      <div className="offering">
        <div className="offering-img-container">
          <img src="/periodical_accounting.jpg" alt="annual accounting" />
        </div>
        <div className="offering-container">
          <div className="offering-title">PERIODICAL ACCOUNTING</div>
          <div className="offering-description">
            Gain valuable insights into your financial operations with our
            monthly accounting services. By reviewing your accounts on a regular
            basis, you can keep a close eye on the records of your business
            activities. This approach allows for the timely reconciliation of
            the credits obtained from GST and ensures the accurate matching of
            Input Tax Credit (ITC). Our meticulous record-keeping not only
            provides you with segmented and easily digestible information but
            also guarantees timely compliance with all financial regulations.
            Best of all, you can benefit from our expertise without the need for
            a full-time, in-house accountant on your payroll, making it a
            cost-effective and efficient solution for your business.
          </div>
        </div>
        <div className="offering-btns">
          <button
            className="offering-btn"
            id="btn-1"
            onClick={handleSowButtonClick}
          >
            SOW
          </button>
          <button
            className="offering-btn"
            id="btn-2"
            onClick={handleGetQuoteButtonClick}
          >
            Get a Quote
          </button>
        </div>
      </div>
      {/* -----Clean Up Accounting------ */}
      <div className="offering">
        <div className="offering-img-container">
          <img src="/clean_up_accounting.jpg" alt="annual accounting" />
        </div>
        <div className="offering-container">
          <div className="offering-title">CLEAN UP ACCOUNTING</div>
          <div className="offering-description">
            Discover the power of clean-up accounting with FinKeep for unmatched
            financial clarity. We'll transform your messy financial records into
            a crystal-clear picture, ensuring accuracy, compliance, and
            effortless data access. Gain insights to optimize your business,
            reduce stress, and boost confidence, all while simplifying your
            financial processes. Join the clean-up accounting revolution and see
            your true financial position clearly represented. It's time for a
            thriving future with FinKeep. Get back on track after simplifying
            your accounting mess from the past few years. We applaud your
            business development and aim to support you, not penalize you for
            it.
          </div>
        </div>
        <div className="offering-btns">
          <button
            className="offering-btn"
            id="btn-1"
            onClick={handleSowButtonClick}
          >
            SOW
          </button>
          <button
            className="offering-btn"
            id="btn-2"
            onClick={handleGetQuoteButtonClick}
          >
            Get a Quote
          </button>
        </div>
      </div>
      {/* -----INTEGRATION AND MIS REPORTING------ */}
      <div className="offering">
        <div className="offering-img-container">
          <img src="/mis_report.jpg" alt="annual accounting" />
        </div>
        <div className="offering-container">
          <div className="offering-title">INTEGRATION AND MIS REPORTING</div>
          <div className="offering-description">
            We specialize in the process of integrating and creating Management
            Information Systems. This involves taking data from various Customer
            Relationship Management (CRM) software platforms and converting it
            into a customized format. This tailored format is designed to
            provide you with a comprehensive view of your business from multiple
            angles. The purpose of this integration and MIS generation is to
            help you identify different aspects of your business's performance.
            By having data presented in a unified and organized manner, you can
            easily analyze various areas of your operations. This enables you to
            pinpoint profitable opportunities within your business, as well as
            areas that may not be adding value or are not performing as
            expected.
          </div>
        </div>
        <div className="offering-btns">
          <button
            className="offering-btn"
            id="btn-1"
            onClick={handleSowButtonClick}
          >
            SOW
          </button>
          <button
            className="offering-btn"
            id="btn-2"
            onClick={handleGetQuoteButtonClick}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferingDetails;
