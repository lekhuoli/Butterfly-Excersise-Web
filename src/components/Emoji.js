import React from "react";
import { emojis } from "../consts/emoji";
function Emoji() {
  return (
    <div className="mood-options">
      {emojis.map((emoji) => {
        return (
          <img
            className="options"
            src={emoji.imgUrl}
            alt="Emoji"
            id={emoji.id}
          />
        );
      })}
    </div>
  );
}

export default Emoji;
