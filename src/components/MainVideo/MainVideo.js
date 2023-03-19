import React from "react";
import "./MainVideo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentsList/CommentList";

const MainVideo = ({ details, comments }) => {
  const timeStamp = details.timestamp;
  const dateObj = new Date(timeStamp);
  const displayDate = dateObj.toLocaleString("en-us", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div className="video">
      <div>
        <div>
          <h1 className="current__video-title">{details.title}</h1>
          <div className="current__video-details">
            <div className="current__video-channel--cont">
              <p className="current__video-channel">By {details.channel}</p>
              <p className="video__date">{displayDate}</p>
            </div>
            <div className="video__data">
              <div className="video__views">
                <img className="video__views-img" src={views} alt="views icon" />
                <p>{details.views}</p>
              </div>
              <div className="video__likes">
                <img className="video__likes-img" src={likes} alt="likes icon" />
                <p>{details.likes}</p>
              </div>
            </div>
          </div>
          <p className="video__description">{details.description}</p>
        
          <CommentForm  comments={details.comments}/>
          <CommentList comments={details.comments}/>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
