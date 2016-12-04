import React, { Component, PropTypes } from 'react';
import Alert from '../Alert';
import Navbar from '../Navbar';
import PatientList from '../PatientList';
import Menu from '../Menu';
import PatientSummary from '../PatientSummary';

class PatientPortal extends Component {
  constructor () {
    super();
    this.state={
      showMenu: false,
      fullListView: true,
      patientSummaryView: false,
      patientChosen: 0
    };
    this.navBarClickHandler = this.navBarClickHandler.bind(this);
    this.fullListClickHandler = this.fullListClickHandler.bind(this);
    this.nurseRecommendedClickHandler = this.nurseRecommendedClickHandler.bind(this);
    this.patientSummaryOpen = this.patientSummaryOpen.bind(this);
    this.patientSummaryClose = this.patientSummaryClose.bind(this);
    this.renderPortalView = this.renderPortalView.bind(this);
}

alerts () {
   if (!this.props.ui.alertMessage) return;

   return <Alert message={this.props.ui.alertMessage}
                 sendAlert={this.props.actions.sendAlert} />;
 }

navBarClickHandler(event){
  event.preventDefault();
  this.setState({showMenu: !this.state.showMenu});
}

fullListClickHandler(event){
  event.preventDefault();
  this.setState({
    fullListView: true,
    showMenu: false,
    patientSummaryView: false
  });
}

nurseRecommendedClickHandler(event){
  event.preventDefault();
  this.setState({
    fullListView: false,
    showMenu: false,
    patientSummaryView: false
  });
}

patientSummaryOpen(patientID){
  this.setState({
    patientChosen: patientID,
    patientSummaryView: true
  });
}

patientSummaryClose(event){
  this.setState({
    patientChosen: 0,
    patientSummaryView: false
  })
}

getChosenPatient(){
  let patient = this.props.patientList.find((patient)=>{
    return (patient.pid === this.state.patientChosen);
  });
  return patient;
}

renderPortalView(){
  if(this.state.showMenu){
    return <Menu handleFullListClick={this.fullListClickHandler}
                handleNurseClick={this.nurseRecommendedClickHandler} userInfo={this.props.userInfo}/>;
  }
  else if(this.state.patientSummaryView){
    return <PatientSummary closePatientSummary={this.patientSummaryClose}
              chosenPatient={this.getChosenPatient()}
              actions={this.props.actions}
              ui={this.props.ui}
              userInfo={this.props.userInfo}/>;
  }
  return <PatientList {...this.props} fullView={this.state.fullListView}
            openPatientSummary={this.patientSummaryOpen}/>;
}

  render () {
    console.log(this.props, "PatientPortal");
    return (
      <div className="PatientPortal">
        <Navbar actions={this.props.actions}
          handleNavBarClick = {this.navBarClickHandler}
          showMenu={this.state.showMenu}/>
        {this.renderPortalView()}
      </div>
    );
  }
}

PatientPortal.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default PatientPortal;
