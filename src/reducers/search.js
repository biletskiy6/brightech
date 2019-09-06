const initialState = {
  searchTerm: ""
};

const Search = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return {
        searchTerm: action.payload
      };
    case "RESET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: ""
      };
    default:
      return state;
  }
};

export default Search;
