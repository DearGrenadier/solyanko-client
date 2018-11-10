import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import { routerReducer } from 'react-router-redux';

import userRegistrationReducer from 'components/users/reducers';
import currentUserReducer from 'components/users/currentUser/reducers';
import { userForms } from 'components/users/reducers';

const rootReducer = combineReducers({
  routing: routerReducer,
  currentUser: currentUserReducer,
  forms: combineForms(userForms, 'forms')
});

export default rootReducer;
