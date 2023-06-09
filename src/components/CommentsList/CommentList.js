import React from "react";
import Comments from "../Comments/Comments.js";
import "./CommentList.scss"

const CommentList = ({comments}) => {

  const formatTimestamp = (timestamp) => {
    const dateObj = new Date(timestamp);
    const displayDate = dateObj.toLocaleString("en-us", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return displayDate;
  };

  return (
    <div className="comment-sec__list" >
      {comments.map((comment) => (
        <Comments
          key={comment.id}
          name={comment.name}
          timestamp={formatTimestamp(comment.timestamp)}
          comment={comment.comment}
        />
      ))}
    </div>
  );
};

export default CommentList;

