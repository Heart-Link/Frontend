import React, { Component } from 'react';
import moment from 'moment';

class BasicInfo extends Component{

  calculateAge(){
    const years = moment();
    const patientDOB = moment(this.props.patient.dob, "YYYY/MM/DD");
    return years.diff(patientDOB, 'years');
  }

  renderLastInputDate(){
      //const lastInputDate = moment(this.props.patient.lastInput.entryInfo).format("MM[/]DD[/]YYYY");
      let date = new Date(this.props.patient.lastInput.entryInfo).getDate();
      let month = new Date(this.props.patient.lastInput.entryInfo).getMonth();
      let year = new Date(this.props.patient.lastInput.entryInfo).getFullYear();
      month += 1;
      return `${month}/${date}/${year}`;
  }

  renderSmoking(){
    if(this.props.patient.lastInput.smoke){
      return 'Yes';
    }
    return 'No';
  }

  renderStatusIcon() {
    if (this.props.patient.status < 5) return <div className='WarningIcon'/>
    if(this.props.patient.status > 7) return <div className='GoodIcon'/>
    return <div className='MediumIcon'/>
  };

  numberOrNA(value){
    let result = value>0 ? value : '--'
    return result;
  }

  renderEntries(){
    if(this.props.patient.lastInput <= 0){
      return(
        <div className='NoEntries'>
          <h4>No Entries Yet</h4>
        </div>
      );
    }
    else{
      return(
        <div className='BottomHalf'>
          <div className='TopBarBottom'>
            <span className='RecentInput'>Last Input</span>
            <span className='InputDate'>{this.renderLastInputDate()}</span>
          </div>
          <div className='RecentInfo'>
            <div className='LeftSide'>
              <div>
                <p>BP: </p>
                <p>HR:</p>
                <p>Alcohol:</p>
              </div>
              <div>
                <p>{this.numberOrNA(this.props.patient.lastInput.bpHigh) + '/' + this.numberOrNA(this.props.patient.lastInput.bpLow)}</p>
                <p>{this.numberOrNA(this.props.patient.lastInput.averageHR)}</p>
                <p>{this.numberOrNA(this.props.patient.lastInput.alcoholIntake)}</p>
              </div>
            </div>
            <div className='RightSide'>
              <div>
                <p>Smoke: </p>
                <p>Weight:</p>
                <p>Stress:</p>
              </div>
              <div>
                <p>{this.renderSmoking()}</p>
                <p>{this.numberOrNA(this.props.patient.lastInput.weight)}</p>
                <p>{this.numberOrNA(this.props.patient.lastInput.stressLevel)}</p>
              </div>
            </div>
          </div>
          <div className='PatientDetailButton'>
            <button onClick={this.props.handlePatientDetailClick}>View Patient Detail</button>
          </div>
        </div>
      );
    }
  }


  render(){
    return(
      <div className='BasicAndLastInput'>
          <div className='TopHalf'>
            <div className='PatientDetails'>
              <div className='Headers'>
                <p>Sex</p>
                <p>Age</p>
                <p>Weight</p>
                <p>Status</p>
              </div>
              <div className='Info'>
                <p>{this.props.patient.sex}</p>
                <p>{this.calculateAge()}</p>
                <p>{this.props.patient.weight}</p>
                <div className='status'>{this.renderStatusIcon()}</div>
              </div>
          </div>
        </div>
        {this.renderEntries()}
      </div>
    );
  }
}

export default BasicInfo;
