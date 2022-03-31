import { combineReducers } from "redux"
import loginReducer from "./loginReducer";
import usernameReducer from "./usernameReducer";

const rootReducer = combineReducers({
    loginStatus : loginReducer,
    userName : usernameReducer
});

export default rootReducer;