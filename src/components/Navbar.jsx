import React, { Component, PropTypes } from 'react';
import CreateAccount from './CreateAccount';

class Navbar extends Component {
  constructor () {
    super();

    this.createAccountHandler = this.createAccountHandler.bind(this);
  }

  createAccountHandler () {
    this.props.actions.setLeftSide({
      component: null,
      data: null
    });
    
    this.props.actions.setRightSide({
      component: CreateAccount,
      data: null
    });
  }

  render () {
    return (
      <div className="Navbar">
        <div className="Navbar-logo">
          <h3>Heart Link</h3>
        </div>

        <div className="Navbar-navigation">
          <ul>
            <li><a onClick={this.createAccountHandler}>Create Account</a></li>
            <li><a>Log Out</a></li>
          </ul>
        </div>
      </div>
    );
  }
};

Navbar.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Navbar;
