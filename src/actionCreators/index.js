import * as actionTypes from '../actionTypes';

const setRightSide = (payload) => {
  return { type: actionTypes.SET_RIGHT_SIDE, payload };
};

const actionCreators = {
  setRightSide
};

export { actionCreators };
