import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../api/productApi";
import Header from "../../components/Header";
import Product from "./components/Product";
import LikeProduct from "./components/LikeProduct";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const {} = props;
  const initialProduct = {
    name: "",
    image: "",
    companyCode: "",
    categoryCode: "",
    discount: "",
    price: 0,
    detail: [],

    file: File,
  };
  const [productDetail, setProductDetail] = useState(initialProduct);
  const paramProduct = props.match.params.id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await productApi.getById(paramProduct);
        setProductDetail(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [paramProduct]);

  return (
    <div>
      <Header />
      <Product dataProduct={productDetail} />
      <LikeProduct />
    </div>
  );
}

ProductDetail.propTypes = {};

export default ProductDetail;
