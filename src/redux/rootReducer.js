import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import uiReducer from "./reducers/uiReducer";




const rootReducer = combineReducers({
    users : userReducer,
    ui: uiReducer

});
  
export default rootReducer;