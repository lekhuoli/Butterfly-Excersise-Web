import React, { useEffect } from "react";
import { emojis } from "../../consts/emoji";
import "./Home.css";

function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#2ce6ce";

    return () => {
      document.body.style.backgroundColor = "";
    };
  });
  return (
    <div>
      <div className="container">
        <div className="home-header">
          <div className="header-row">
            <div className="logo-text">Butterfly</div>
            <div className="login">
              <button className="btn login-btn">Login</button>
            </div>
          </div>
        </div>
        <div className="weekly-mood-tracker-box">
          <div className="box-content">
            <div className="row form-group">
              <label htmlFor="name">Name </label>
              <br />
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="moods form-group">
              <label htmlFor="mood-options" className="mood-label">
                How is your week going?
              </label>
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
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments: </label>
              <br />
              <textarea className="form-control" name="comment" />
            </div>
            <div className="form-group">
              <button className="btn btn-submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
