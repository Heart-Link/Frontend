import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as UserCreators } from '../actionCreators/userCreators';
import { actionCreators as UiCreators } from '../actionCreators';


import Login from '../components/login/Login';

const mapStateToProps = (state) => {
  return {
    patientList: state.patientListReducer,
    userInfo: state.userInfoReducer,
    ui: state.uiReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...UserCreators,
      ...UiCreators
    }, dispatch)
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
