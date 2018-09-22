import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const classNames = `form-control ${touched && error ? "is-invalid" : ""}`;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className={classNames} type="text" {...field.input} />
        <div className="invalid-feedback">{touched ? error : ""}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field label="Content" name="content" component={this.renderField} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          <Link className="btn btn-danger" to="/">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  //validate the form with 'values'
  if (!values.title) {
    errors.title = "Enter a title";
  } else if (values.title.length < 3) {
    errors.title = "Title must contains at least 3 characters";
  }
  if (!values.categories) {
    errors.categories = "Enter categories";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  //if errors is empty, the form is fine to submit
  //if errors has any properties, redux form assumes the form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
