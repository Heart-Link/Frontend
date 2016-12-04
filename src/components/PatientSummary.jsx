import React, { Component, PropTypes } from 'react';
import BasicInfo from './BasicInfo';
import Mail from './Mail';
import Detail from './Detail';
import Message from './Message';

class PatientSummary extends Component{
  constructor(){
    super();
    this.state = {
      showMessages: false,
      detailView: false
    }

    this.detailViewClick = this.detailViewClick.bind(this);
    this.renderBottomHalf = this.renderBottomHalf.bind(this);
    this.onMailClick = this.onMailClick.bind(this);
  }

  detailViewClick(event){
    this.props.actions.getPatientDetail({
      id: this.props.chosenPatient.pid,
      token: this.props.userInfo.jwt
    })
    this.setState({
      detailView: !this.state.detailView
    });
  }

  onMailClick(event){
    event.preventDefault();
    this.props.actions.getMessages({
      data: {
        id: this.props.chosenPatient.pid,
        token: this.props.userInfo.jwt
      }
    });
    this.setState({
      showMessages: !this.state.showMessages,
      detailView: false
    });
  }

  renderBottomHalf(){
    if(this.state.detailView){
      return <Detail actions={this.props.actions} ui={this.props.ui}/>;
    }
    else if(this.state.showMessages){
      return <Message closeMessages={this.onMailClick}
                      patient={this.props.chosenPatient.pid}
                      userInfo={this.props.userInfo}
                      {...this.props.ui}
                      {...this.props.actions}/>
    }
    return <BasicInfo patient={this.props.chosenPatient} handlePatientDetailClick={this.detailViewClick} />;
  }

  render(){
    console.log(this.props, "PatientSummary");
    return(
      <div className='PatientSummary'>
        <div className='TopBar'>
          <div className='BackAndMail'>
            <span className='BackButton' onClick={this.props.closePatientSummary}>{'< Patient List'}</span>
            <Mail openMessages={this.onMailClick}/>
          </div>
          <div className='NameAndID'>
            <span className='PatientName'>{this.props.chosenPatient.firstName + ' ' +
              this.props.chosenPatient.lastName}</span>
              <span className='PatientID'>{this.props.chosenPatient.pid}</span>
          </div>
        </div>
        {this.renderBottomHalf()}
      </div>
    );
  }
}

PatientSummary.propTypes ={
  chosenPatient: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
}
export default PatientSummary;
