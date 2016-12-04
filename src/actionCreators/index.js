import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const sendAlert = (payload) => {
  return { type: actionTypes.SEND_ALERT, payload };
};

const getPatientDetail = (payload) => {
  return (dispatch) => {
    userService.getPatientDetail(payload).then((response)=>{
      dispatch({type: actionTypes.GET_PATIENT_DETAIL, payload: response})
    });
  };
};

const getMessages = (payload) => {
  return (dispatch) => {
    userService.getMessages(payload).then((response)=>{
      dispatch({type: actionTypes.GET_MESSAGES, payload: response})
    });
  };
};

const sendMessage = (payload) => {
  return (dispatch) => {
    userService.sendMessage(payload).then((response)=>{
      dispatch({type: actionTypes.SEND_MESSAGE, payload})
    });
  };
};

const actionCreators = {
  sendAlert,
  getPatientDetail,
  getMessages,
  sendMessage
};

export { actionCreators };
