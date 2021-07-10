import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Container,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Dropdown,
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setOpen] = useState(false);

  const toggleUser = () => setOpen(!dropdownOpen);

  return (
    <Container fluid className="header">
      <Row>
        <Col sm="6">
          <Row className="justify-content-center align-items-center header__top">
            <Col xs="3" className="header__top--item">
              <Dropdown isOpen={dropdownOpen} toggle={toggleUser}>
                <DropdownToggle tag="span">
                  <i class="fas fa-user-circle"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Đăng nhập</DropdownItem>
                  <DropdownItem>Đăng ký</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col xs="6" className="header__top--item">
              NAME SHOP
            </Col>
            <Col xs="3" className="header__top--item" onClick={toggle}>
              <i className="fas fa-search"></i>
            </Col>
          </Row>
          <Collapse
            isOpen={isOpen}
            className=" justify-content-center align-items-center header__top"
          >
            <InputGroup style={{ width: 300 }}>
              <Input placeholder="Search" />
              <InputGroupAddon addonType="append">
                <InputGroupText onClick={toggle}>
                  <i class="fas fa-search"></i>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Collapse>
        </Col>

        <Col sm="6">
          <Row className="header__bottom justify-content-center align-items-center">
            <NavLink
              exact
              activeClassName="active"
              className="header__bottom--item"
              to="/home"
            >
              <i class="fas fa-home"></i>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="header__bottom--item"
              to="/store"
            >
              <i class="fas fa-store"></i>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="header__bottom--item"
              to="/categories"
            >
              <i class="fas fa-th-large"></i>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="header__bottom--item"
              to="/notification"
            >
              <i class="fas fa-bell"></i>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="header__bottom--item"
              to="/user"
            >
              <i className="fas fa-shopping-basket"></i>
            </NavLink>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {};

export default Header;
