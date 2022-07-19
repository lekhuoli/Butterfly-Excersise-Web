import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = (route) => {
  const auth = true;
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => {
        if (!auth) return <Redirect to="/login" />;
        return React.createElement(route.component, props);
      }}
    />
  );
};
export default PrivateRoute;
