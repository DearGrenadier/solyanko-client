import request from 'utils/request';
import Api from 'utils/api';

import { cleanupCurrentUser } from 'components/users/currentUser/actions';

const logoutUser = () => {
  return (dispatch) => {
    return request.delete(Api.users.signOut).then(response => {
      localStorage.removeItem('auth');
      dispatch(cleanupCurrentUser());
    }).catch(error => {
    });
  };
};

export default logoutUser;

