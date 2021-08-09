import React from "react";
import PropTypes from "prop-types";
import Header from "../../../../components/Header";
import Introduce from "../../components/Introduce";
import Banner from "../../components/Banner";
import NewProduct from "../../components/NewProduct";

function MainHome(props) {
  return (
    <div>
      <Banner />
      <Introduce />
      <NewProduct />
    </div>
  );
}

MainHome.propTypes = {};

export default MainHome;
