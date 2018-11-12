import React from "react";
import PropTypes from "prop-types";

const Test = ({ world }) => (
  <div>
    <h1>Hello {world}</h1>
  </div>
);

Test.propTypes = {
  world: PropTypes.string.isRequired
};
export default Test;
