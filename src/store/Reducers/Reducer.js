import { ADD_STUDENT, ADD_PROFILE } from "../Actiontypes/Actiontype";
export const studentdata = (state = "no", action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return action.payload.state;
    default:
      return state;
  }
};
export const profilehandler = (state = "", action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return action.payload.state;
    default:
      return state;
  }
};
