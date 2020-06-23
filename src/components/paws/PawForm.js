import _ from "lodash";
import React from "react";
import { reduxForm, Field } from "redux-form";
import PawField from "./PawField";
import { Link } from "react-router-dom";

const FIELDS = [
  { label: "Paw Name", name: "title" },
  { label: "Paw Location", name: "ingredients" },
  { label: "Paw Description", name: "description" },
];

class PawForm extends React.Component {
  renderFormFields() {
    return _.map(FIELDS, (field) => {
      return (
        <Field
          key={field.name}
          component={PawField}
          type="text"
          label={field.label}
          name={field.name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form
          className="ui fluid form"
          onSubmit={this.props.handleSubmit((values) => {
            console.log(values);
            this.props.onPawFormSubmit();
          })}
        >
          {this.renderFormFields()}
          <Link to="/paws" className="negative ui right labeled icon button ">
            <i className="right close icon"></i>
            Cancel
          </Link>
          <button className="ui right labeled icon button blue right floated">
            <i className="right arrow icon"></i>
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }

  if (!values.ingredients) {
    errors.ingredients = "You must provide ingredients";
  }

  if (!values.description) {
    errors.description = "You must provide a description";
  }

  return errors;
}

//destroyOnUnmount: true -> zerstört die daten der reduxForm im store wenn die Komponente nicht mehr angezeigt wird. -> damit dies nicht passiert auf false seutzen und die werte bleiben erhalten
export default reduxForm({
  validate: validate,
  form: "pawForm",
  destroyOnUnmount: false,
})(PawForm);
