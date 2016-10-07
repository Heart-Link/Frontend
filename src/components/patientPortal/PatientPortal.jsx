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
      patientSummaryView: false
    };
    this.navBarClickHandler = this.navBarClickHandler.bind(this);
    this.fullListClickHandler = this.fullListClickHandler.bind(this);
    this.nurseRecommendedClickHandler = this.nurseRecommendedClickHandler.bind(this);
    this.patientSummaryClickHandler = this.patientSummaryClickHandler.bind(this);
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

patientSummaryClickHandler(event){
  event.preventDefault();
  this.setState({
    patientSummaryView: !this.state.patientSummaryView
  });
}

renderPortalView(){
  if(this.state.showMenu){
    return <Menu handleFullListClick={this.fullListClickHandler} handleNurseClick={this.nurseRecommendedClickHandler}/>;
  }
  else if(this.state.patientSummaryView){
    return <PatientSummary patientSummaryClick={this.patientSummaryClickHandler}/>;
  }
  return <PatientList fullView={this.state.fullListView} patientSummaryClick={this.patientSummaryClickHandler}/>;
}

  render () {
    console.log(this.props, "PatientPortal");
    return (
      <div className="PatientPortal">
        <Navbar actions={this.props.actions} handleNavBarClick = {this.navBarClickHandler}/>
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
