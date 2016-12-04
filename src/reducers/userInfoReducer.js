import * as actionTypes from '../actionTypes/userTypes';

const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        userName: action.payload.data.firstname,
        jwt: action.payload.data.token,
        providerID: action.payload.data.providerid,
        isAuthorized: true,
        isDoctor: action.payload.data.isdoctor,
      });

    default:
      return state;
  }
};

export { userInfoReducer };
