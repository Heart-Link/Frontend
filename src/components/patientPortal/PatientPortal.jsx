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
      patientsList: [
        {id: 1, firstname: 'John', lastname: 'Doe', status: 1, nurseFlag: false},
        {id: 2, firstname: 'Bob', lastname: 'Marley', status: 3, nurseFlag: true},
        {id: 3, firstname: 'Zack', lastname: 'Shackleton', status: 2, nurseFlag: true},
        {id: 4, firstname: 'Max', lastname: 'Pickering', status: 1, nurseFlag: false},
        {id: 5, firstname: 'Victoria', lastname: 'Rivas', status: 3, nurseFlag: true},
        {id: 6, firstname: 'Mary', lastname: 'Sunshine', status: 1, nurseFlag: false},
        {id: 7, firstname: 'Sagar', lastname: 'Mistry', status: 2, nurseFlag: true},
        {id: 8, firstname: 'Kyle', lastname: 'Smith', status: 1, nurseFlag: false},
        {id: 9, firstname: 'Victor', lastname: 'Sanchez', status: 3, nurseFlag: true}
      ],
      patientChosen: 0
    };
    this.navBarClickHandler = this.navBarClickHandler.bind(this);
    this.fullListClickHandler = this.fullListClickHandler.bind(this);
    this.nurseRecommendedClickHandler = this.nurseRecommendedClickHandler.bind(this);
    this.patientSummaryOpen = this.patientSummaryOpen.bind(this);
    this.patientSummaryClose = this.patientSummaryClose.bind(this);
    this.renderPortalView = this.renderPortalView.bind(this);
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
    patientSummaryView: true,
    patientChosen: patientID
  });
}

patientSummaryClose(event){
  this.setState({
    patientSummaryView: false,
    patientChosen: 0
  })
}

getChosenPatient(){
  let patient = this.state.patientsList.find((patient)=>{
    return (patient.id === this.state.patientChosen);
  });
  return patient;
}

renderPortalView(){
  if(this.state.showMenu){
    return <Menu handleFullListClick={this.fullListClickHandler} handleNurseClick={this.nurseRecommendedClickHandler}/>;
  }
  else if(this.state.patientSummaryView){
    return <PatientSummary closePatientSummary={this.patientSummaryClose} chosenPatient={this.getChosenPatient()}/>;
  }
  return <PatientList patientList={this.state.patientsList} fullView={this.state.fullListView} openPatientSummary={this.patientSummaryOpen}/>;
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
};

export default PatientPortal;
