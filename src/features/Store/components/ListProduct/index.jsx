import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import Product from "../../../../components/Product";
import "./ListProduct.scss";
import productApi from "../../../../api/productApi";

function ListProduct(props) {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const fetchListProduct = async () => {
      try {
        const params = {};
        const response = await productApi.getAll();

        setListProduct(response.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListProduct();
  }, []);

  return (
    <Container fluid>
      <Row className="list-product">
        {listProduct.map((product, index) => (
          <Col xs="6" md="3" key={index}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

ListProduct.propTypes = {};

export default ListProduct;
