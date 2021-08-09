import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Container, Row, Spinner } from "reactstrap";

import "./Product.scss";
import ListSize from "../ListSize";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../productSlice";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  dataProduct: PropTypes.object,
};

Product.defautProps = {
  dataProduct: null,
};

function Product(props) {
  const { dataProduct, listSize } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const initialProduct = {
    id: dataProduct.id,
    size: "S",
  };

  const [isAddToCart, setIsAddToCart] = useState(false);

  const sizeChangeHandle = (size) => {
    initialProduct.size = size;
  };

  const listProductCart = useSelector((state) => state.products);

  const addToCart = (value) => {
    setIsAddToCart(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addProduct(value);

        dispatch(action);

        localStorage.setItem("cart", JSON.stringify(listProductCart));

        history.push("/store");
        resolve(true);
      }, 500);
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="10" className="product-detail">
          <Row className="align-items-center">
            <Col md="6" xs="12" className="text-center">
              <img
                className="product-detail__img"
                src={dataProduct.urlImage}
                alt={dataProduct.name}
              />
            </Col>
            <Col md="6" xs="12" className="">
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
                <Row>
                  <Col>
                    <ListSize
                      listSize={listSize}
                      sizeChange={sizeChangeHandle}
                    />
                  </Col>
                </Row>
                <Row className="justify-content-start">
                  <Col
                    xs="auto"
                    className="product-detail__content--btn ml-3"
                    onClick={() => addToCart(initialProduct)}
                  >
                    <span>Thêm vào giỏ hàng </span>
                    {isAddToCart && <Spinner size="sm" />}
                  </Col>
                </Row>
                <Row>
                  <Col className="product-detail__content--description">
                    <span>
                      {dataProduct.description}
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

export default Product;
