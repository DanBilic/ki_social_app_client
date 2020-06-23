import React from "react";
import { Link } from "react-router-dom";
import PawList from "./paws/PawList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PawList />
        <Link
          style={{ marginTop: "25px" }}
          to="/paws/new"
          className="ui circular red right floated icon big button"
        >
          <i className="plus icon"></i>
        </Link>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="ui compact menu">
            <Link to="/matches" className="item">
              <i className="icon heart"></i> Matches
              <div className="floating ui red circular label">1</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

/*
class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <RecipeList />
        <Link
          style={{ marginTop: "15px" }}
          to="/recipes/new"
          className="ui circular red right floated icon big button"
        >
          <i className="plus icon"></i>
        </Link>
      </div>
    );
  }
}
*/
/*
<Link
          style={{
            marginTop: "15px",
            display: "flex",
            justifyContent: "center",
          }}
          to="/paws/new"
          className="ui circular red icon big button"
        >
          <i className="plus icon"></i>
        </Link>
*/
