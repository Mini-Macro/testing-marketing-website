import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactFrom = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/send-email-finkeep", {
        firstName,
        emailAddress,
        subject,
        message,
      });
      window.alert("Email sent successfully!");

      // Reset the form fields
      setFirstName("");
      setEmailAddress("");
      setSubject("");
      setMessage("");
    } catch (error) {
      window.alert("Failed to send email");
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-address">
        <div className="address-title">Let’s get in touch</div>
        <div className="address-message">
          we’re open for any suggesuggestion or just to have a chat
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/Location icon.png"
              alt="Location"
              className="address-icon"
            />
          </div>
          <div className="address-description">
            Address 1:{" "}
            <span className="light-line">
              2nd Floor, Indian Transport Plaza, Tawakal Layout, Wadi, Nagpur
              440023
            </span>
          </div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img src="/Phone icon.png" alt="Phone" className="address-icon" />
          </div>
          <div className="address-description">Phone: +91 9823197963</div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/paper_plane_icon.png"
              alt="Paper"
              className="address-icon"
            />
          </div>
          <div className="address-description">Email: sales@finkeep.in</div>
        </div>
        <div className="address-details">
          <div className="icon-container">
            <img
              src="/earth_asia_icon.png"
              alt="Earth"
              className="address-icon"
            />
          </div>
          <div className="address-description">Website: finkeep.in</div>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-title">Get in touch</div>
        <div></div>
        <form className="contact-form" onSubmit={onFormSubmit}>
          <div className="name-email">
            <div className="input-container">
              <label htmlFor="name">FIRST NAME</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="emailAddress"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="subject">SUBJECT</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="message">MESSAGE</label>
            <input
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
          </div>
          <button type="submit" className="contact-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFrom;
