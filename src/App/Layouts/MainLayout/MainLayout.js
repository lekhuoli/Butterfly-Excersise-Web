import React from "react";
import "./MainLayout.css";
const MainLayout = ({ children }) => (
  <div className="home-wrapper">
    <main>{children}</main>
  </div>
);
export default MainLayout;
