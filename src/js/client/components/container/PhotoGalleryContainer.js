import React, { Component } from "react";
// import ReactDOM from "react-dom";

import PhotoGallery from "../presentational/PhotoGallery.js";
import Test from "../presentational/Test.js";
import TestIcons from "../presentational/TestIcons.js";

// import "../../../../styles/appStyles.scss";
import "../../../../styles/appStyles.css";

class PhotoGalleryContainer extends Component {
  constructor() {
    super();
    this.state = {
      world: "world",
      images: [
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          caption: "bulbasaur",
          id: 0
        },
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          caption: "charmander",
          id: 1
        },
        {
          original:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
          caption: "squirtle",
          id: 2
        }
      ]
    };
  }

  render() {
    const world = this.state.world;
    const images = this.state.images;

    return (
      <div>
        <TestIcons />
        <Test world={world} />
        <PhotoGallery images={images} />
      </div>
    );
  }
}

export default PhotoGalleryContainer;
