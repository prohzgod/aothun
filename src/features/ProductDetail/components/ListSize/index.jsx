import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Input, Row } from "reactstrap";

import "./ListSize.scss";

ListSize.propTypes = {
  listSize: PropTypes.array,
};

ListSize.defautProps = {
  listSize: [],
};

function ListSize(props) {
  const { listSize } = props;
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
    setActiveItem(id);
    props.sizeChange(id);
  };

  return (
    <Container>
      <Row className="list-size">
        {listSize.map((size, index) => {
          return (
            <div key={index}>
              <label
                htmlFor={size.id}
                className={
                  "list-size__item " + (activeItem === size.id ? "active" : "")
                }
                onClick={() => handleClick(size.id)}
              >
                {size.id}
              </label>
              <Input
                type="radio"
                name="size"
                value={size.id}
                id={size.id}
                style={{ display: "none" }}
              />
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default ListSize;
