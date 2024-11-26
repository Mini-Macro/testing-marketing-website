import React from "react";
import "./Faq.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-heading-container">
        <div className="faq-heading">Frequently Asked Questions</div>
        <div className="faq-blueline"></div>
      </div>
      <div className="content-container">
        <div className="qna-container">
          <Accordion
            style={{
              fontSize: "16px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: "#555555",
              width: "100%",
              marginBottom: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How does your AI system handle suspense entries?
            </AccordionSummary>
            <AccordionDetails
              style={{ borderTop: "1px dashed #555555", paddingTop: "16px" }}
            >
              All the entries which a human can identify can be entered by the
              artificial intelligence. Our AI system flags entries without
              descriptions and emails them to the client with reference numbers
              two days before a scheduled video conference for clarification.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="qna-container">
          <Accordion
            style={{
              fontSize: "16px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: "#555555",
              width: "100%",
              marginBottom: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How do you streamline and minimize the back-and-forth
              communication between your accounting team and the client?
            </AccordionSummary>
            <AccordionDetails
              style={{ borderTop: "1px dashed #555555", paddingTop: "16px" }}
            >
              We have established a structured operational protocol within our
              organization to minimize unnecessary back-and-forth communication
              between our team and clients. Our approach includes: Efficient
              Data Transfer: We use networking software such as OneDrive to
              facilitate seamless and secure data transmission, reducing the
              need for frequent exchanges. Chartered Accountant Interaction: To
              prevent clients from dealing with complex financial terminologies,
              our clients have direct access to chartered accountants within our
              network. This ensures effective communication and eliminates the
              need for extensive client education on financial terminology.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="qna-container">
          <Accordion
            style={{
              fontSize: "16px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: "#555555",
              width: "100%",
              marginBottom: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How do you guarantee the security of sensitive information?
            </AccordionSummary>
            <AccordionDetails
              style={{ borderTop: "1px dashed #555555", paddingTop: "16px" }}
            >
              Vendor Agreements: We establish binding agreements with our
              clients to uphold strict confidentiality standards, safeguarding
              the confidentiality of client data. Secure Data Storage: Client
              data is exclusively stored on their OneDrive accounts or on our
              local network. Access to these drives is granted to us, ensuring
              that data remains securely within the client's controlled
              environment. This setup minimizes the risk of unauthorized access.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="qna-container">
          <Accordion
            style={{
              fontSize: "16px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: "#555555",
              width: "100%",
              marginBottom: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How do you verify the precision of the data?
            </AccordionSummary>
            <AccordionDetails
              style={{ borderTop: "1px dashed #555555", paddingTop: "16px" }}
            >
              We uphold rigorous quality standards to ensure the precision of
              our data: Comprehensive Training: Our accountants undergo thorough
              training, including periodic assessments, to maintain their
              proficiency. Regular CA Verification: A Chartered Accountant (CA)
              periodically reviews the work of our accountants to maintain
              accuracy and compliance. Autonomous Bots: We are in the process of
              implementing autonomous bots for data validation, further
              enhancing the accuracy of our reports.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="qna-container">
          <Accordion
            style={{
              fontSize: "16px",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              color: "#555555",
              width: "100%",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How do you ensure the quality of your workforce?
            </AccordionSummary>
            <AccordionDetails
              style={{ borderTop: "1px dashed #555555", paddingTop: "16px" }}
            >
              Continuous Training: Our accountants receive ongoing training,
              including post-induction evaluations, to enhance their accuracy
              and competency. Quality Assurance: Every data output undergoes
              scrutiny by either a senior accountant or a chartered accountant
              before finalization. This ensures alignment with our internal
              accounting standards and maintains quality assurance.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
