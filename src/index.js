import React from "react";
import ReactDOM from "react-dom";

// import PhotoGalleryContainer from "./js/client/components/container/PhotoGalleryContainer";
import SSRTest from "./js/client/components/container/SSRTest";

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.render(<PhotoGalleryContainer />, wrapper) : false;

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.hydrate(<PhotoGalleryContainer />, wrapper) : false;

const wrapper = document.getElementById("app");
wrapper
  ? ReactDOM.hydrate(
      <SSRTest data={window.__INITIAL_DATA__} test={"test"} />,
      wrapper
    )
  : false;
