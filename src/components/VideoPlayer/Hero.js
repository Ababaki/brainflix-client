import React from "react";
import "./MainVideo.scss";

const Hero = ({ videoObj }) => {
  return (
    <div>
      <video className="vidi__img" controls poster={videoObj.image}>
        {/* <source src={videoObj.video} /> */}
      </video>
    </div>
  );
};

export default Hero;
