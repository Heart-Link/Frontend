import React, { Component } from 'react';
import BasicInfo from './BasicInfo';
import Mail from './Mail';
import Detail from './Detail';

class PatientSummary extends Component{
  constructor(){
    super();
    this.state = {
      showMessages: false,
      detailView: false
    }
    this.detailViewClick = this.detailViewClick.bind(this);
    this.renderBottomHalf = this.renderBottomHalf.bind(this);
  }
  detailViewClick(event){
    this.setState({detailView: !this.state.detailView});
  }
  renderBottomHalf(){
    if(this.state.detailView){
      return <Detail handlePatientDetailClick={this.detailViewClick}/>;
    }
    return <BasicInfo handlePatientDetailClick={this.detailViewClick} />;
  }
  render(){
    return(
      <div className='PatientSummary'>
        <div className='TopBar'>
          <div className='BackAndMail'>
            <span className='BackButton' onClick={this.props.closePatientSummary}>{'< Patient List'}</span>
            <Mail />
          </div>
          <div className='NameAndID'>
            <span className='PatientName'>{this.props.chosenPatient.firstname + ' ' +
              this.props.chosenPatient.lastname}</span>
              <span className='PatientID'>{this.props.chosenPatient.id}</span>
          </div>
        </div>
        {this.renderBottomHalf()}
      </div>
    );
  }
}
export default PatientSummary;
