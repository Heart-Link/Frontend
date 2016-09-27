import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { patientListReducer } from './patientListReducer';

const reducer = combineReducers({
  patientListReducer,
  uiReducer
});

export { reducer };
