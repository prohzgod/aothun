import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import ListProduct from "./components/ListProduct";

function Store(props) {
  return (
    <div>
      <Header />
      <ListProduct />
    </div>
  );
}

Store.propTypes = {};

export default Store;
