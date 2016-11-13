import React, {Component} from 'react';
import moment from 'moment';

class Calendar extends Component{
  constructor(){
    super();
    const date = new Date();
    this.state={
      year: date.getFullYear(),
      month: date.getMonth(),
      selectedYear: date.getFullYear(),
      selectedMonth: date.getMonth(),
      selectedDate: date.getDate(),
      dayAbr: ['S','M','T','W','T','F','S'],
      monthsFull: ['January','February','March', 'April','May','June',
        'July', 'August','September','October','November', 'December'],
      dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      daysInMonth: new Date(date.getFullYear(),date.getMonth()+1, 0).getDate(),
      firstOfMonth: new Date(date.getFullYear(), date.getMonth(),1).getDay(),
      startDate: moment()
    };
    //this.handleDateChange = this.handleDateChange.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.getNext = this.getNext.bind(this);
    this.backToToday = this.backToToday.bind(this);
    this.getDaysInMonth = this.getDaysInMonth.bind(this);
    this.weeksInMonth = this.weeksInMonth.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  getPrev(){
    if(this.state.selectedMonth > 0){
      this.setState({
        selectedMonth: this.state.selectedMonth-1,
        selectedYear: this.state.selectedYear,
        daysInMonth: this.getDaysInMonth(this.state.selectedYear, this.state.selectedMonth-1),
        firstOfMonth: this.getFirstOfMonth(this.state.selectedYear, this.state.selectedMonth-1)
      });
    }
    else{
      this.setState({
        selectedMonth: 11,
        selectedYear: this.state.selectedYear-1,
        daysInMonth: this.getDaysInMonth(this.state.selectedYear, 11),
        firstOfMonth: this.getFirstOfMonth(this.state.selectedYear,11)
      });
    }
  }

  getNext(){
      if(this.state.selectedMonth === 11){
        this.setState({
          selectedMonth: 0,
          selectedYear: this.state.selectedYear+1,
          daysInMonth: this.getDaysInMonth(this.state.selectedYear+1, 0),
          firstOfMonth: this.getFirstOfMonth(this.state.selectedYear+1,0)
        });
      }
      else{
        this.setState({
          selectedMonth: this.state.selectedMonth+1,
          selectedYear: this.state.selectedYear,
          daysInMonth: this.getDaysInMonth(this.state.selectedYear,this.state.selectedMonth+1),
          firstOfMonth: this.getFirstOfMonth(this.state.selectedYear, this.state.selectedMonth+1)
        });
      }
  }

  backToToday(){
    this.setState({
      selectedMonth: this.state.month,
      selectedYear: this.state.year,
      daysInMonth: this.getDaysInMonth(this.state.year, this.state.month),
      firstOfMonth: this.getFirstOfMonth(this.state.year, this.state.month)
    });
  }

  renderDayNames(){
    return(
      <div className='DayAbrvs'>
        <p>S</p>
        <p>M</p>
        <p>T</p>
        <p>W</p>
        <p>T</p>
        <p>F</p>
        <p>S</p>
      </div>
    );
  }

  getDaysInMonth(year,month){
    let temp = new Date(year, month+1,0);
    return temp.getDate();
  }

  getFirstOfMonth(year, month){
    let temp = new Date(year, month,1);
    return temp.getDay();
  }

  /*handleDateChange(date){
    this.setState({
      startDate: date
    });
  }*/
  getMonthName(){
    return(this.state.monthsFull[this.state.selectedMonth]);
  }

  weeksInMonth(){
    let totalDays = this.state.firstOfMonth + this.state.daysInMonth;
    let weeksNeeded = Math.ceil(totalDays/7);
    return weeksNeeded;
  }

  renderWeeks(){
    let numWeeks = this.weeksInMonth();
    switch(numWeeks){
      case 6:
        return(
          <div className='WeeksView'>
            <div>Week 1</div>
            <div>Week 2</div>
            <div>Week 3</div>
            <div>Week 4</div>
            <div>Week 5</div>
            <div>Week 6</div>
          </div>
        );

      default:
        return(
          <div className='WeeksView'>
            <div>Week 1</div>
            <div>Week 2</div>
            <div>Week 3</div>
            <div>Week 4</div>
            <div>Week 5</div>
          </div>
        );
    }
  }

/*  weekOne(){
    for(int i=0; i<6;i++){
      if(i === this.state.firstOfMonth){

      }
    }
  }*/
  render(){
    console.log("The first day of this month falls on " +
      this.state.dayNames[this.state.firstOfMonth]);
    console.log("The number of weeks needed for this month is " +
      this.weeksInMonth());
    return (
      <div className='Calendar'>
        <div className='Header'>
          <span className='PrevBtn' onClick={this.getPrev}>&#10094;</span>
          <div>
            <span className='SelectedMonth'>{this.getMonthName()}</span>
            <span className='SelectedYear'>{this.state.selectedYear}</span>
          </div>
          <span className='NextBtn' onClick={this.getNext}>&#10095;</span>
        </div>
        {this.renderDayNames()}
        {this.renderWeeks()}
        <p className='TodayBtn' onClick={this.backToToday}>Today</p>
      </div>
    );
  }
}
export default Calendar;
