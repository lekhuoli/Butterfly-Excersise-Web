import React from "react";
import { Link } from "react-router-dom";
import { CommentContextApi } from "../context/commentContextApi";
import { API } from "../utils/api";
function DashboardNav() {
  const commentContext = React.useContext(CommentContextApi);
  const { setComments } = commentContext;
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const handleSearch = async (query) => {
      try {
        const result = await API.post(`/api/comments/search/${query}`);
        const { data } = result;
        console.log("inside", data);
        setComments(data);
      } catch (error) {
        if (error.response) {
          alert(error.response.error);
        }
        console.log(error);
      }
    };
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <header className="header">
      <div className="header-content responsive-wrapper">
        <div className="header-logo">
          <a href="/">
            <h2 className="dash-header">Butterfly AI</h2>
          </a>
        </div>
        <div className="header-navigation">
          <nav className="header-navigation-links">
            {/* <Link to="#"> Home </Link> */}
          </nav>
          <div className="header-navigation-actions">
            <div className="search">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <button type="submit">
                <i className="ph-magnifying-glass-bold"></i>
              </button> */}
            </div>

            {/* <Link to="#"> Admin </Link> */}
          </div>
        </div>
        <Link to="#" className="button">
          <i className="ph-list-bold"></i>
          <span>Menu</span>
        </Link>
      </div>
    </header>
  );
}

export default DashboardNav;
