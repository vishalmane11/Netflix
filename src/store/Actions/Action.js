import { ADD_STUDENT, ADD_PROFILE } from "../Actiontypes/Actiontype";
export const studentaction = (info) => ({
  type: ADD_STUDENT,
  payload: { state: info },
});
export const profileaction = (data) => ({
  type: ADD_PROFILE,
  payload: { state: data },
});
