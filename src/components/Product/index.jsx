import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Product.scss";

function Product(props) {
  const { product } = props;
  console.log(product.id, product.discount)

  return (
    <NavLink exact className="" to={"/product/" + product.id}>
      <Card className="product">
        <img className="product__img" src={product.image} alt={product.name} />
        <Container className="product__body">
          <Row>
            <Col className="product__body--title">
              <span>{product.name}</span>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="6" className="product__body--price ">
              <span>{product.price - product.price * product.discount}.đ</span>
            </Col>
            {product.discount === 0 && (
              <Col xs="6" className="product__body--price discount">
                <span>{product.price}.đ</span>
              </Col>
            )}
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
