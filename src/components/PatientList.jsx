import React, { Component } from 'react';
import PatientTable from './PatientTable';

class PatientList extends Component {
  render () {
    return (
      <div className="PatientList">
        <div className="TopRow">
          <input type="text" className="SearchBox" placeholder="Search for a patient..." />
        </div>
        <PatientTable />
      </div>
    );
  }
};

export default PatientList;
