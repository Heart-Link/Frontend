import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Alert from '../Alert';
import Logo from '../Logo';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      display: 'options',
      email: null,
      password: null
    }

    this.handleProviderClick = this.handleProviderClick.bind(this);
    this.handlePatientClick = this.handlePatientClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  alerts(){
    if(!this.props.ui.alertMessage) return;

    return <Alert message={this.props.ui.alertMessage}
                  sendAlert={this.props.actions.sendAlert} />;
  }
  handleProviderClick(){
    this.setState({
      display: 'login'
    });
  }
  handlePatientClick(){
    this.setState({
      display: 'info'
    });
  }
  handleBackClick(){
    this.setState({
      display: 'options'
    });
  }

  handleLogin(event){
    event.preventDefault();

    this.props.actions.login({
      data: {
        email: this.state.email,
        password: this.state.password
      },
      success: this.loginSuccess
    });
  }
  loginSuccess(){
    browserHistory.push('/patientPortal');
  }

  onChangeEmail(event){
    this.setState({email: event.target.value});
  }

  onChangePassword(event){
    this.setState({password: event.target.value});
  }
  renderOptions(){
    return (
      <div className='Options'>
        <div className='Option'>
          <button className='BlueCheck' onClick={this.handleProviderClick}/>
          <h5>Medical Provider</h5>
        </div>

        <div className='Option'>
          <button className='BlueCheck' onClick={this.handlePatientClick}/>
          <h5>Patients</h5>
        </div>
      </div>
    );
  }

  renderLogin(){
    return(
      <div className='Fields'>

        <div className='Inputs'>
          <input type='text' onChange={this.onChangeEmail} placeholder='Username'/>
          <input type='password' onChange={this.onChangePassword} placeholder='Password'/>
        </div>

        <div className='BackBtn'>
          <button className='RedX' onClick={this.handleBackClick}/>
        </div>

        <div className='LoginBtn'>
          <button className='BlueCheck' onClick={this.handleLogin}/>
        </div>
      </div>
    );
  }

  renderInfo(){
    return(
      <div className='Info'>
        <div className='BackBtn'>
          <button className='BlueBack' onClick={this.handleBackClick}/>
        </div>

        <div className='Text'>
          <p>Currently, we only offer an iOS app for patients.</p>
          <p>Click here to check out the app.</p>
          <p>If your medical provider does not use Heart Link, let them know about us.</p>
        </div>
      </div>
    );
  }

  renderSwitcher(){
    switch(this.state.display){
      case 'login':
        return this.renderLogin();

      case 'info':
        return this.renderInfo();

      default:
        return this.renderOptions();
    }
  }

  render(){
    return(
      <div className='Login'>
        {this.alerts()}
        <div className='Content'>
          <Logo />
          <h3>Heart Link</h3>
          <h5>Connecting patients directly with their medical providers.</h5>
          <div className='Switcher'>
            {this.renderSwitcher()}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
