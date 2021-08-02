import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import MainPage from "./pages/main";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/:id`} component={MainPage} />

      <Route component={NotFound} />  
    </Switch>
  );
}

export default ProductDetail;
