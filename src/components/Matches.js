import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

class Matches extends React.Component {
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/paws" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      <div class="ui centered grid">
        <div class="six wide tablet eight wide computer column">
          <div className="ui raised card">
            <div className="content">
              <div className="header">Red Cat</div>
              <div className="meta">
                <span className="right floated time">2 days ago</span>
                <span className="category">Paw</span>
              </div>
              <div className="description">
                <p>nette Katze gefunden</p>
              </div>
            </div>
            <div className="image">
              <img src="/images/red_cat.jpg" />
            </div>

            <div className="extra content">
              Location:
              <p>München</p>
            </div>
            <div className="extra content">
              <div className="right floated author">
                <img
                  className="ui avatar image"
                  src="https://semantic-ui.com/images/avatar/small/jenny.jpg"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="six wide tablet eight wide computer column">
          <div>
            <div className="ui raised segment">
              <h1 className="ui green ribbon label">Contact</h1>
              <span></span>
              <h3 className="ui header">Adresse</h3>
              <div>Grünwalder Straße 7. 81547 München</div>
              <h3 className="ui header">Name</h3>
              <div>Familie Wolf</div>
              <h3 className="ui header">Nummer</h3>
              <div>01744445555</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    //console.log('delete props', this.props);
    return (
      <Modal
        title="Match"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => this.props.history.push("/paws")}
      />
    );
  }
}

export default Matches;
