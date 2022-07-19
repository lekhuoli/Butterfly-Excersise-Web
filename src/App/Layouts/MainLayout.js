import React from "react";
import MainNav from "../../components/Nav";

const MainLayout = ({ children }) => (
  <section className="layout">
    <aside className="sidebar" />
    <section>
      <MainNav />
      <main>{children}</main>
      <footer />
    </section>
  </section>
);
export default MainLayout;
