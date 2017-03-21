import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const TEST = 'TEST';

const testReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST:
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  testReducer: testReducer,
  routing: routerReducer
});

export default rootReducer;
