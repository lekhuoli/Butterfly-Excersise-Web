import React from "react";
import "../../scss/Dashboard.scss";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="content-main">
      <div className="card-grid">
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

        <article className="card">
          <div className="card-header">
            <div>
              <h3>Discord</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" checked />
              <span></span>
            </label>
          </div>
          <div className="card-body">
            <p>Keep in touch with your customers without leaving the app.</p>
          </div>
          <div className="card-footer">
            <Link to="#">View integration</Link>
          </div>
        </article>
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Google Drive</h3>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span></span>
            </label>
          </div>
          <div className="card-body">
            <p>
              Link your Google account to share files across your entire team.
            </p>
          </div>
          <div className="card-footer">
            <Link to="#">View integration</Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Dashboard;
