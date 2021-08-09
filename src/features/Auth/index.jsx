
import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";

Auth.propTypes = {};

function Auth(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Redirect exact from={match.url} to={`${match.url}/login`}></Redirect>
      
      <Route exact path={`${match.url}/login`} component={SignInPage} />
      <Route exact path={`${match.url}/register`} component={SignUpPage} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Auth;
