import React, {Component} from 'react';

class DayDetail extends Component{

  render(){
    return(
      <div className='DayDetail'>
        <div>
          <p onClick={this.props.back}>{'< Back'}</p>
          <p className='Date'>{this.props.date.format("MM[/]DD[/]YYYY")}</p>
        </div>
        <div>
          <p>Blood Pressure:</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Heart Rate:</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Calories Burned:</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Steps:</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Exercise:</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Weight</p>
          <span>N/A</span>
        </div>
        <div>
          <p>Checklist:</p>
          <span>N/A</span>
        </div>
      </div>
    );
  }

}
export default DayDetail;
