import React, { useEffect } from "react";
import { emojis } from "../../consts/emoji";
import { API } from "../../utils/api";
function Home() {
  const [active, setActive] = React.useState({ activeIndex: -1 });
  const [name, setName] = React.useState("");
  const [mood, setMood] = React.useState("");
  const [comment, setComment] = React.useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#2ce6ce";
    return () => {
      document.body.style.backgroundColor = "";
    };
  });

  const handleActive = (i, e) => {
    setActive({
      activeIndex: i,
    });
    const emojiObj = getName(i);
    const { name } = emojiObj;
    setMood(name);
  };

  const getName = (emojiId) => {
    const emoji = emojis.find((emoji) => emoji.id === emojiId);
    return emoji;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      name,
      moodValue: mood,
      comment,
    };
    try {
      const resp = await API.post("/api/comments", postData);
      const { data } = resp;

      // reset the form
      setName("");
      setComment("");
      setActive({
        activeIndex: -1,
      });

      alert(data.message);
    } catch (e) {
      if (e.response) {
        alert(e.response.data.error);
      }
      console.log(e);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="home-header">
          <div className="header-row">
            <div className="logo-text">Butterfly</div>
            <div className="login">
              <a href="/dashboard">
                <button className="btn login-btn">Dashboard</button>
              </a>
            </div>
          </div>
        </div>
        <div className="weekly-mood-tracker-box">
          <div className="box-content">
            <form onSubmit={handleSubmit}>
              <div className="row form-group">
                <label htmlFor="name" className="text-blue">
                  Name
                </label>
                <br />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  // required
                  value={name}
                />
              </div>
              <div className="moods form-group">
                <label htmlFor="mood-options" className="text-blue">
                  How is your week going?
                </label>
                <div className="mood-options">
                  {emojis.map((emoji, i) => {
                    return (
                      <img
                        onClick={(e) => handleActive(i, e)}
                        className={`${
                          i === active.activeIndex
                            ? "options bounce-1"
                            : "options"
                        }`}
                        src={emoji.imgUrl}
                        alt="Emoji"
                        id={emoji.id}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="comments" className="text-blue">
                  Comment
                </label>
                <br />
                <textarea
                  className="form-control"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
              <div className="form-group button-section">
                <button className="btn btn-submit">Submit</button>
                <a href="/question">
                  <span className="text-blue">Questionnaire?</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
