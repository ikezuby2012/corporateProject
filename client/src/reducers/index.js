import { combineReducers } from "redux";
import authReducer from "./authReducers";
import orgReducer from "./orgReducer";
import updateOrgReducer from "./updateOrgReducer";

export default combineReducers({
    user: authReducer,
    org: orgReducer,
    updateOrg: updateOrgReducer
});