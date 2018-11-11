import React from "react";
import { Carousel } from "react-bootstrap";

const PhotoGallery = ({ images }) => {
  return (
    <Carousel>
      {images.map(img => {
        return (
          <Carousel.Item>
            <img width={300} height={300} alt="500x500" src={img.original} />
            <Carousel.Caption>
              <h3>{img.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default PhotoGallery;
