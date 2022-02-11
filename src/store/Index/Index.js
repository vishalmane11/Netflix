import { combineReducers } from "redux";
import { studentdata } from "../Reducers/Reducer";
import { profilehandler } from "../Reducers/Reducer";
export const combine = combineReducers({
  student: studentdata,
  profile: profilehandler,
});
