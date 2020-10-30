import {SAVE_USER_DATA} from '../actions/user';

export const userReducer = (state, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      const {payload} = action;
      return {
        ...state,
        ...payload,
        firstName: payload.name,
        lastName: payload.surname,
        photo: payload.photo,
      };
    default:
      return state || {};
  }
};
