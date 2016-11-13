import React, {Component} from 'react';
import Logo from '../Logo';

class Login extends Component{
  constructor(){
    super();
    this.state = {
      display: 'options'
    }
    this.handleProviderClick = this.handleProviderClick.bind(this);
    this.handlePatientClick = this.handlePatientClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
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

  renderOptions(){
    return (
      <div className='Options'>
        <div className='Option'>
          <h4>Medical Provider</h4>
          <button className='BlueCheck' onClick={this.handleProviderClick}/>
        </div>

        <div className='Option'>
          <h4>Patients</h4>
          <button className='BlueCheck' onClick={this.handlePatientClick}/>
        </div>
      </div>
    );
  }

  renderLogin(){
    return(
      <div className='Fields'>
        <div className='LoginBtn'>
          <button className='RedX' onClick={this.handleBackClick}/>
        </div>

        <div className='Inputs'>
          <input type='text' placeholder='Username'/>
          <input type='text' placeholder='Password'/>
        </div>

        <div className='BackBtn'>
          <button className='BlueCheck'/>
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
          <h5>Currently, we only offer an iOS app for patients.</h5>
          <h5>Click here to check out the app.</h5>
          <h5>If your medical provider does not use Heart Link, let them know about us.</h5>
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
        <div className='Content'>
          <Logo />
          <h3>Heart-Link</h3>
          <h4>Connecting patients directly with their medical providers.</h4>
          <div className='Switcher'>
            {this.renderSwitcher}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
