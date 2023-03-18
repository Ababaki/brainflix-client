import React from "react";
import { Link } from "react-router-dom";
import "./Video.scss";

const Video = ({ displayVideo, id, image, title, channel }) => {

  return (
    <Link to={`/videos/${id}`} className="vid" id={id} >
      <div className="vid__img" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="vid__dets">
        <p className="vid__title">{title}</p>
        <p className="vid__channel">{channel}</p>
      </div>
    </Link>
  );
};

export default Video;
