import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as LoginCreators } from '../actionCreators/loginCreator';

import Login from '../components/login/Login';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...LoginCreators
    }, dispatch)
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
