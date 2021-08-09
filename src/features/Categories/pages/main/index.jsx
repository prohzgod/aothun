import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import Header from "../../../../components/Header";
import Filter from "../../components/Filter";

function MainCategories(props) {
  const {} = props;

  return (
    <div>
      <Filter brands={brands} categrorys={categrorys} />
    </div>
  );
}

MainCategories.propTypes = {};

const brands = [
  {
    id: 1,
    name: "Nike",
  },

  {
    id: 3,
    name: "Hermes",
  },
  {
    id: 2,
    name: "Louis Vuitton",
  },
  {
    id: 4,
    name: "Gucci",
  },
  {
    id: 5,
    name: "Adidas",
  },
  {
    id: 6,
    name: "Tiffany & Co",
  },
];
const categrorys = [
  {
    id: 1,
    name: "Áo thun",
  },

  {
    id: 3,
    name: "Sơ mi",
  },
  {
    id: 2,
    name: "Unisex",
  },
  {
    id: 4,
    name: "Bộ sưu tập",
  },
];

export default MainCategories;
