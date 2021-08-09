import React from "react";
import PropTypes from "prop-types";
import FormSignIn from "../../components/FormSignIn";
import { Col, Container, Row } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addMessages,
  removeMessages,
} from "src/components/Message/messageSlice";
import authApi from "src/api/authApi";
import { addInformation } from "src/app/userSlice";

SignInPages.propTypes = {};

function SignInPages(props) {
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

    const dataRequest = values;

    const fetchSignIn = async () => {
      try {
        const response = await authApi.postSignIn(dataRequest);
        console.log(response)

        message("User login successfully!");
        // Set token
        localStorage.setItem('idToken', response.token);
        localStorage.setItem('idUser', response.id);
        localStorage.setItem('isLogin', true);
        // Set redux
        const action = addInformation(response)
        dispatch(action);

        

        history.push("/home");
      } catch (error) {
        message(error.response.data.message);
      }
    };

    fetchSignIn();
  };


  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs="6">
            <FormSignIn onSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignInPages;
