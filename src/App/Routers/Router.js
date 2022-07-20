import Layout from "../Layouts";
import PrivateRoute from "./PrivateRouter";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DashLayout from "../Layouts/DashboardLayout/DashLayout";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";

import Login from "../../views/auth/Login";
import Home from "../../views/home";
import Dashboard from "../../views/dashboard";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* Auth Router  */}
      <Route path={["/login"]} exact>
        <Layout layout={AuthLayout} isPublic={false}>
          <Route path={"/login"} exact component={() => <Login />} />
        </Layout>
      </Route>

      {/* Public routers  */}
      <Route path={["/"]} exact>
        <Layout layout={MainLayout} isPublic={false}>
          <Route path={"/"} exact component={() => <Home />} />
        </Layout>
      </Route>

      {/* Protected routers  */}

      <Route path={["", "/dashboard"]} exact>
        <Layout layout={DashLayout} isPublic={false}>
          <PrivateRoute
            path={["", "/dashboard"]}
            exact
            component={() => <Dashboard />}
          />
        </Layout>
      </Route>

      {/* Not found router  */}

      <Route component={() => <div>404</div>}></Route>
    </Switch>
  </BrowserRouter>
);
export default Router;
