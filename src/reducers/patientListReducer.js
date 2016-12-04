import * as actionTypes from '../actionTypes';

const patientListReducer = (state = [], action) => {
  switch(action.type){

    case actionTypes.GET_PATIENT_LIST:
      return action.payload.data;

    default:
      return state;
  }
}

export {patientListReducer};
