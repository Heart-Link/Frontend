import * as actionTypes from '../actionTypes';

const patientListReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_PATIENT_LIST:
      return action.payload.data;

    case actionTypes.CREATE_ACCOUNT:
      const createPatientPayload = {
        firstName: action.payload.data.firstname,
        lastName: action.payload.data.lastname,
        pid: action.payload.data.emrid,
        provider: action.payload.data.providerid,
        sex: action.payload.data.gender,
        dob: action.payload.data.dob,
        lastInput: {
          alcoholIntake: '--',
          averageHR: '--',
          bpHigh: '--',
          bpLow: '--',
          entryInfo: '--',
          exerciseTime: '--',
          smoke: '--',
          steps: '--',
          stressLevel: '--',
          weight: '--'
        },
        message: null
      };

      const currPatientList = state;
      return Object.assign([], state, {
        patientList: currPatientList.push(createPatientPayload)
      });

    default: 
      return state;
  }
};

export { patientListReducer };
