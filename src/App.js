import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Test from "../src/features/Test";
import Message from "./components/Message";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("./features/Home"));
const Store = React.lazy(() => import("./features/Store"));
const Categories = React.lazy(() => import("./features/Categories"));
const ProductDetail = React.lazy(() => import("./features/ProductDetail"));
const Auth = React.lazy(() => import("./features/Auth"));

function App() {
  const messages = useSelector(state => state.messages) || [];

  return (
    <div className="shirt-shop">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>

            <Route path="/home" component={Home} />
            <Route path="/store" component={Store} />
            <Route path="/categories" component={Categories} />
            <Route path="/product" component={ProductDetail} />
            <Route path="/auth" component={Auth} />
            <Route path="/test" component={Test} />
            <Route component={NotFound} />
          </Switch>
          {  messages.openMessage  ? <Message content={messages.contentMessage} /> : ""}
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
