import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Header = ({ isLoggedIn, onLogoutClick }) => {
  return (
    <header className="bs-component header navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/">Brightech</Link>
        {isLoggedIn ? (
          <button
            className="btn btn-outline-dark ml-auto"
            onClick={onLogoutClick}
          >
            Выйти
          </button>
        ) : (
          <Link to="/login/" className="ml-auto">
            Страница авторизации
          </Link>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = ({ login: { isLoggedIn } }) => {
  return { isLoggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { history } = ownProps;
  return {
    onLogoutClick: () => {
      dispatch({
        type: "USER_LOGOUT"
      });
      history.push("/");
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
