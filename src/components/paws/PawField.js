import React from "react";

class PawField extends React.Component {
  renderContent() {
    if (this.props.meta.touched && this.props.meta.error) {
      return (
        <div className="ui pointing red basic label">
          {this.props.meta.error}
        </div>
      );
    }
    return <div></div>;
  }
  render() {
    //das ganze input objekt an das input Tag als props übergeben
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <input {...this.props.input} />
        {this.renderContent()}
      </div>
    );
  }
}

export default PawField;
