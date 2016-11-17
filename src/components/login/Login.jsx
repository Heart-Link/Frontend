import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Alert from '../Alert';
import Logo from '../Logo';

class Login extends Component {
  constructor () {
    super();

    this.handleProviderClick = this.handleProviderClick.bind(this);
    this.handlePatientClick = this.handlePatientClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.loginSuccess = this.loginSuccess.bind(this);

    this.state = {
      display: 'options',
      email: null,
      password: null,
    }
  }

  alerts () {
    if (!this.props.ui.alertMessage) return;

    return <Alert message={this.props.ui.alertMessage}
                  sendAlert={this.props.actions.sendAlert} />;
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

  handleLogin (event) {
    event.preventDefault();

    this.props.actions.login({
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: this.loginSuccess
    });

  }

  loginSuccess () {
    browserHistory.push('/patientPortal'); 
  }

  onChangeEmail (event) {
    this.setState({ email: event.target.value })
  }

  onChangePassword (event) {
    this.setState({ password: event.target.value })
  }

  renderLogin () {
    return (
      <div className="Fields">

        <div className="LoginBtn">
          <button className="RedX" onClick={this.handleBackClick}/>
        </div>
        
        <div className="Inputs">
          <input type="text" onChange={this.onChangeEmail} placeholder="Username"/>
          <input type="text" onChange={this.onChangePassword} placeholder="Password"/>
        </div>
        
        <div className="BackBtn">
          <button className="BlueCheck" onClick={this.handleLogin}/>
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
        {this.alerts()}
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
