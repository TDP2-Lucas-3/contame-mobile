import {SAVE_USER_DATA} from '../actions/user';

export const userReducer = (state, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      const {payload} = action;
      return {
        ...state,
        firstName: payload.name,
        lastName: payload.surname,
        photo: payload.photo,
        email: payload.email,
      };
    default:
      return state || {};
  }
};
