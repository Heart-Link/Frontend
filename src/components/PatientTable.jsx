import React,{Component, PropTypes} from 'react';
import PatientRow from './PatientRow';

class PatientTable extends Component{

  getPatients(){
    if(this.props.listOfPatients.length === 0){
      return <h4>No Patients Found</h4>
    }
    else{
      return(
        this.props.listOfPatients.map((patient) =>{
          return <PatientRow key={patient.key}
                    firstname={patient.firstname}
                    lastname={patient.lastname}
                    status={patient.status}
                    patientSummaryClick={this.props.patientSummaryClick}/>;
        })
      );
    }
  }

  render(){
    return(
      <div className="PatientTable">
        <div className="SortingRow">
          <p className="NameSort" onClick={this.props.sortByName}>Patient Name</p>
          <p className="StatusSort" onClick={this.props.sortByStatus}>Status</p>
        </div>
        {this.getPatients()}
      </div>
    );
  }
}

PatientTable.propTypes ={
  listOfPatients: PropTypes.arrayOf(PropTypes.object),
  patientSummaryClick: PropTypes.func
};

export default PatientTable;
