import React from 'react';
import PatientTable from './PatientTable';
import StatusIcons from './StatusIcons';

const PatientList = (props) => {
  console.log(props);
  return (
    <div className="PatientList">
      <div className="TopRow">
        <input type="text" className="SearchBox" placeholder="Search for a patient..." />

        <StatusIcons />
      </div>

      <PatientTable patientList={props.patientList}/>
    </div>
  );
};

export default PatientList;
