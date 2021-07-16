import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Input, Row } from "reactstrap";

import "./ListSize.scss";

function ListSize(props) {
  const { listSize } = props;
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (id) => {
      setActiveItem(id);
  };

  return (
    <Container>
      <Row className="list-size">
        {listSize.map((size) => {
          return (
            <div key={size.id}>
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

ListSize.propTypes = {
  listSize: PropTypes.array,
};

ListSize.defautProps = {
  listSize: [],
};

export default ListSize;
