import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import FormErrors from "../form-errors";
import "./login-form.scss";
class LoginForm extends Component {
  state = {
    email: "",
    password: "",
    formErrors: { email: "", password: "" },
    emailValid: false,
    passwordValid: false,
    formValid: false
  };
  onFormSubmit = e => {
    e.preventDefault();
    const { formValid } = this.state;
    return formValid ? this.props.successSubmit() : null;
  };
  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        fieldValidationErrors.email = emailValid
          ? ""
          : "Email введён некорректно";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Длина пароля должна не менее чем 5 символов";
        break;
      default:
        return false;
    }
    this.setState(
      {
        emailValid,
        passwordValid
      },
      this.validateForm
    );
  }
  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }
  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  render() {
    const { password, email } = this.props;

    return (
      <div className="login-form">
        <div className="container">
          <h4>Страница авторизации</h4>
          <FormErrors formErrors={this.state.formErrors} />
          <form onSubmit={this.onFormSubmit}>
            <input
              type="email"
              name="email"
              className={`form-control ${this.errorClass(
                this.state.formErrors.email
              )}`}
              onChange={this.onHandleChange}
              value={email}
              placeholder="E-mail"
            />
            <input
              type="password"
              name="password"
              className={`form-control ${this.errorClass(
                this.state.formErrors.password
              )}`}
              onChange={this.onHandleChange}
              placeholder="Пароль"
              value={password}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!this.state.formValid}
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ login: { isLoggedIn } }) => {
  return { isLoggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    successSubmit: () => {
      const { history } = ownProps;
      dispatch({ type: "USER_LOGGED_IN" });
      history.push("/users/");
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
