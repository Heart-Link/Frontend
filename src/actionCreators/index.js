import * as actionTypes from '../actionTypes';
import UserService from '../services/UserService';

const userService = new UserService();

const createAccount = (payload) => {
  return (dispatch) => {
    userService.createPatient(payload);
    dispatch({ type: actionTypes.CREATE_ACCOUNT, payload });
  }
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

const actionCreators = {
  createAccount,
  sendAlert,
  setRightSide,
  setLeftSide
};

export { actionCreators };
