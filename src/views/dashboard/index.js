import React from "react";
import CommentItem from "../../components/CommentItem";
import { CommentContextApi } from "../../context/commentContextApi";
import "../../scss/Dashboard.scss";

function Dashboard() {
  const commentContext = React.useContext(CommentContextApi);
  const { comments } = commentContext;

  return (
    <div className="content-main">
      {/* <div className="card-grid">
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Atlassian JIRA</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className="card-body">
            <p>Plan, track, and release great software.</p>
          </div>
          <div className="card-footer">
            <Link to="#">View integration</Link>
          </div>
        </article>
      </div> */}
      {comments.map((comment) => {
        return <CommentItem comment={comment} key={comment.id} />;
      })}
    </div>
  );
}

export default Dashboard;
