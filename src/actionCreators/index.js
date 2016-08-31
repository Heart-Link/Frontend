import * as actionTypes from '../actionTypes';

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
  sendAlert,
  setRightSide,
  setLeftSide
};

export { actionCreators };
