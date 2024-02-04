import React from "react";
import { Link as ReactLink } from "react-router-dom";

//@ts-expect-error
function Link(props) {
  return <ReactLink {...props}>Link</ReactLink>;
}

export default Link;
