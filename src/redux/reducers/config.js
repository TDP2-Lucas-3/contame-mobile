import {SAVE_CONFIG} from '../actions/config';

const configReducer = (state, action) => {
  switch (action.type) {
    case SAVE_CONFIG:
      return {...state, ...action.payload};
    default:
      return state || {token: null, firstLogin: false};
  }
};

export default configReducer;
