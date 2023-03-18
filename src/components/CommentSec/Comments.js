import React from "react";
import "./Comments.scss";

const Comments = ({ name, timestamp, comment }) => {
  return (
    <div className="commentSec__border comment-sec__defaut">
    
        <div className="commentSec__avatar"></div>
        <div className="commentSec__container">
          <div className="commentSec__def--cont">
            <p className="commentSec__def--name">{name}</p>
            <p className="commentSec__def--timestamp">{timestamp}</p>
          
          </div>
          <p className="commentSec__def__comment">{comment}</p>
        </div>
         
    </div>
  );
}

export default Comments;

