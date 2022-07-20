import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="content-panel">
      <div className="vertical-tabs">
        <Link to="#" className="active">
          Dashboard
        </Link>
        <Link to="#">Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
