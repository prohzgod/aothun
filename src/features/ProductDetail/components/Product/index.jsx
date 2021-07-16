import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";

import "./Product.scss";
import ListSize from "../ListSize";

function Product(props) {
  const { dataProduct } = props;
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="10" className="product-detail">
          <Row>
            <Col xs="6" className="text-center ">
              <img
                className="product-detail__img"
                src={dataProduct.image}
                alt={dataProduct.name}
              />
            </Col>
            <Col xs="6" className="">
              <div className="product-detail__content">
                <Row>
                  <Col className="product-detail__content--text">
                    <span>{dataProduct.companyCode}</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="product-detail__content--title">
                    <span>{dataProduct.name}</span>
                  </Col>
                </Row>
                <Row>
                  <div className="product-detail__content--price discount ml-3">
                    <span>{dataProduct.price}.đ</span>
                  </div>
                  <div className="product-detail__content--price">
                    <span>{dataProduct.price}.đ</span>
                  </div>
                </Row>
                <Row >
                  <Col>
                    <ListSize listSize={listSize} />
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs="auto" className="product-detail__content--btn" >
                    <span >Thêm vào giỏ hàng</span>
                  </Col>
                </Row>
                <Row>
                  <Col className="product-detail__content--description">
                    <span>
                      The California is a backless slip-on shoe with a clean and
                      sculptural design that strictly emphasizes functionality,
                      with backless construction to slip on and off with ease,
                      an inner vent to provide air flow, and a raised tread for
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Product.propTypes = {
  dataProduct: PropTypes.object,
};

Product.defautProps = {
  dataProduct: null,
};

const listSize = [{ id: "S" }, { id: "M" }, { id: "L" }, { id: "XL" }];

export default Product;
