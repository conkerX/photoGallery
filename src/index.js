import React from "react";
import ReactDOM from "react-dom";

import SSRTest from "./js/client/components/container/SSRTest";

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.hydrate(<PhotoGalleryContainer />, wrapper) : false;

const wrapper = document.getElementById("app"); // needs to be app not root because of the template string
wrapper
  ? ReactDOM.hydrate(
      <SSRTest data={window.__INITIAL_DATA__} test={"test"} />,
      wrapper
    )
  : false;
