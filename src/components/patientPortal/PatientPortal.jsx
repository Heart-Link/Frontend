import React, { Component, PropTypes } from 'react';
import Alert from '../Alert';
import Navbar from '../Navbar';
import PatientList from '../PatientList';
import Menu from '../Menu';

class PatientPortal extends Component {
  constructor () {
    super();
    this.state ={
      showMenu: false
    };
}

_navBarClickHandler(){
  this.setState({showMenu: !this.state.showMenu});
}

  render () {
    console.log(this.props, "PatientPortal");
    let menuIsVisible = <PatientList />;
    if(this.state.showMenu){
      menuIsVisible = <Menu />;
    }
    return (
      <div className="PatientPortal">
        <Navbar actions={this.props.actions} handleNavBarClick = {this._navBarClickHandler}/>
        {menuIsVisible}
      </div>
    );
  }
}

PatientPortal.propTypes = {
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

export default PatientPortal;
