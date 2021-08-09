import React from "react";
import PropTypes from "prop-types";
import Header from "../../../../components/Header";
import ListProduct from "../../components/ListProduct";

function MainStore(props) {
  return (
    <div>
      <ListProduct />
    </div>
  );
}

MainStore.propTypes = {};

export default MainStore;
