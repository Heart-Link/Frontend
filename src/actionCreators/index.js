import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const createAccount = (payload) => {
  return (dispatch) => {
    userService.createPatient(payload);
    dispatch({ type: actionTypes.CREATE_ACCOUNT, payload });
  }
};

const getPatientDetail = (payload) => {
  return (dispatch) => {
    userService.getPatientDetail(payload).then((response) => {
      dispatch({ type: actionTypes.GET_PATIENT_DETAIL, payload: response })
    });
  };
};

const sendAlert = (payload) => {
  return { type: actionTypes.SEND_ALERT, payload };
};

const setRightSide = (payload) => {
  return { type: actionTypes.SET_RIGHT_SIDE, payload };
};

const setLeftSide = (payload) => {
  return { type: actionTypes.SET_LEFT_SIDE, payload };
};

const toggleFlag = (payload) => {
  return (dispatch) => {
    userService.toggleFlag(payload).then((response) => {
      dispatch({ type: actionTypes.TOGGLE_FLAG, payload })
    })
  }
}

const showFlagged = (payload) => {
  return { type: actionTypes.SHOW_FLAGGED, payload };
}

const sendMessage = (payload) => {
  return (dispatch) => {
    userService.sendMessage(payload).then((response) => {
      dispatch({ type: actionTypes.SEND_MESSAGE, payload })
    })
  }
}

const getMessages = (payload) => {
  return (dispatch) => {
    userService.getMessages(payload).then((response) => {
      dispatch({ type: actionTypes.GET_MESSAGES, payload: response })
    })
  }
}

const actionCreators = {
  createAccount,
  getPatientDetail,
  sendAlert,
  setRightSide,
  setLeftSide,
  toggleFlag,
  showFlagged,
  sendMessage,
  getMessages,
};

export { actionCreators };
