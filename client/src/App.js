import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import ProtectedRoute from "./components/utils/ProtectedRoute";
import Signup from "./pages/signup";
import Login from "./pages/login";
import MemberSignup from "./pages/member-signup";
import DashboardHome from "./pages/dashboard/dashboardHome";
import DashboardHomeSetting from "./pages/dashboard/dashboardHome-setting";
import DashboardMembers from "./pages/dashboard/dashboardMembers";
import PageNotfound from "./pages/pageNotFound";
import DashboardProfile from "./pages/dashboard/dashboard-profile";
import DashboardMemHome from "./pages/dashboard/dashboardMemHome";
import DashboardMemOrganization from "./pages/dashboard/dashboardMemOrganization";
import DashboardBilling from "./pages/dashboard/dashboard-billing";
import DashboardMemOrgProfile from "./pages/dashboard/dashboardMemOrgProfile";
import DashboardPlans from "./pages/dashboard/dashboard-plans";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="container">
          <Route exact path={"/"} component={Signup} />
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/signup/member/:id"} component={MemberSignup} />
          <ProtectedRoute exact path={"/dashboard"} component={DashboardHome} />
          <ProtectedRoute exact path={"/dashboard/org/setting/:id"} component={DashboardHomeSetting} />
          <ProtectedRoute exact path={"/dashboard/members"} component={DashboardMembers} />
          <ProtectedRoute exact path={"/dashboard/profile"} component={DashboardProfile} />
          <ProtectedRoute exact path={"/dashboard/home"} component={DashboardMemHome} />
          <ProtectedRoute exact path={"/dashboard/member/org"} component={DashboardMemOrganization} />
          <ProtectedRoute exact path={"/dashboard/billing"} component={DashboardBilling} />
          <ProtectedRoute exact path={"/dashboard/org/profile/:id"} component={DashboardMemOrgProfile} />
          <ProtectedRoute exact path={"/dashboard/billing/plans/:id"} component={DashboardPlans} />
          {/* <Route component={PageNotfound} /> */}
          {/* <ProtectedRoute exact path="/dashboard" component={DashboardHome} /> */}
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
