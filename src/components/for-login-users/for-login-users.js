import React from "react";

import Aside from "../aside";
import Main from "../main";
import Search from "../search";
import { connect } from "react-redux";

import "./for-login-users.scss";

const ForLoginUsers = ({ isLoggedIn }) => {
  if (!isLoggedIn) return null;
  return (
    <div className="for-login-users">
      <div className="container">
        <Search />
        <div className="row">
          <Aside />
          <Main />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ login: { isLoggedIn } }) => {
  return { isLoggedIn };
};

export default connect(mapStateToProps)(ForLoginUsers);
