import users from "./users";
import drivers from "./drivers";

export default class BrightechService {
  getDrivers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(drivers);
      }, 700);
    });
  }
  getUsers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(users);
      }, 1200);
    });
  }
}
