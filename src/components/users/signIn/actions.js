import { actions } from 'react-redux-form';

import request from 'utils/request';
import Api from 'utils/api';
import { setCurrentUser } from 'components/users/currentUser/actions';

const loginUser = (user) => {
  return (dispatch) => {
    return dispatch(actions.submit('forms.signIn', new Promise((resolve, reject) => {
      dispatch(actions.setPending('forms.signIn'));
      return request.post(Api.users.signIn, user)
        .then(response => {
          dispatch(setCurrentUser(response.data.data));
          resolve(response.data);
        }).catch(error => {
          reject(error.response.data.errors);
          throw error;
        });
    })));
  };
};

export default loginUser;

