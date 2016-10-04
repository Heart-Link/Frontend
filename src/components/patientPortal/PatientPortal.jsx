import React, { Component, PropTypes } from 'react';
import Alert from '../Alert';
import Navbar from '../Navbar';
import PatientList from '../PatientList';
import Menu from '../Menu';

class PatientPortal extends Component {
  constructor () {
    super();
    this.state={
      showMenu: false,
      fullListView: true
    };
    this.navBarClickHandler = this.navBarClickHandler.bind(this);
    this.fullListClickHandler = this.fullListClickHandler.bind(this);
    this.nurseRecommendedClickHandler = this.nurseRecommendedClickHandler.bind(this);
}

navBarClickHandler(event){
  event.preventDefault();
  this.setState({showMenu: !this.state.showMenu});
}

fullListClickHandler(event){
  event.preventDefault();
  this.setState({
    fullListView: true,
    showMenu: false
  });
}

nurseRecommendedClickHandler(event){
  event.preventDefault();
  this.setState({
    fullListView: false,
    showMenu: false
  });
}

menuIsVisible(){
  if(this.state.showMenu){
    return <Menu handleFullListClick={this.fullListClickHandler} handleNurseClick={this.nurseRecommendedClickHandler}/>;
  }
  return <PatientList fullView={this.state.fullListView}/>;
}

  render () {
    console.log(this.props, "PatientPortal");
    return (
      <div className="PatientPortal">
        <Navbar actions={this.props.actions} handleNavBarClick = {this.navBarClickHandler}/>
        {this.menuIsVisible()}
      </div>
    );
  }
}

PatientPortal.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

export default PatientPortal;
