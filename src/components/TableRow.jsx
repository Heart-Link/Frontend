import React from 'react';

const TableRow = (props) => {
  return (
    <div className="TableRow">
      <p>{props.patient.pid}</p>
      <p>{props.patient.lastName + ', ' + props.patient.firstName}</p>
      <div className="icon"><div className="GoodIcon" /></div>
      <p>{props.patient.provider}</p>
      <p>Messages</p>
    </div>
  );
}

export default TableRow;
