import React, { Component } from 'react';
import Calendar from './Calendar';
import DataTable from './DataTable';
import DayDetail from './DayDetail';

class Detail extends Component{
  constructor(){
    super();
    this.state={
      dropdownOpen: false,
      currentData: 'Daily',
      chosenDate: null,
      dayDetail: false
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
    this.renderOpenDropdown = this.renderOpenDropdown.bind(this);
    this.onClickDaily = this.onClickDaily.bind(this);
    this.onClickBP = this.onClickBP.bind(this);
    this.onClickHR = this.onClickHR.bind(this);
    this.onClickStress = this.onClickStress.bind(this);
    this.onClickAlcohol = this.onClickAlcohol.bind(this);
    this.onClickSmoke = this.onClickSmoke.bind(this);
    this.onClickWeight = this.onClickWeight.bind(this);
    this.renderView = this.renderView.bind(this);
    this.dateClick = this.dateClick.bind(this);
    this.resetCalendarView = this.resetCalendarView.bind(this);
  }

  dateClick(date){
   this.setState({
      chosenDate: date,
      dayDetail: true
    });
  }

  resetCalendarView(){
    this.setState({
      dayDetail: false,
      chosenDay: null
    });
  }

  handleDropdown(){
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  }
  renderDropdown(){
    return(
      <div className='Dropdown'>
        <div onClick={this.handleDropdown}>
          <h5>{this.state.currentData}</h5>
          <div className='DownArrow' />
        </div>
        {this.renderOpenDropdown()}
      </div>
    );
  }
  renderOpenDropdown(){
    if(!this.state.dropdownOpen){
      return;
    }
    return(
      <div className='OpenDropdown'>
        <span onClick={this.onClickDaily}>Daily</span>
        <span onClick={this.onClickBP}>Blood Pressure</span>
        <span onClick={this.onClickHR}>Heart Rate</span>
        <span onClick={this.onClickStress}>Stress</span>
        <span onClick={this.onClickAlcohol}>Alcohol</span>
        <span onClick={this.onClickSmoke}>Smoking</span>
        <span onClick={this.onClickWeight}>Weight</span>
      </div>
    );
  }
  onClickDaily(){
    this.setState({
      currentData: 'Daily',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickBP(){
    this.setState({
      currentData: 'Blood Pressure',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickHR(){
    this.setState({
      currentData: 'Heart Rate',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickStress(){
    this.setState({
      currentData: 'Stress',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickAlcohol(){
    this.setState({
      currentData: 'Alcohol',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickSmoke(){
    this.setState({
      currentData: 'Smoking',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  onClickWeight(){
    this.setState({
      currentData: 'Weight',
      dropdownOpen: false,
      dayDetail: false
    });
  }
  renderView(){
    switch(this.state.currentData){
      case 'Blood Pressure':
        return(<DataTable />);

      case 'Heart Rate':
        return(<DataTable />);

      case 'Stress':
        return(<DataTable />);

      case 'Alcohol':
        return(<DataTable />);

      case 'Smoking':
        return(<DataTable />);

      case 'Weight':
        return(<DataTable />);

      default:
        if(this.state.dayDetail){
          return(<DayDetail back={this.resetCalendarView} date={this.state.chosenDate}/>);
        }
        else{
          return(<Calendar func={this.dateClick}/>);
        }
    }
  }
  render(){
    return(
      <div className='Detail'>
        {/*<p onClick={this.props.handlePatientDetailClick}>{'< Latest Input'}</p>*/}
        {this.renderDropdown()}
        {this.renderView()}
      </div>
    );
  }

}
export default Detail;
