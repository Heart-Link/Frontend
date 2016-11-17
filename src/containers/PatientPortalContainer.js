import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actionCreators as UiCreators } from '../actionCreators';

import PatientPortal from '../components/patientPortal/PatientPortal';

const mapStateToProps = (state) => {
  return {
    patientList: state.patientListReducer,
    userInfo: state.userInfoReducer,
    ui: state.uiReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...UiCreators
    }, dispatch)
  };
};

const PatientPortalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientPortal);

export default PatientPortalContainer;
