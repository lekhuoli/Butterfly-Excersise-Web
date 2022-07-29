import React from "react";
import { Link } from "react-router-dom";
import Rating from "../../components/Rating";

function Question() {
  return (
    <div className="container">
      <div className="home-header">
        <div className="header-row">
          <div className="logo-text">Butterfly</div>
          <div className="login">
            <a href="/dashboard">
              <button className="btn login-btn">Dashboard</button>
            </a>
          </div>
        </div>
      </div>
      <Rating />
      <Rating />
      <Rating />
      <Rating />
    </div>
  );
}

export default Question;
