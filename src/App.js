import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import Test from "../src/features/Test";

const Home = React.lazy(() => import("./features/Home"));
const Store = React.lazy(() => import("./features/Store"));
const Categories = React.lazy(() => import("./features/Categories"));
const ProductDetail = React.lazy(() => import("./features/ProductDetail"));

function App() {
  return (
    <div className="shirt-shop">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>

            <Route path="/home" component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/categories" component={Categories} />
            <Route path="/product" component={ProductDetail} />
            <Route path="/test" component={Test} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
