import React, { Component, PropTypes } from 'react';
import PatientTable from './PatientTable';

class PatientList extends Component {
  constructor(){
    super();
    this.state ={
      patientsList: [
        {key: 1, firstname: 'John', lastname: 'Doe', status: 1, nurseFlag: false},
        {key: 2, firstname: 'Bob', lastname: 'Marley', status: 3, nurseFlag: true},
        {key: 3, firstname: 'Zack', lastname: 'Shackleton', status: 2, nurseFlag: true},
        {key: 4, firstname: 'Max', lastname: 'Pickering', status: 1, nurseFlag: false},
        {key: 5, firstname: 'Victoria', lastname: 'Rivas', status: 3, nurseFlag: true},
        {key: 6, firstname: 'Mary', lastname: 'Sunshine', status: 1, nurseFlag: false},
        {key: 7, firstname: 'Sagar', lastname: 'Mistry', status: 2, nurseFlag: true},
        {key: 8, firstname: 'Kyle', lastname: 'Smith', status: 1, nurseFlag: true},
        {key: 9, firstname: 'Victor', lastname: 'Sanchez', status: 3, nurseFlag: true}
      ],
      sort: 'patientName',
      direction: 0,
    };

    this.patientNameClickHandler = this.patientNameClickHandler.bind(this);
    this.statusClickHandler = this.statusClickHandler.bind(this);
    this.fullViewOrNurseView = this.fullViewOrNurseView.bind(this);
  }
  patientNameClickHandler(event){
    event.preventDefault();
    this.setState({sort:'patientName'});

    if(this.state.direction === 0){
        this.setState({
          direction: 1,
          patientsList: this.state.patientsList.sort((a,b) =>{
            const nameA = (a.lastname + a.firstname).toLowerCase();
            const nameB = (b.lastname + b.firstname).toLowerCase();

            if(nameA > nameB) return -1;
            if(nameA < nameB) return 1;
            return 0;
          })
        });
      }
      else{
        this.setState({
          direction: 0,
          patientsList: this.state.patientsList.sort((a,b) =>{
            const nameA = (a.lastname + a.firstname).toLowerCase();
            const nameB = (b.lastname + b.firstname).toLowerCase();

            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            return 0;
          })
        });
      }
      return;
    }

  statusClickHandler(event){
    event.preventDefault();
    this.setState({sort: 'status'});

    if(this.state.direction === 0){
      this.setState({
        direction: 1,
        patientsList: this.state.patientsList.sort((a,b) =>{
          return a.status - b.status;
        })
      });
    }
      else{
        this.setState({
          direction:0,
          patientsList: this.state.patientsList.sort((a,b)=>{
            return b.status - a.status;
          })
        });
      }
  }

  fullViewOrNurseView(){
    if(!this.props.fullView){
      let nurseRecommend = [];
      this.state.patientsList.map((patient) =>{
        if(patient.nurseFlag){
          nurseRecommend.push(patient);
        }
      });
      return <PatientTable sortByName={this.patientNameClickHandler} sortByStatus={this.statusClickHandler} listOfPatients={nurseRecommend} />
    }
    return <PatientTable sortByName={this.patientNameClickHandler} sortByStatus={this.statusClickHandler} listOfPatients={this.state.patientsList} />
  }
  render () {
    return (
      <div className="PatientList">
        <div className="TopRow">
          <input type="text" className="SearchBox" placeholder="Search for a patient..." />
        </div>
        {this.fullViewOrNurseView()}
      </div>
    );
  }
};

export default PatientList;
