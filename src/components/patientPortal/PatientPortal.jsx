import React, { Component, PropTypes } from 'react';
import Alert from '../Alert';
import Navbar from '../Navbar';
import PatientList from '../PatientList';
import Menu from '../Menu';

class PatientPortal extends Component {
  constructor () {
    super();
    this.state={showMenu: false};
    this.navBarClickHandler = this.navBarClickHandler.bind(this);
}

navBarClickHandler(event){
  event.preventDefault();
  this.setState({showMenu: !this.state.showMenu});
}

menuIsVisible(){
  if(this.state.showMenu){
    return <Menu />;
  }
  return <PatientList />;
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
