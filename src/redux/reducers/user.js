import {SAVE_USER_DATA} from '../actions/user';

export const userReducer = (state, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {...state, ...action.payload};
    default:
      return state || {};
  }
};
