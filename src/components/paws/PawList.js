import React from "react";
import { connect } from "react-redux";
import { fetchPaws } from "../../actions";

class PawList extends React.Component {
  componentDidMount() {
    this.props.fetchPaws();
  }

  renderContent() {
    return this.props.paws.map((paw) => {
      return (
        <div className="ui raised card" key={paw._id}>
          <div className="content">
            <div className="header">{paw.title}</div>
            <div className="meta">
              <span className="right floated time">2 days ago</span>
              <span className="category">Paw</span>
            </div>
            <div className="description">
              <p>{paw.description}</p>
            </div>
          </div>
          <div className="image">
            <img src="/images/red_cat.jpg" />
          </div>

          <div className="extra content">
            Location:
            <p>{paw.ingredients}</p>
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
      );
    });
  }
  render() {
    console.log("paws:", this.props.paws);
    return <div className="ui three cards">{this.renderContent()}</div>;
  }
}

function mapStateToProps(state) {
  return { paws: state.paws };
}

export default connect(mapStateToProps, { fetchPaws })(PawList);
