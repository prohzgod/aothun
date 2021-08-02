import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import "./LikeProduct.scss";
import Product from "../../../../components/Product";
import productApi from "../../../../api/productApi";

function LikeProduct(props) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchLikeProduct = async () => {
      try {
        const params = {
          pageSize: 4,
        };
        const response = await productApi.getAll(params);

        setProduct(response.content);
      } catch (error) {
        console.log("failed", error);
      }
    };
    fetchLikeProduct();
  }, []);
  return (
    <Container fluid>
      <Row className="like-product__title">
        <Col xs="auto">
          <span>CÓ THỂ BẠN THÍCH</span>
        </Col>
      </Row>
      <Row className="like-product__list justify-content-center">
        <Col md="11">
          <Row>
            {products.map((product, index) => {
              return (
                <Col xs="6" md="3" key={index}>
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

LikeProduct.propTypes = {};

export default LikeProduct;
