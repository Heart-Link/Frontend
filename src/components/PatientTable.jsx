import React,{Component, PropTypes} from 'react';
import PatientRow from './PatientRow';

class PatientTable extends Component{

  getPatients(){
    if(this.props.patientList <= 0){
      return <h5>No Patients Found</h5>
    }
    else{
      return(
        this.props.patientList.map((patient) =>{
          return <PatientRow key={patient.pid}
                    id={patient.pid}
                    firstName={patient.firstName}
                    lastName={patient.lastName}
                    status={patient.status}
                    openPatientSummary={this.props.openPatientSummary}/>;
        })
      );
    }
  }

  render(){
    return(
      <div className="PatientTable">
        {this.getPatients()}
      </div>
    );
  }
}

{/*
PatientTable.propTypes ={
  patientList: PropTypes.arrayOf(PropTypes.object),
  openPatientSummary: PropTypes.func
};*/}

export default PatientTable;
