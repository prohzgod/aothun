import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "reactstrap";

import "./Filter.scss";
import { NavLink } from "react-router-dom";

function Filter(props) {
  const { brands, prices, categrorys } = props;

  return (
    <Row className="justify-content-start filter">
      <Col xs="auto">
        <Row>
          <span className="filter__title">DANH MỤC SẢN PHẨM</span>
        </Row>
        <Row className="filter__list align-items-center">
          <div className="filter__list--title">
            <span>Loại sản phẩm: </span>
          </div>
          {categrorys.map((categrory, index) => (
            <NavLink
              key={index}
              className="filter__list--item"
              to={"/store?brand=" + categrory.id}
            >
              {categrory.name}
            </NavLink>
          ))}
        </Row>
        <br />
        <Row className="filter__list align-items-center">
          <div className="filter__list--title">
            <span>Thương hiệu: </span>
          </div>
          {brands.map((brand) => (
            <NavLink
              className="filter__list--item"
              to={"/store?brand=" + brand.id}
            >
              {brand.name}
            </NavLink>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

Filter.propTypes = {
  brands: PropTypes.array,
  prices: PropTypes.array,
  categrorys: PropTypes.array,
};

Filter.defautProps = {
  brands: [],
  prices: [],
  categrorys: [],
};

export default Filter;
