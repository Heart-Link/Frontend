import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CreateAccount from './CreateAccount';
import Logo from './Logo';

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
          <Logo />
          <h3>Heart Link</h3>
        </div>

        <div className="Navbar-navigation">
          <ul>
            <li><a onClick={this.createAccountHandler}>Create Account</a></li>
            <li><Link to={'/'}>Log Out</Link></li>
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
