import React, { Component } from 'react';

class BasicInfo extends Component{
  render(){
    return(
      <div className='BasicAndLastInput'>
          <div className='TopHalf'>
            <div className='PatientDetails'>
              <div className='Headers'>
                <span>Sex</span>
                <span>Age</span>
                <span>Weight</span>
                <span>Status</span>
              </div>
              <div className='Info'>
                <span>Sex</span>
                <span>Age</span>
                <span>Weight</span>
                <span>Status</span>
              </div>
          </div>
        </div>
        <div className='BottomHalf'>
          <div className='TopBarBottom'>
            <span className='RecentInput'>Last Input</span>
            <span className='InputDate'>Date</span>
          </div>
          <div className='RecentInfo'>
            <div className='LeftSide'>
              <p>BP: </p>
              <p>Heart Rate:</p>
              <p>Alcohol (drinks):</p>
            </div>
            <div className='RightSide'>
              <p>Smoke: </p>
              <p>Weight:</p>
              <p>Stress:</p>
            </div>
          </div>
          <p className='Checklist'>Checklist:</p>
          <div className='PatientDetailButton'>
            <button onClick={this.props.handlePatientDetailClick}>View Patient Detail</button>
          </div>
        </div>
      </div>

    );
  }
}

export default BasicInfo;
