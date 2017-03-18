import { combineReducers } from 'redux';

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
  testReducer: testReducer
});

export default rootReducer;