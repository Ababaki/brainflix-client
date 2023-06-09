import React from "react";
import "./Hero.scss";

const Hero = ({ videoObj }) => {
  return (
    <div>
      <video className="video__img" controls poster={videoObj.image}>
        {/* <source src={videoObj.video} /> */}
      </video>
    </div>
  );
};

export default Hero;
