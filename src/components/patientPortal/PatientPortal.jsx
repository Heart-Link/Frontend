import React, { Component, PropTypes } from 'react';
import Navbar from '../Navbar';

class PatientPortal extends Component {
  alerts () {
    return null;
  }

  leftSide () {
    if (this.props.ui.leftSideComponent === null) return <h1>ERROR</h1>;
    
    const LeftSide = this.props.ui.leftSideComponent;
    return <LeftSide data={this.props.ui.leftSideData} />
  }

  rightSide () {
    if (this.props.ui.rightSideComponent === null) return <h2>Hello Zack!</h2>;

    const RightSide = this.props.ui.rightSideComponent;
    return <RightSide data={this.props.ui.rightSideData} />
  }

  render () {
    return (
      <div className="PatientPortal">
        <Navbar actions={this.props.actions} />

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
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

export default PatientPortal;
