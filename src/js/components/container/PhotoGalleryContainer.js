import React, { Component } from "react";
import ReactDOM from "react-dom";
import Test from "../presentational/Test.jsx";
// import "../../../styles/appStyles.scss";
import "../../../styles/appStyles.css";

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
        <h1>Hello from h1</h1>
        <h2>Hello from h2</h2>
        <Test world={this.state.world} />
      </div>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<PhotoGalleryContainer />, wrapper) : false;

export default PhotoGalleryContainer;
