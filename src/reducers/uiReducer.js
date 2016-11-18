import * as actionTypes from '../actionTypes';

const uiReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SET_LEFT_SIDE:
      return Object.assign({}, state, {
        leftSideComponent: action.payload.component,
        leftSideData: action.payload.data
      });

    case actionTypes.SET_RIGHT_SIDE:
      return Object.assign({}, state, {
        rightSideComponent: action.payload.component,
        rightSideData: action.payload.data
      });

    case actionTypes.SEND_ALERT:
      return Object.assign({}, state, {
        alertMessage: action.payload.message
      });

    case actionTypes.GET_PATIENT_DETAIL:
      return Object.assign({}, state, {
        leftSideData: action.payload.data
      });

    case actionTypes.SHOW_FLAGGED:
      return Object.assign({}, state, {
        showFlagged: !state.showFlagged
      });

    case actionTypes.GET_MESSAGES:
      return Object.assign({}, state, {
        messageList: action.payload.data
      });

    case actionTypes.SEND_MESSAGE:
      const newMessagePayload = {
        convoid: action.payload.messenger,
        message: action.payload.message,
        messengerid: action.payload.messenger,
      };

      let currMessageList = state.messageList;
      currMessageList.push(newMessagePayload);

      return Object.assign({}, state, {
        messageList: currMessageList
      });

    default:
      return state;
  }
};

export { uiReducer };
