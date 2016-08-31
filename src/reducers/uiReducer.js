import * as actionTypes from '../actionTypes';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_RIGHT_SIDE:
      return Object.assign({}, state, {
        rightSide: true
      });

    default:
      return state;
  }
};

export { uiReducer };
