import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createPaw } from "../../actions";

const PawFormReview = (props) => {
  //console.log('formValues: ', props.formValues);
  return (
    <div>
      <div className="ui raised segment">
        <h1 className="ui green ribbon label">Review your paw :D</h1>
        <span></span>
        <h3 className="ui header">Paw Title</h3>
        <div>{props.formValues.title}</div>
        <h3 className="ui header">Paw ingredients</h3>
        <div>{props.formValues.ingredients}</div>
        <h3 className="ui header">Paw description</h3>
        <div>{props.formValues.description}</div>
      </div>
      <button
        onClick={props.onCancelReview}
        className="ui labeled icon button orange"
      >
        <i className="left arrow icon"></i>
        Back
      </button>
      <button
        onClick={() => props.createPaw(props.formValues, props.history)}
        className="ui right labeled icon button green right floated"
      >
        <i className="check icon"></i>
        Finish
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log(state);
  return { formValues: state.form.pawForm.values };
}

export default connect(mapStateToProps, { createPaw })(
  withRouter(PawFormReview)
);
