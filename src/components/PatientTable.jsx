import React,{Component, PropTypes} from 'react';
import PatientRow from './PatientRow';

class PatientTable extends Component{

  getPatients(){
    if(this.props.listOfPatients.length === 0){
      return <h4>No Patients Found</h4>;
    }
    else{
      return (
        <div className="SortingRow">
          <p className="NameSort" onClick={this.props.sortByName}></p>
          <p className="StatusSort" onClick={this.props.sortByStatus}></p>
        </div>
        this.props.listOfPatients.map((patient) =>{
          return<PatientRow key={patient.key} firstname={patient.firstname} lastname={patient.lastname} status={patient.status}/>
        });
      );
    }
  }

  render(){
    return (
      <div className="PatientTable">
        {this.getPatients()}
      </div>
    )
  }
}

PatientTable.propTypes ={
  listofPatients: PropTypes.arrayOf(PropTypes.object)
};

export default PatientTable;
