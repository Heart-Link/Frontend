import React, {Component} from 'react';
import moment from 'moment';

class DayDetail extends Component{

  renderDate(){
    let dateAsMoment = moment(this.props.dateEntry.entryInfo);
    let date = dateAsMoment.format('MM/DD/YYYY');
    return date;
  }

  renderLeftSide(){
    return(
      <div className='LeftSide'>
        <p>Blood Pressure:</p>
        <p>Heart Rate:</p>
        <p>Exercise time:</p>
        <p>Steps:</p>
        <p>Alcohol:</p>
        <p>Weight:</p>
        <p>Smoking:</p>
        <p>Stress:</p>
      </div>
    );
  }

  numberOrNA(value){
    let result = value>0 ? value : '--'
    return result;
  }

  renderRightSide(){
    return(
      <div className='RightSide'>
        <p>{this.numberOrNA(this.props.dateEntry.bpHigh)+'/'+ this.numberOrNA(this.props.dateEntry.bpLow)}</p>
        <p>{this.numberOrNA(this.props.dateEntry.averageHR)}</p>
        <p>{this.numberOrNA(this.props.dateEntry.exerciseTime)}</p>
        <p>{this.numberOrNA(this.props.dateEntry.steps)}</p>
        <p>{this.numberOrNA(this.props.dateEntry.alcoholIntake)}</p>
        <p>{this.numberOrNA(this.props.dateEntry.weight)}</p>
        <p>{this.props.dateEntry.smoke ? 'Yes' : 'No'}</p>
        <p>{this.numberOrNA(this.props.dateEntry.stressLevel)}</p>
      </div>
    );
  }

  render(){
    console.log(this.props, "DayDetail");
    return(
      <div className='DayDetail'>
        <div>
          <p className='BackBtn' onClick={this.props.back}>{'< Back'}</p>
          <p className='Date'>{this.renderDate()}</p>
        </div>
        {this.renderLeftSide()}
        {this.renderRightSide()}
      </div>
    );
  }

}
export default DayDetail;
