import React from 'react';
import PatientInfo from './PatientInfo';

const TableRow = (props) => {
  const rowClickHandler = (event) => {
    props.setRightSide({
      component: PatientInfo,
      data: props.patient
    })
  };

  const renderStatusIcon = () => {
    if (props.patient.status < 5) return <div className="WarningIcon"/>
    if (props.patient.status > 7) return <div className="GoodIcon"/>
    return <div className="MediumIcon"/>
  };

  return (
    <div className="TableRow" onClick={rowClickHandler}>
      <p>{props.patient.pid}</p>
      <p>{props.patient.lastName + ', ' + props.patient.firstName}</p>
      <div className="icon">{renderStatusIcon()}</div>
      <p>{props.patient.provider}</p>
      <p>0</p>
    </div>
  );
}

export default TableRow;
