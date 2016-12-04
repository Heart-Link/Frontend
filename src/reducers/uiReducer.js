import * as actionTypes from '../actionTypes';

const uiReducer = (state = {}, action) => {
  switch (action.type) {

    case actionTypes.SEND_ALERT:
      return Object.assign({}, state, {
        alertMessage: action.payload.message
      });

      case actionTypes.GET_PATIENT_DETAIL:
        return Object.assign({}, state, {
          detailData: action.payload.data
        });

      case actionTypes.GET_MESSAGES:
        return Object.assign({},state,{
          messages: action.payload.data
        });

      case actionTypes.SEND_MESSAGE:
        const newPayload = {
          convoid: action.payload.messenger,
          message: action.payload.message,
          messengerid: action.payload.messenger
        };

        let currMessageList = state.messages;
        currMessageList.push(newPayload);

        return Object.assign({}, state, {
          messages: currMessageList
        });

    default:
      return state;
  }
};

export { uiReducer };
