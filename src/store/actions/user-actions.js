import {
  GET_BY_ID,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../Types/users-type";

export const addUserAction = (newUser) => {
  return { type: ADD_USER, payload: newUser };
};
