import React, { Component } from 'react';

class PatientSummary extends Component{
  render(){
    return(
      <div className='PatientSummary'>
        <p className='BackButton' onClick={this.props.patientSummaryClick}>Back</p>
        <p className='Mail'>Mail Icon</p>
        <h3>Patient Summary</h3>
      </div>
    );
  }
}
export default PatientSummary;
