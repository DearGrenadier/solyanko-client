import { actions } from 'react-redux-form';

import request from 'utils/request';
import Api from 'utils/api';
import { setCurrentUser } from 'components/users/currentUser/actions';

const registerUser = (user) => {
  return (dispatch) => {
    return dispatch(actions.submit('forms.signUp', new Promise((resolve, reject) => {
      dispatch(actions.setPending('forms.signUp'));
      return request.post(Api.users.signUp, user)
        .then(response => {
          dispatch(setCurrentUser(response.data.data));
          resolve(response.data);
        }).catch(error => reject(error.response.data.errors));
    })));
  };
};

export default registerUser;
