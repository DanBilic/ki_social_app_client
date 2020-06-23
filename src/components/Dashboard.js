import React from "react";
import { Link } from "react-router-dom";
import PawList from "./paws/PawList";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <PawList />
        <Link
          style={{ marginTop: "15px" }}
          to="/paws/new"
          className="ui circular red right floated icon big button"
        >
          <i className="plus icon"></i>
        </Link>
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
