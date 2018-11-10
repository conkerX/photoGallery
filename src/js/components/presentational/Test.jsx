import React from "react";
import PropTypes from "prop-types";

const Test = ({ world }) => (
  <div>
    <p>Hello {world}</p>
  </div>
);

Test.propTypes = {
  world: PropTypes.string.isRequired
};
export default Test;
