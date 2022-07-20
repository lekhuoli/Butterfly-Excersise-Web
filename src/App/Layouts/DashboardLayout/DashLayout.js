import React from "react";
import DashboardNav from "../../../components/DashboardNav";
import Sidebar from "../../../components/Sidebar";
import "./DashboardLayout.css";
const DashLayout = ({ children }) => (
  <>
    <DashboardNav />
    <Sidebar />
    <main>{children}</main>
  </>
);
export default DashLayout;
