import React from "react";
import homeIcon from "../../../../images/home.png";
import largeImg from "../../../../images/largeImg.jpg";

const TestIcons = () => {
  return (
    <div className="nav">
      <div className="img-container">
        <img id="home" src={homeIcon} height="75px" width="75px" />
      </div>
      <img id="frontImg" src={largeImg} />
    </div>
  );
};

export default TestIcons;
