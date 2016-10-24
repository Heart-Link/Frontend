import React, { Component } from 'react';
import Logo from '../Logo';

class Login extends Component {
  constructor () {
    super();

    this.handleProviderClick = this.handleProviderClick.bind(this);
    this.handlePatientClick = this.handlePatientClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);

    this.state = {
      display: 'options'
    }
  }

  handleProviderClick () {
    this.setState({
      display: 'login'
    });
  }

  handlePatientClick () {
    this.setState({
      display: 'info'
    });
  }

  handleBackClick () {
    this.setState({
      display: 'options'
    });
  }

  renderOptions () {
    return (
      <div className="Options">
        <div className="Option">
          <h3>Medical Provider</h3>
          <button className="BlueCheck" onClick={this.handleProviderClick}/>
        </div>

        <div className="Option">
          <h3>Patients</h3>
          <button className="BlueCheck" onClick={this.handlePatientClick}/>
        </div>
      </div>
    );
  }

  renderLogin () {
    return (
      <div className="Fields">

        <div className="LoginBtn">
          <button className="RedX" onClick={this.handleBackClick}/>
        </div>
        
        <div className="Inputs">
          <input type="text" placeholder="Username"/>
          <input type="text" placeholder="Password"/>
        </div>
        
        <div className="BackBtn">
          <button className="BlueCheck"/>
        </div>
      </div>
    );
  }

  renderInfo () {
    return (
      <div className="Info">
        <div className="BackBtn">
          <button onClick={this.handleBackClick} className="BlueBack" />
        </div>

        <div className="Text">
          <h3>Currently we only off an iOS app for patients.</h3>
          <h3>Click her to check out the app.</h3>
          <h3>If your medical provider does not use Heart-Link, let them know about us.</h3>
        </div>
      </div>
    );
  }

  renderSwitcher () {
    if (this.state.display === 'login')
      return this.renderLogin();
    if (this.state.display === 'info')
      return this.renderInfo();

    return this.renderOptions();
  }

  render () {
    return (
      <div className="Login">
        <div className="Content">
          <Logo />
          <h1>Heart-Link</h1>
          <h3>Connecting patients directly with their medical providers.</h3>
          <div className="Switcher">
            {this.renderSwitcher()}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
