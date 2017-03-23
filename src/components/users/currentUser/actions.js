import request from 'utils/request';
import Api from 'utils/api';

import {
  FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS, FETCH_CURRENT_USER_FAILURE, SET_CURRENT_USER, CLEANUP_CURRENT_USER
} from './constants';
const fetchCurrentUserRequest = () => ({ type: FETCH_CURRENT_USER });
const fetchCurrentSuccess = (user) => ({ type: FETCH_CURRENT_USER_SUCCESS, user: user });
const fetchCurrentUserFailure = (errors) => ({ type: FETCH_CURRENT_USER_FAILURE, errors: errors });

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(fetchCurrentUserRequest());
    return request.get(Api.users.currentUser).then(response => {
      dispatch(fetchCurrentSuccess(response.data));
    }).catch(response => {
      dispatch(fetchCurrentUserFailure(response.response.data));
    });
  };
};

export const setCurrentUser = (user) => ({ type: SET_CURRENT_USER, user: user });
export const cleanupCurrentUser = () => ({ type: CLEANUP_CURRENT_USER });
