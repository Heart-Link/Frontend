import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import CreateAccount from './CreateAccount';
import Logo from './Logo';

class Navbar extends Component {
  constructor () {
    super();

    this.createAccountHandler = this.createAccountHandler.bind(this);
    this.flaggedUserHandler = this.flaggedUserHandler.bind(this);
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

  flaggedUserHandler () {
    this.props.actions.showFlagged();
  }

  renderFlaggedNavbar () {
    if (this.props.ui.showFlagged === true) {
      return (
        <li><a onClick={this.flaggedUserHandler}>All Users</a></li>
      )
    }

    return (<li><a onClick={this.flaggedUserHandler}>Flagged Users</a></li>);
  }

  renderNavigation () {
    if (this.props.userInfo.isDoctor) {
      return (
        <div className="Navbar-navigation">
          <ul>
            {this.renderFlaggedNavbar()}
            <li><a onClick={this.createAccountHandler}>Create Account</a></li>
            <li><Link to={'/'}>Log Out</Link></li>
          </ul>
        </div>
      );
    }

    return (
      <div className="Navbar-navigation">
        <ul>
          <li><a onClick={this.createAccountHandler}>Create Account</a></li>
          <li><Link to={'/'}>Log Out</Link></li>
        </ul>
      </div>
    )
  }

  render () {
    return (
      <div className="Navbar">
        <div className="Navbar-logo">
          <Logo />
          <h3>Heart Link: {this.props.userInfo.userName}</h3>
        </div>

        {this.renderNavigation()}

      </div>
    );
  }
};

Navbar.propTypes = {
  actions: PropTypes.object.isRequired,
  userInfo: PropTypes.object
};

export default Navbar;
