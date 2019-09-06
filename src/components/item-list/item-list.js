import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { withBrightechService } from "../hoc";
import { connect } from "react-redux";
class ItemList extends Component {
  componentDidMount() {
    this.props.usersRequested();
    this.props.fetchUsers();
  }

  renderItems = users => {
    return users.map(user => {
      return (
        <li className="list-group-item" key={user.id}>
          {this.props.children(user)}
        </li>
      );
    });
  };

  render() {
    const { users, loading, isError } = this.props;
    if (isError) return <ErrorIndicator />;
    if (loading) return <Spinner />;
    return <ul className="list-group">{this.renderItems(users)}</ul>;
  }
}

const searchFilter = (users, searchTerm) => {
  return (
    users &&
    users.filter(item => {
      return item.sirname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    })
  );
};

const mapStateToProps = ({
  users: { users, loading, isError },
  search: { searchTerm }
}) => {
  return { users: searchFilter(users, searchTerm), loading, isError };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { getData } = ownProps;
  return {
    fetchUsers: () => {
      getData()
        .then(data => {
          dispatch({
            type: "FETCH_USERS_LOADED",
            payload: data
          });
        })
        .catch(() => {
          dispatch({
            type: "FETCH_USERS_ERROR"
          });
        });
    },
    usersRequested: () => {
      dispatch({
        type: "FETCH_USERS_REQUESTED"
      });
    }
  };
};

export default withBrightechService(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemList)
);
