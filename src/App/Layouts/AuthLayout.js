import React from "react";

const AuthLayout = ({ children }) => (
  <section className="layout">
    <aside className="right-panel">
      <main>{children}</main>
    </aside>
  </section>
);
export default AuthLayout;
