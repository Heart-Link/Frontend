import React, { Component } from 'react';
import Calendar from './Calendar';
import DataTable from './DataTable';
import DayDetail from './DayDetail';
import Alert from './Alert';
import moment from 'moment';

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

  alerts(){
    if(!this.props.ui.alertMessage) return;

    return <Alert message={this.props.ui.alertMessage}
                  sendAlert={this.props.actions.sendAlert} />;
  }

//Incoming date is a date object as a string
//In order to compare, must make aa moment object from that string
  dateClick(date){
    const today = moment();
    let chosen = moment(date);

    let matchingEntry = this.searchEntries(chosen);

    if(chosen.isAfter(today) || matchingEntry === undefined){
      this.props.actions.sendAlert({message: 'Data not available for this date.'});
    } else{
      this.setState({
         chosenDate: matchingEntry,
         dayDetail: true
       });
    }
  }

  searchEntries(dateAsMoment){

    //Find method will loop through each entry in the detailedData array and find
    //the first entry that matches the requested date by day.
    //If none are found, the matchingEntry variable is undefined.
    let temp = this.props.ui.detailData.find((dataEntry) =>{
      let entryMoment = moment(dataEntry.entryInfo);
      return dateAsMoment.isSame(entryMoment, 'day');
    });

    return temp;
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
    let table=[];
    switch(this.state.currentData){
      case 'Blood Pressure':
          table = this.props.ui.detailData.filter((dataEntry)=>((dataEntry.bpHigh > 0) && (dataEntry.bpLow > 0)));
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      case 'Heart Rate':
          table = this.props.ui.detailData.filter((dataEntry)=>dataEntry.averageHR > 0);
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      case 'Stress':
          table = this.props.ui.detailData.filter((dataEntry)=>dataEntry.stressLevel > 0);
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      case 'Alcohol':
          table = this.props.ui.detailData.filter((dataEntry)=>dataEntry.alcoholIntake > 0);
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      case 'Smoking':
          table = this.props.ui.detailData.filter((dataEntry)=>dataEntry.smoke >= 0);
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      case 'Weight':
          table = this.props.ui.detailData.filter((dataEntry)=>dataEntry.weight > 0);
        return(<DataTable data={table} requestedData={this.state.currentData} />);

      default:
        if(this.state.dayDetail){
          return(<DayDetail back={this.resetCalendarView} dateEntry={this.state.chosenDate} />);
        }
        else{
          return(<Calendar func={this.dateClick}/>);
        }
    }
  }
  render(){
    return(
      <div className='Detail'>
        {this.alerts()}
        {this.renderDropdown()}
        {this.renderView()}
      </div>
    );
  }

}
export default Detail;
