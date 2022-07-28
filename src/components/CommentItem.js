import React from "react";
import { emojis } from "../consts/emoji";

function CommentItem({ comment }) {
  const fetchImgUrl = (name) => {
    const imgObj = emojis.find((emoji) => emoji.name === name);
    return imgObj.imgUrl;
  };

  return (
    <div className="comment-grid">
      <div className="card">
        <div className="card-header user-info">
          <h3>{comment.user?.username}</h3>
          <p>{comment.createdAt.split("T")[0]}</p>
        </div>
        <div className="card-body">
          <div className="emoji-container">
            <img
              className="box-emoji"
              src={fetchImgUrl(comment.moodValue)}
              alt="emoji"
            />
            <p className="emoji-text">{comment?.moodValue}</p>
          </div>

          {comment?.comment}
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default CommentItem;
