import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../../api/productApi";
import Header from "../../../../components/Header";
import Product from "../../components/Product";
import LikeProduct from "../../components/LikeProduct";

function MainProductDetail(props) {
  const {} = props;
  const listSize = [{ id: "S" }, { id: "M" }, { id: "L" }, { id: "XL" }];

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
    window.scrollTo(0, 0);
  }, [paramProduct]);

  

  return (
    <div>
      <Product
        dataProduct={productDetail}
        listSize={listSize}
        onClick={(value) => console.log(value)}
      />
      <LikeProduct />
    </div>
  );
}

MainProductDetail.propTypes = {};

export default MainProductDetail;
