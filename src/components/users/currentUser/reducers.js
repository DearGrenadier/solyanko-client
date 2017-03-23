import {
  FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAILURE, SET_CURRENT_USER, CLEANUP_CURRENT_USER
} from './constants';

const initialState = {
  loading: false,
  data: null,
  errors: {}
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_CURRENT_USER:
    return { ...state, loading: true };
  case FETCH_CURRENT_USER_SUCCESS:
    return { ...state, data: action.user, loading: false };
  case FETCH_CURRENT_USER_FAILURE:
    return { ...state, loading: false, errors: action.errors };
  case SET_CURRENT_USER:
    return { ...state, data: action.user };
  case CLEANUP_CURRENT_USER:
    return { ...state, data: null };
  default:
    return state;
  }
};

export default currentUserReducer;
