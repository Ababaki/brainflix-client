import React from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg"
import Btn from"../Button/Button"
import addComment from "../../assets/icons/add_comment.svg"
import "./CommentForm.scss"


function CommentForm( {comments}) {
  return (
    <div className="comment-sec">
      <h1 className="comment-sec__title">{comments.length} Comments</h1>
      <form className="comment-sec__form">
      <img className=" comment-sec__avatar-img" src={avatar} alt="profile picture"/>
        <div className="comment-sec__container">
         
          <div className="comment-sec__input-field">
              <label htmlFor="comments" className="comment-sec__labels">JOIN THE CONVERSATION</label>
              <input type="text" name="comments" placeholder="Add a new comment" className="comment-sec__input"></input>
              
          </div>
          <Btn icon={addComment} btnText="COMMENTS" />
        </div>
       
      </form>
    </div>
  );
}

export default CommentForm;


