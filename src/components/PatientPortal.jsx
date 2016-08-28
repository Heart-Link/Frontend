import React, { Component, PropTypes } from 'react';
import Navbar from './Navbar';
import CreateAccount from './CreateAccount';
import PatientInfo from './PatientInfo';

class PatientPortal extends Component {
  constructor () {
    super();

    this.state = {
      rightSide: 2,
      leftSide: 0
    }
  }

  alerts () {
    return null;
  }

  leftSide () {
    return (
      <div></div>
    );
  }

  rightSide () {
    switch (this.state.rightSide) {
      case 0:
      default:
        return <h2>Hello Zack!</h2>;
      case 1:
        return <CreateAccount />;
      case 2:
        return <PatientInfo />;
    }
  }

  render () {
    return (
      <div className="PatientPortal">
        <Navbar />

        <div className="PatientPortal-leftSide">
          {this.leftSide()}
        </div>
        
        <div className="PatientPortal-rightSide">
          {this.rightSide()}
        </div>

        {this.alerts()}
      </div>
    );
  }
}

PatientPortal.propTypes = {
  user: PropTypes.object
};

PatientPortal.defaultProps = {
  user: {}
};

export default PatientPortal;
