import React, { Component, PropTypes } from 'react';
import PatientTable from './PatientTable';

class PatientList extends Component {
  constructor(props){
    super(props);
    this.state ={
      sort: 'patientName',
      direction: 0,
      filterText:'',
      filterList: this.props.patientList
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
      filterList: this.props.patientList.filter((patient)=>{
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
      let nurseRecommend = this.props.patientList.filter((patient)=>patient.nurseFlag);
      return <PatientTable sortByName={this.patientNameClickHandler}
        sortByStatus={this.statusClickHandler}
        patientList={nurseRecommend}
        openPatientSummary={this.props.openPatientSummary}/>
    }
    return <PatientTable sortByName={this.patientNameClickHandler}
      sortByStatus={this.statusClickHandler}
      patientList={this.state.filterList}
      openPatientSummary={this.props.openPatientSummary}/>
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
  openPatientSummary: PropTypes.func,
  patientList: PropTypes.arrayOf(PropTypes.object)
}

export default PatientList;
