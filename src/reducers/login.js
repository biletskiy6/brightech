const initialState = {
  isLoggedIn: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        isLoggedIn: true
      };
    case "USER_LOGOUT":
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
};
export default login;
