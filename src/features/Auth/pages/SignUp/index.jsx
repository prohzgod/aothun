import React, { useState } from "react";
import PropTypes from "prop-types";
import FormSignUp from "../../components/FormSignUp";
import { Col, Container, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import authApi from "src/api/authApi";
import {
  addMessages,
  removeMessages,
} from "../../../../components/Message/messageSlice";
import { useDispatch } from "react-redux";

SignUpPages.propTypes = {};

function SignUpPages(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const message = (message) => {
    const value = {
      openMessage: true,
      contentMessage: message,
    };

    const action = addMessages(value);
    dispatch(action);

    setTimeout(() => {

      const value = {
        openMessage: false,
        contentMessage: message,
      };
      
      const action = removeMessages(value);
      dispatch(action);
    }, 5000);
  };

  const handleSubmit = (values) => {
    const roles = ["CUSTOMER"]; //set roles khách hàng

    const dataRequest = {
      ...values,
      roles: roles,
    };

    const fetchSignUp = async () => {
      try {
        const response = await authApi.postSignUp(dataRequest);
        message(response.message);
        history.push("/auth/login");
      } catch (error) {
        message(error.response.data.message);
      }
    };

    fetchSignUp();
  };

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="6">
            <FormSignUp onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpPages;
