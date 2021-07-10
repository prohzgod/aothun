import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";

import React, { useState } from "react";
import PropTypes from "prop-types";

function Test(props) {
  const initialProduct = {
    name: "",
    size: [],
    price: 0,
    file: File,
  };
  const initialSize = {
    size: "",
    quanlity: 0,
  };

  const [product, setProduct] = useState(initialProduct);
  const updateSizeSize = (event, index) => {
    const size = product.size;
    size[index].size = event.target.value;
    setProduct({ ...product, size });
  };
  const updateSizeQuanlity = (event, index) => {
    const size = product.size;
    size[index].quanlity = event.target.value;
    setProduct({ ...product, size });
  };
  const addSize = (event) => {
    event.preventDefault();
    const size = product.size;
    size.push(initialSize);
    setProduct({ ...product, size });
  };

  const updateFile = (event) => {
    event.preventDefault();
  }
  const submit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080", {
      ...product,
    });
  };
  return (
    <Container>
      <Form>
        <FormGroup>
          <Input fluid label="Name" placeholder="Name of product" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" onChange={(event) => updateFile(event)}/>
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button onClick={addSize}> Add size</Button>
        {product?.size.map((item, index) => (
          <FormGroup key={index}>
            <Input
              key={index + "size"}
              label="Size"
              value={item?.size || 0}
              onChange={(event) => updateSizeSize(event, index)}
            ></Input>

            <Input
              key={index + "quanlity"}
              type="number"
              min={0}
              label="Quanlity"
              value={item.quanlity}
              onChange={(event) => updateSizeQuanlity(event, index)}
            ></Input>
          </FormGroup>
        ))}
        <Button onClick={submit}>Them san pham</Button>
      </Form>
    </Container>
  );
}

Test.propTypes = {};

export default Test;
