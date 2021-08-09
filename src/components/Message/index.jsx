import React from "react";
import PropTypes from "prop-types";
import { Toast, ToastBody, ToastHeader } from "reactstrap";

import "./Message.scss";

Message.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Message.defaultProps = {
  title: "Message",
  content: "",
};

function Message(props) {
  const { title, content } = props;

  return (
    <div className="rounded bg-docs-transparent-grid">
      <Toast>
        <ToastHeader>{title}</ToastHeader>
        <ToastBody>{content}</ToastBody>
      </Toast>
    </div>
  );
}

export default Message;
