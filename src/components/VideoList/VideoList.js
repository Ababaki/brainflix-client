import React, { useState } from "react";
import Video from "./Video"
import "./VideoList.scss";

const VideoList = ({ displayVideo, details, videoList }) => {
  


  const filteredVideos = videoList.filter((video) => {
    return video.id !== details.id;
  });


  return (
    <div className="vid-list">
      <h1 className="vid-list--title">NEXT VIDEO</h1>
      {filteredVideos.map((vid) => (
          <Video
            key={vid.id}
            displayVideo={displayVideo}
            image={vid.image}
            title={vid.title}
            channel={vid.channel}
            id={vid.id}
          />

      ))}
    </div>
  );
};

export default VideoList;
