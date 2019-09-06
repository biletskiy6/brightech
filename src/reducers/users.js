const initialState = {
  users: null,
  isError: false,
  loading: true
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUESTED":
      return {
        users: [],
        isError: false,
        loading: true
      };
    case "FETCH_USERS_LOADED":
      return { users: action.payload, loading: false, isError: false };
    case "FETCH_USERS_ERROR":
      return {
        users: [],
        loading: false,
        isError: true
      };
    default:
      return state;
  }
};
export default users;
