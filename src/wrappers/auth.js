import { UserAuthWrapper } from 'redux-auth-wrapper';
import { routerActions } from 'react-router-redux';

export const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.currentUser,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export const VisibleOnlyAuthenticated = UserAuthWrapper({
  authSelector: state => state.currentUser,
  wrapperDisplayName: 'VisibleOnlyAuthenticated',
  predicate: user => user.data !== null && user.loading === false,
  FailureComponent: null
});

export const VisibleOnlyNotAuthenticated = UserAuthWrapper({
  authSelector: state => state.currentUser,
  wrapperDisplayName: 'VisibleOnlyNotAuthenticated',
  predicate: user => user.data === null && user.loading === false,
  FailureComponent: null
});
