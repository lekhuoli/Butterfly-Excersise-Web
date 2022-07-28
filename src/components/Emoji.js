import React from "react";
import { emojis } from "../consts/emoji";
function Emoji() {
  const [active, setActive] = React.useState({ activeIndex: -1 });

  return (
    <div className="mood-options">
      {emojis.map((emoji, i) => {
        return (
          <img
            onClick={() =>
              setActive({
                activeIndex: i,
              })
            }
            className={`${
              i === active.activeIndex ? "options bounce-1" : "options"
            }`}
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
