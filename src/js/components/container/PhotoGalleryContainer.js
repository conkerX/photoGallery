import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "../presentational/Test.jsx";

class PhotoGalleryContainer extends Component {
  constructor() {
    super();
    this.state = {
      world: "world"
    };
  }

  render() {
    return (
      <div>
        <Test world={this.state.world} />
      </div>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<PhotoGalleryContainer />, wrapper) : false;

export default PhotoGalleryContainer;
