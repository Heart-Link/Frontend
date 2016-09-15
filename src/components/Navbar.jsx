import React, { Component, PropTypes } from 'react';
import CreateAccount from './CreateAccount';

class Navbar extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className="Navbar">
        <div className="Navbar-logo">
          <h6>Heart Link</h6>
        </div>
        <div className="Navbar-navigation">
          <div className="Hamburger" onClick={this.props.handleNavBarClick.bind(this)}>
            <div className="Line"></div>
            <div className="Line"></div>
            <div className="Line"></div>
          </div>
        </div>
      </div>
    );
  }
};

Navbar.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Navbar;
