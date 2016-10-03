import React from 'react';
import PatientInfo from './PatientInfo';

const DataRow = (props) => {
  return (
    <div className="DataRow" onClick={rowClickHandler}>
      <p>Data Entry</p>
    </div>
  );
}

export default DataRow;
