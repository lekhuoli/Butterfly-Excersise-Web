import React, { useEffect } from "react";
import Emoji from "../../components/Emoji";

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
              <a href="/dashboard">
                <button className="btn login-btn">Dashboard</button>
              </a>
            </div>
          </div>
        </div>
        <div className="weekly-mood-tracker-box">
          <div className="box-content">
            <div className="row form-group">
              <label htmlFor="name" className="text-blue">
                Name
              </label>
              <br />
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="moods form-group">
              <label htmlFor="mood-options" className="text-blue">
                How is your week going?
              </label>
              <Emoji />
            </div>
            <div className="form-group">
              <label htmlFor="comments" className="text-blue">
                Comment
              </label>
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
