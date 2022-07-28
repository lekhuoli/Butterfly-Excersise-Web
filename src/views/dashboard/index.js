import React from "react";
import CommentItem from "../../components/CommentItem";
import "../../scss/Dashboard.scss";
import { API } from "../../utils/api";

function Dashboard() {
  const [comments, setComments] = React.useState([]);

  const getCommentItem = async () => {
    try {
      const resp = await API.get("/api/comments");
      const { data } = resp;
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCommentItem();
  }, []);

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
