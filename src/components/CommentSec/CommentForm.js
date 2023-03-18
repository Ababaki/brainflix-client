import React from "react";
import CommentList from "./CommentList";
import avatar from "../../assets/images/Mohan-muruge.jpg"
import Btn from"../Btn/btn"
import addComment from "../../assets/icons/add_comment.svg"


function CommentForm( {comments}) {
  return (
    <div className="commentSec">
      <h1 className="commentSec__title">{comments.length} Comments</h1>
      <form className="commentSec__form">
      <img className=" commentSec__pfp" src={avatar} alt="profile picture"/>
        <div className="commentSec__pfp__container">
         
          <div className="commentSec__f">
              <label htmlFor="comments" className="commentSec__labels">JOIN THE CONVERSATION</label>
              <input type="text" name="comments" placeholder="Add a new comment" className="commentSec__input"></input>
              
          </div>
          <Btn icon={addComment} btnText="COMMENTS" />
        </div>
       
      </form>
      <CommentList  comments={comments} />
    </div>
  );
}

export default CommentForm;


