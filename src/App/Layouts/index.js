import React from "react";

const Layout = ({ layout: Layout, isPublic, children }) => {
  const auth = true;

  if (isPublic === true || auth) return <Layout>{children}</Layout>;
  return <>{children}</>;
};
export default Layout;
