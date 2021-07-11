import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import "./NewProduct.scss";
import Product from "../../../../components/Product";
import productApi from "../../../../api/productApi";

function NewProduct(props) {
  const [products, setProduct] = useState([]);

  // const products = axios.get("http://localhost:8080/api/product");
  useEffect(() => {
    const fetchNewProduct = async () => {
      try {
        const params = {
          pageSize: 4,
        };
        const response = await productApi.getAll(params);

        setProduct(response.content);

        console.log(response);
      } catch (error) {
        console.log("failed", error);
      }
    };
    fetchNewProduct();
  }, []);
  return (
    <Container fluid>
      <Row className="new-product__title">
        <Col xs="auto">
          <span>SẢN PHẨM MỚI</span>
        </Col>
      </Row>
      <Row className="new-product__list justify-content-center">
        <Col md="11">
          <Row>
            {products.map((product) => {
              return (
                <Col xs="6" md="3">
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

NewProduct.propTypes = {};

export default NewProduct;
