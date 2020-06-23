import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../actions/";

/*
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
*/

import Header from "./Header";
import history from "../history";

import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import PawNew from "./paws/PawNew";
import Matches from "./Matches";

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={LandingPage} />
            <Route path="/paws" exact component={Dashboard} />
            <Route path="/paws/new" exact component={PawNew} />
            <Route path="/matches" exact component={Matches} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);

/*
class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/show" exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}*/
