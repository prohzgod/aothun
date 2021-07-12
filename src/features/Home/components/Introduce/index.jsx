import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import "./Introduce.scss";

Introduce.propTypes = {
  title: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
};

Introduce.defaultProps = {
  title: "GIỚI THIỆU",
  photo: "https://picsum.photos/id/2/500/500",
  description:
    "'lorem ipsum' will uncover many we à jkashfdjash dkfhsakj fksajh fdkjsahfjkhaskj fhsakj fkajdh fkjsahfkj hsa kfdhask jhfka jsdhfkjsahb sites still in their infancy. Various versions have evolved over the years, sometimes by acciden'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by acciden",
};

function Introduce(props) {
  const { title, description, photo } = props;

  return (
    <Container fluid>
      <Row className=" introduce__header">
        <Col xs="auto" sm="auto" className="introduce__header--title">
          <span>{title}</span>
        </Col>
      </Row>
      <Row className="introduce__description">
        <Col md="10">
          <Row>
            <img
              src={photo}
              alt={title}
              className="introduce__description--img"
            />
          </Row>
          <div className="introduce__description--content">
            <span className="introduce__description--text">{description}</span>
            <Container>
              <Row className="justify-content-center">
                <span className="introduce__description--btn">Xem thêm</span>
              </Row>
            </Container>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduce;
