import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import pawsReducer from "./pawsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  paws: pawsReducer,
});
