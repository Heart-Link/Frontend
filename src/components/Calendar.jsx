import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Calendar extends Component{
  constructor(){
    super();
    this.state={
      startDate: moment()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date){
    if(date === this.state.startDate){
      this.props.func(this.state.startDate);
    }
      this.props.func(date);
  }
  render(){
    return <DatePicker inline
              selected={this.state.startDate}
              onChange={this.handleDateChange} />;
  }
}
export default Calendar;
