import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import Sidebar from "../../../components/Sidebar";
import "./DashboardLayout.css";
const DashLayout = ({ children }) => (
  <>
    <DashboardNav />
    <main className="main">
      <div className="responsive-wrapper">
        <div className="content">
          <Sidebar />
          {children}
        </div>
      </div>
    </main>
  </>
);
export default DashLayout;
