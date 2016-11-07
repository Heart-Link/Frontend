import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Mail from './Mail';

class PatientSummary extends Component{
  constructor(){
    super();
    this.state = {
      showMessages: false
    }
    //this.renderSummaryView = this.renderSummaryView.bind(this);
  }
  render(){
    return(
      <div className='PatientSummary'>
        <div className='TopBar'>
          <div className='BackAndMail'>
            <span className='BackButton' onClick={this.props.closePatientSummary}>Back</span>
            <Mail />
          </div>
          <div className='NameAndID'>
            <span className='PatientName'>{this.props.chosenPatient.firstname + ' ' +
              this.props.chosenPatient.lastname}</span>
              <span className='PatientID'>{this.props.chosenPatient.id}</span>
          </div>
        </div>
        <BasicInfo />
      </div>
    );
  }
}
export default PatientSummary;
