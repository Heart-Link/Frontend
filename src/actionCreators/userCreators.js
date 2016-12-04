import * as loginTypes from '../actionTypes/userTypes';
import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const login = (payload) => {
  return (dispatch) => {
    userService.login(payload).then((response) => {
      if (response.success === false) {
        dispatch({
          type: actionTypes.SEND_ALERT,
          payload: { message: 'Incorrect login information. Please try again' }
        });
        return;
      }
      dispatch({ type: loginTypes.LOGIN_SUCCESS, payload: response });

      userService.getPatientList({
        id: response.data.providerid,
        doc: response.data.isdoctor,
        token: response.data.token
      }).then((patientListResponse) => {
        dispatch({ type: actionTypes.GET_PATIENT_LIST, payload: patientListResponse});
        payload.success();
      }).catch ((error) => {
        console.log(error, "ERROR");
      });
    }).catch((error) => {
      console.log(error, "ERROR");
      dispatch({
        type: actionTypes.SEND_ALERT,
        payload: { message: 'Incorrect login information. Please try again.' }
      });
    });
  };
};

const actionCreators = {
  login
};

export { actionCreators };
