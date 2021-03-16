import { combineReducers } from "redux";
import bills from "./../Services/Bills/bills.reducer";
import users from "./../Services/Users/users.reducer";
import loading from "./../Services/Global/loading.reducer";

const makeRootReducer = () => {
  return combineReducers({
    bills,
    users,
    loading
  });
};

export default makeRootReducer;
