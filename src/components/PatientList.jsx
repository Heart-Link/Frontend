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
        {key: 8, firstname: 'Kyle', lastname: 'Smith', status: 1, nurseFlag: false},
        {key: 9, firstname: 'Victor', lastname: 'Sanchez', status: 3, nurseFlag: true}
      ],
      sort: 'patientName',
      direction: 0,
      filterText:'',
      filterList: [
        {key: 1, firstname: 'John', lastname: 'Doe', status: 1, nurseFlag: false},
        {key: 2, firstname: 'Bob', lastname: 'Marley', status: 3, nurseFlag: true},
        {key: 3, firstname: 'Zack', lastname: 'Shackleton', status: 2, nurseFlag: true},
        {key: 4, firstname: 'Max', lastname: 'Pickering', status: 1, nurseFlag: false},
        {key: 5, firstname: 'Victoria', lastname: 'Rivas', status: 3, nurseFlag: true},
        {key: 6, firstname: 'Mary', lastname: 'Sunshine', status: 1, nurseFlag: false},
        {key: 7, firstname: 'Sagar', lastname: 'Mistry', status: 2, nurseFlag: true},
        {key: 8, firstname: 'Kyle', lastname: 'Smith', status: 1, nurseFlag: false},
        {key: 9, firstname: 'Victor', lastname: 'Sanchez', status: 3, nurseFlag: true}
      ]
    };

    this.patientNameClickHandler = this.patientNameClickHandler.bind(this);
    this.statusClickHandler = this.statusClickHandler.bind(this);
    this.fullViewOrNurseView = this.fullViewOrNurseView.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(event){
    this.setState({
      filterText:event.target.value
    });
    if(event.target.value <= 0){
      this.setState({
        filterList: this.state.patientsList
      });
    }
    this.setState({
      filterList: this.state.patientsList.filter((patient)=>{
        return(
          (patient.firstname + patient.lastname).toLowerCase().match(event.target.value.trim().toLowerCase())
        );
      })
    });
  }
  patientNameClickHandler(event){
    event.preventDefault();
    this.setState({sort:'patientName'});

    if(this.state.direction === 0){
        this.setState({
          direction: 1,
          filterList: this.state.filterList.sort((a,b) =>{
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
          filterList: this.state.filterList.sort((a,b) =>{
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
        filterList: this.state.filterList.sort((a,b) =>{
          return a.status - b.status;
        })
      });
    }
      else{
        this.setState({
          direction:0,
          filterList: this.state.filterList.sort((a,b)=>{
            return b.status - a.status;
          })
        });
      }
  }

  fullViewOrNurseView(){
    if(!this.props.fullView){
      let nurseRecommend = [];
      this.state.filterList.map((patient) =>{
        if(patient.nurseFlag){
          nurseRecommend.push(patient);
        }
      });
      return <PatientTable sortByName={this.patientNameClickHandler}
        sortByStatus={this.statusClickHandler}
        listOfPatients={nurseRecommend}
        patientSummaryClick={this.props.patientSummaryClick}/>
    }
    return <PatientTable sortByName={this.patientNameClickHandler}
      sortByStatus={this.statusClickHandler}
      listOfPatients={this.state.filterList}
      patientSummaryClick={this.props.patientSummaryClick}/>
  }

  render () {
    return (
      <div className="PatientList">
        <div className="TopRow">
          <input type="text" className="SearchBox" placeholder="Search for a patient..." onChange={this.handleUserInput}/>
        </div>
        {this.fullViewOrNurseView()}
      </div>
    );
  }
};
PatientList.propTypes={
  patientSummaryClick: PropTypes.func
}

export default PatientList;
