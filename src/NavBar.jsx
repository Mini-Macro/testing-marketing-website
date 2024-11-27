import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import axios from "axios";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = async () => {
    const API_URL =
      import.meta.env.VITE_API_URL ||
      "https://phonepe-payment-server.onrender.com";

    try {
      const response = await fetch(`${API_URL}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Test User",
          amount: 1,
          number: "9823197963",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        // Used PhonePe checkout bundle instead of direct redirect
        window.PhonePeCheckout.transact({
          tokenUrl: data.data.instrumentResponse.redirectInfo.url,
        });
      } else {
        setError(data.message || "Payment initiation failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="logo-container">
          <img src="/finkeep_logo.png" alt="Description of the image" />
        </Link>
        <div className={`menu-items-container ${menuOpen ? "menu-open" : ""}`}>
          <div className="menu-item">
            <Link to="/" className="menu-text">
              Home
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/aboutus" className="menu-text">
              About Us
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/offerings" className="menu-text">
              Offerings
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/contactus" className="menu-text">
              Contact Us
            </Link>
          </div>
          <div className="get-started-button">
            <button onClick={handleClick} className="button-text">
              Log In
            </button>
          </div>
        </div>
      </div>
      <div className="menu-btn">
        <button onClick={handleMenuClick}>
          <HiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
