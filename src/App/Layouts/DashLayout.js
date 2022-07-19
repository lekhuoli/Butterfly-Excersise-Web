import React from "react";
import DashboardNav from "../../components/DashboardNav";
import Sidebar from "../../components/Sidebar";

const DashLayout = ({ children }) => (
  <section className="layout">
    <aside className="sidebar" />
    <section>
      <DashboardNav />
      <Sidebar />
      <main>{children}</main>
      <footer />
    </section>
  </section>
);
export default DashLayout;
