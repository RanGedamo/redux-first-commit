import {GET_BY_ID,ADD_USER,UPDATE_USER,DELETE_USER} from "../Types/users-type";

export const userReducer = ({users}, action) => {
  switch (action.type) {
    // case GET_BY_ID:
    //   return action.payload;

    case ADD_USER:
      return {users:[...users, action.payload]}

    // case UPDATE_USER:
    //   return action.payload;

    // case DELETE_USER:
    //   return action.payload;

    default:
      return {users};
  }
};
