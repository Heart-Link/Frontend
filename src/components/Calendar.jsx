import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Calendar extends Component{
  constructor(){
    super();
    this.state={
      startDate: moment()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date){
    this.setState({
      startDate: date
    });
  }
  render(){
    return <DatePicker inline
              selected={this.state.startDate}
              onChange={this.handleDateChange} />;
  }
}
export default Calendar;
