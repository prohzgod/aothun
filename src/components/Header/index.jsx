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
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownUser, setDropdownUser] = useState(false);
  const toggleUser = () => setDropdownUser(!dropdownUser);

  const [dropdownStore, setDropdownStore] = useState(false);
  const toggleStoreShow = () => setDropdownStore(true);
  const toggleStoreHidden = () => setDropdownStore(false);
  return (
    <Container fluid>
      <Row className="header mobile">
        <Row className="justify-content-center align-items-center header__top">
          <Col xs="3" className="header__top--item">
            <Dropdown isOpen={dropdownUser} toggle={toggleUser}>
              <DropdownToggle tag="span">
                <i className="fas fa-user-circle"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Đăng nhập</DropdownItem>
                <DropdownItem>Đăng ký</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col xs="6" className="header__top--item">
            HF Store
          </Col>
          <Col xs="3" className="header__top--item" onClick={toggle}>
            <i className="fas fa-search"></i>
          </Col>
        </Row>
        <Collapse
          isOpen={isOpen}
          className="row justify-content-center align-items-center header__top"
        >
          <InputGroup style={{ width: 300 }}>
            <Input placeholder="Search" />
            <InputGroupAddon addonType="append">
              <InputGroupText onClick={toggle}>
                <i className="fas fa-search"></i>
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Collapse>
        <Row className="justify-content-center align-items-center header__bottom">
          <NavLink
            exact
            activeClassName="active"
            className="header__bottom--item"
            to="/home"
          >
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="header__bottom--item"
            to="/store"
          >
            <i className="fas fa-store"></i>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="header__bottom--item"
            to="/categories"
          >
            <i className="fas fa-th-large"></i>
          </NavLink>
          <NavLink
            exact
            activeClassName="active"
            className="header__bottom--item"
            to="/notification"
          >
            <i className="fas fa-bell"></i>
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
      </Row>
      <Row className="header desktop align-items-center">
        <Col md="12" className="header__background" style={{ zIndex: 16 }}>
          <Row>
            <Col xs="4">
              <NavLink
                exact
                activeClassName="active"
                className="header__left--item"
                to="/home"
              >
                Trang chủ
              </NavLink>
              <NavLink
                exact
                activeClassName="active"
                className="header__left--item"
                to="/store"
              >
                <Dropdown isOpen={dropdownStore} onMouseEnter={toggleStoreShow}>
                  <DropdownToggle tag="span">Cửa hàng</DropdownToggle>
                  <DropdownMenu onMouseLeave={toggleStoreHidden}>
                    <DropdownItem>Đăng nhập</DropdownItem>
                    <DropdownItem>Đăng ký</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavLink>

              <div className="d-inline-block" style={{ width: 20 }}>
                <InputGroup className="header__left--search">
                  <Input placeholder="Search" bsSize="sm" />
                  <InputGroupAddon addonType="append">
                    <InputGroupText onClick={toggle}>
                      <i className="fas fa-search"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Col>
            <Col xs="4" className="text-center header__title">
              HF Store
            </Col>
            <Col xs="4" className="text-center">
              <Row className="justify-content-end">
                <NavLink
                  exact
                  activeClassName="active"
                  className="header__right--item"
                  to="/cart"
                >
                  <i className="fas fa-shopping-basket"></i>
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  className="header__right--item"
                  to="/notification"
                >
                  <i className="fas fa-bell"></i>
                </NavLink>
                <Dropdown
                  isOpen={dropdownUser}
                  toggle={toggleUser}
                  className="header__right--item"
                >
                  <DropdownToggle tag="span">
                    <i className="fas fa-user-circle"></i>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Đăng nhập</DropdownItem>
                    <DropdownItem>Đăng ký</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {};

export default Header;
