import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const Search = ({ searchTerm, setSearchTerm, history, resetSearchTerm }) => {
  resetSearchTerm(searchTerm, history);
  return (
    <input
      type="text"
      className="form-control"
      onChange={e => setSearchTerm(e.target.value)}
      value={searchTerm}
      placeholder="Поиск"
    />
  );
};

const mapStateToProps = ({ search: { searchTerm } }) => {
  return { searchTerm };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchTerm: term => {
      dispatch({ type: "SET_SEARCH_TERM", payload: term });
    },
    resetSearchTerm: (searchItem, history) => {
      if (searchItem.length > 0) {
        history.listen(() => dispatch({ type: "RESET_SEARCH_TERM" }));
      }
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
