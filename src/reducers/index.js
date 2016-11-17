import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { userInfoReducer } from './userInfoReducer';
import { patientListReducer } from './patientListReducer';

const reducer = combineReducers({
  patientListReducer,
  userInfoReducer,
  uiReducer,
});

export { reducer };
