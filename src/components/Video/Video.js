import React from "react";
import { Link } from "react-router-dom";
import "./Video.scss";

const Video = ({ displayVideo, id, image, title, channel }) => {

  return (
    <Link to={`/videos/${id}`} className="video" id={id} >
      <div className="video__image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="video__details">
        <p className="video__title">{title}</p>
        <p className="video__channel">{channel}</p>
      </div>
    </Link>
  );
};

export default Video;
