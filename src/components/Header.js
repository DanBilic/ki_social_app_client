import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends React.Component {
  renderLogin() {
    console.log("auth button:", this.props.auth);
    switch (this.props.auth) {
      case null:
        return "";
      case false:
        return (
          <a href="/api/v1/auth/google" className="ui small red google button">
            <i className="google icon" />
            Login
          </a>
        );
      default:
        return [
          <a
            key="1"
            href="/api/v1/auth/logout"
            className="ui small red google button"
          >
            <i className="google icon" />
            Logout
          </a>,
        ];
    }
  }
  render() {
    console.log("Header this.props.auth:", this.props.auth);
    return (
      <div className="ui secondary pointing menu" style={{ marginTop: "5px" }}>
        <Link to={this.props.auth ? "/paws" : "/"} className="item active">
          PawSearch
        </Link>
        <div className="right menu">
          <div>{this.renderLogin()}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("auth :", this.state);
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(Header);
