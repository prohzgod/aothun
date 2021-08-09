import React from "react";
import PropTypes from "prop-types";
import { FastField, Form, Formik } from "formik";
import InputField from "src/custom-fields/InputField";
import {
  Button,
  FormGroup,
  Row,
} from "reactstrap";

import "./FormSignIn.scss";
import { NavLink, useHistory } from "react-router-dom";
import * as Yup from "yup";

FormSignIn.propTypes = {
  onSubmit: PropTypes.func,
};

FormSignIn.defaultProps = {
  onSubmit: null,
};

function FormSignIn(props) {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
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
                Đăng nhập
              </Button>
            </FormGroup>
            <Row>
              <NavLink
                exact
                activeClassName="active"
                className="btn-redirect"
                to="/auth/register"
              >
                Bạn chưa có tài khoản? Đăng ký
              </NavLink>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormSignIn;
