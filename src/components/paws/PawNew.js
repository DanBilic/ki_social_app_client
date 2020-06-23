import React from "react";
import { reduxForm } from "redux-form";
import PawForm from "./PawForm";
import PawFormReview from "./PawFormReview";

class PawNew extends React.Component {
  state = { showPawFormReview: false };

  renderContent() {
    if (this.state.showPawFormReview) {
      return (
        <PawFormReview
          onCancelReview={() => this.setState({ showPawFormReview: false })}
        />
      );
    }

    return (
      <PawForm
        onPawFormSubmit={() => this.setState({ showPawFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "recipeForm",
})(PawNew);
