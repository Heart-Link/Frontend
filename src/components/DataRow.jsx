import React from 'react';

const DataRow = (props) => {
  const renderDate = () => {
    let day = new Date(props.dailyEntry.entryInfo).getDate();
    let month = new Date(props.dailyEntry.entryInfo).getMonth();
    if(month === 1) {
      return <p>{'Jan ' + day}</p>;
    } else if(month === 2) {
        return <p>{'Feb ' + day}</p>;
    } else if(month === 3) {
        return <p>{'Mar ' + day}</p>;
    } else if(month === 4) {
        return <p>{'Apr ' + day}</p>;
    } else if(month === 5) {
        return <p>{'May ' + day}</p>;
    } else if(month === 6) {
        return <p>{'Jun ' + day}</p>;
    } else if(month === 7) {
        return <p>{'Jul ' + day}</p>;
    } else if(month === 8) {
        return <p>{'Aug ' + day}</p>;
    } else if(month === 9) {
        return <p>{'Sep ' + day}</p>;
    } else if(month === 10) {
        return <p>{'Oct ' + day}</p>;
    } else if(month === 11) {
        return <p>{'Nov ' + day}</p>;
    } else if(month === 12) {
        return <p>{'Dec ' + day}</p>;
    } else {
      return <p>N.A.</p>
    }

  }
  return (
    <div className="DataRow">
      {renderDate()}
      <p>{props.dailyEntry.bpHigh + "/" + props.dailyEntry.bpLow}</p>
      <p>{props.dailyEntry.averageHR}</p>
      <p>{props.dailyEntry.stressLevel}</p>
      <p>{props.dailyEntry.alcoholIntake}</p>
      <p>{(props.dailyEntry.smoke) ? 'True' : 'False'}</p>
      <p>{props.dailyEntry.weight}</p>
    </div>
  );
}

export default DataRow;
