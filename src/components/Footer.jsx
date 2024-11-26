import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Footer.css";
const Footer = () => {
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleSendEmail = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/send-email-user", {
        recipientEmail,
      });
      window.alert("Email sent successfully!");
      setRecipientEmail("");
    } catch (error) {
      // window.alert("Failed to send email");
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="footer-container">
      <div className="footer-head">
        <Link to="/" className="brand-img-container">
          <img src="/finkeep_white.png" alt="brand img" className="brand-img" />
        </Link>
        <div className="social-media-icon-container">
          <img src="/x_icon.png" alt="x" className="footer-icon" />
          <img src="/insta_icon.png" alt="instagram" className="footer-icon" />
          <img
            src="/linkedin_icon.png"
            alt="linkedin"
            className="footer-icon"
          />
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Company</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/contactus">Contact Us</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer-nav-item">Log In</div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Offerings</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Annual Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Periodical Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Clean Up Accounting</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/offerings">Integration & Mis Report</Link>
          </div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Discover</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-nav-item">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="footer-nav-item">
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
        <div className="footer-nav-container">
          <div className="footer-nav" style={{ marginBottom: "10px" }}>
            <div className="footer-nav-title">Contact Us</div>
            <div className="footer-nav-whiteline"></div>
          </div>
          <div className="footer-input-field">
            <input
              type="email"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                color: "black",
                width: "100%",
                padding: "8px",
                marginBottom: "8px",
                borderRadius: "4px",
                outline: "none",
              }}
            />
          </div>
          <div className="footer-btn">
            <button
              onClick={handleSendEmail}
              style={{
                width: "100%",
                padding: "8px 16px",
                borderRadius: "4px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <div>Copyright © 2024 Finkeep All rights reserved</div>
        <div>Privacy policy, Terms & condition</div>
      </div>
    </div>
  );
};

export default Footer;
