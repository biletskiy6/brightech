import { combineReducers } from "redux";
import users from "./users";
import login from "./login";
import search from "./search";
export default combineReducers({
  users,
  login,
  search
});
