import React from "react";
import { Link } from "react-router-dom";
function DashboardNav() {
  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="/">
            <h2 className="dash-header">Butterfly AI</h2>
          </a>
        </div>
        <div className="header-navigation">
          <nav className="header-navigation-links">
            {/* <Link to="#"> Home </Link> */}
          </nav>
          <div className="header-navigation-actions">
            {/* <div className="search">
              <input type="text" placeholder="Search" />
              <button type="submit">
                <i className="ph-magnifying-glass-bold"></i>
              </button>
            </div> */}

            {/* <Link to="#"> Admin </Link> */}
          </div>
        </div>
        <Link to="#" className="button">
          <i className="ph-list-bold"></i>
          <span>Menu</span>
        </Link>
      </div>
    </header>
  );
}

export default DashboardNav;
