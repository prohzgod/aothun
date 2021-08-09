import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Product.scss";

function Product(props) {
  const { product } = props;

  return (
    <NavLink exact className="product" to={"/product/" + product.id}>
      <Card>
        <img className="product__img" src={product.urlImage} alt={product.name} />
        <Container className="product__body">
          <Row>
            <Col className="product__body--title">
              <span>{product.name} </span>
            </Col>
          </Row>
          <Row>
            <Col className="product__body--title">
              <span>{product.companyCode} </span>
            </Col>
          </Row>
          <Row>
            {product.discount === 0 || (
              <Col xs="auto" className="product__body--price discount">
                <span>{product.price}.đ</span>
              </Col>
            )}
            <Col xs="auto" className="product__body--price ">
              <span>{product.price - product.price * product.discount}.đ</span>
            </Col>
          </Row>
        </Container>
      </Card>
    </NavLink>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

Product.defaultProps = {
  product: {},
};

export default Product;
