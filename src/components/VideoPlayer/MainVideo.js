import React from "react";
import "./MainVideo.scss";
import views from "../../assets/icons/views.svg";
import likes from "../../assets/icons/likes.svg";
import CommentForm from "../CommentSec/CommentForm";

const MainVideo = ({ details, comments }) => {
  const timeStamp = details.timestamp;
  const dateObj = new Date(timeStamp);
  const displayDate = dateObj.toLocaleString("en-us", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <div className="vid">
      <div>
        <div>
          <h1 className="current__vid-title">{details.title}</h1>
          <div className="current__vid-details">
            <div className="current__vid-channel--cont">
              <p className="current__vid-channel">By {details.channel}</p>
              <p className="vid__date">{displayDate}</p>
            </div>
            <div className="vid__data">
              <div className="vid__views">
                <img className="vid__views-img" src={views} alt="views icon" />
                <p>{details.views}</p>
              </div>
              <div className="vid__likes">
                <img className="vid__likes-img" src={likes} alt="likes icon" />
                <p>{details.likes}</p>
              </div>
            </div>
          </div>
          <p className="vid__description">{details.description}</p>
        
          <CommentForm  comments={details.comments}/>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
