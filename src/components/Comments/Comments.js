import React from "react";
import "./Comments.scss";

const Comments = ({ name, timestamp, comment }) => {
  return (
    <div className="comment__border">
    
        <div className="comment__avatar"></div>
        <div className="comment__container">
          <div className="comment__cont">
            <p className="comment__name">{name}</p>
            <p className="comment__timestamp">{timestamp}</p>
          
          </div>
          <p className="comment__comment">{comment}</p>
        </div>
         
    </div>
  );
}

export default Comments;

