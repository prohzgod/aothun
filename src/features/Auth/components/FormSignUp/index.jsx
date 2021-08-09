import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputField from "src/custom-fields/InputField";
import { Button, FormGroup, Row } from "reactstrap";

import "./FormSignUp.scss";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

FormSignUp.propTypes = {
  onSubmit: PropTypes.func,
};

FormSignUp.defaultProps = {
  onSubmit: null,
};

function FormSignUp(props) {
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This field is email")
      .required("This field is required"),
    username: Yup.string()
      .min(2, "Minimum 2 characters")
      .max(15, "Maximum 15 characters")
      .required("This field is required"),
    password: Yup.string()
      .matches("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", "At least 8 characters, 1 uppercase letter & 1 number")
      .required("This field is required")
      .min(8, "Minimum 8 characters"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        return (
          <Form className="p-4">
            <FastField
              name="email"
              component={InputField}
              placeholder="Email*"
            />
            <FastField
              name="username"
              component={InputField}
              placeholder="Username*"
            />
            <FastField
              name="password"
              component={InputField}
              placeholder="Password*"
              type="password"
            />
            <FormGroup>
              <Button type="submit" className="btn-submit">
                SIGN UP
              </Button>
            </FormGroup>
            <Row>
              <NavLink
                exact
                activeClassName="active"
                className="btn-redirect"
                to="/auth/login"
              >
                Already registered ? Login
              </NavLink>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormSignUp;
