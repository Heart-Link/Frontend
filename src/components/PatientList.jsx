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

  componentWillUpdate(nextProps){
    if(this.props.patientList === nextProps.patientList) return;
    this.setState({filterList: nextProps.patientList});
  }

  handleUserInput(event){
    this.setState({
      filterText:event.target.value
    });
    if(event.target.value <= 0){
      this.setState({
        filterList: this.props.patientList
      });
    }
    this.setState({
      filterList: this.props.patientList.filter((patient)=>{
        return(
          (patient.firstName + patient.lastName + patient.pid).toLowerCase().match(event.target.value.trim().toLowerCase())
        );
      })
    });
  }

  patientNameClickHandler(event){
    this.setState({sort:'patientName'});

    if(this.state.direction === 0){
        this.setState({
          direction: 1,
          filterList: this.state.filterList.sort((a,b) =>{
            const nameA = (a.lastName + a.firstName).toLowerCase();
            const nameB = (b.lastName + b.firstName).toLowerCase();

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
            const nameA = (a.lastName + a.firstName).toLowerCase();
            const nameB = (b.lastName + b.firstName).toLowerCase();

            if(nameA < nameB) return -1;
            if(nameA > nameB) return 1;
            return 0;
          })
        });
      }
      return;
    }

  patientNameClassName(){
    if(this.state.sort === 'patientName'){
      if(this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }
    return 'DownArrow';
  }

  statusClickHandler(event){
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

  statusClassName(){
    if(this.state.sort === 'status'){
      if(this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }
    return 'DownArrow';
  }

  fullViewOrNurseView(){
    if(!this.props.fullView){
      let nurseRecommend = this.state.filterList.filter((patient)=>patient.isFlagged);
      return <PatientTable patientList={nurseRecommend} openPatientSummary={this.props.openPatientSummary}/>
    }
    return <PatientTable patientList={this.state.filterList} openPatientSummary={this.props.openPatientSummary}/>
  }

  render () {
    return (
      <div className="PatientList">
        <div className="TopRow">
          <input type="text" className="SearchBox" placeholder="Search for a patient..." onChange={this.handleUserInput}/>
        </div>
        <div className='Headers'>
          <div className='PatientSort' onClick={this.patientNameClickHandler}>
            <p>Patient Name</p>
            <div className={this.patientNameClassName()}/>
          </div>
          <div className='StatusSort' onClick={this.statusClickHandler}>
            <p>Status</p>
            <div className={this.statusClassName()}/>
          </div>
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
