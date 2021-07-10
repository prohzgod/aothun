import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Introduce from "./components/Introduce";
import Banner from "./components/Banner";
import NewProduct from "./components/NewProduct";

function Home(props) {
  return (
    <div>
      <Header />
      <Banner />
      <Introduce />
      <NewProduct />
    </div>
  );
}

Home.propTypes = {};

export default Home;
