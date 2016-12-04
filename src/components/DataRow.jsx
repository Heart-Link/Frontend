import React from 'react';

const DataRow = (props) =>{
  const renderDate = () =>{
    let day = new Date(props.dataEntry.entryInfo).getDate();
    let month = new Date(props.dataEntry.entryInfo).getMonth();
    let year = new Date(props.dataEntry.entryInfo).getFullYear();
    month+=1;
    return <p>{month + '/' + day + '/' + year}</p>;
  }

  const renderData = () =>{
    switch(props.requestedData){

      case 'Blood Pressure':
        return <p>{props.dataEntry.bpHigh + '/' + props.dataEntry.bpLow}</p>;

      case 'Heart Rate':
        return <p>{props.dataEntry.averageHR}</p>;

      case 'Stress':
        return <p>{props.dataEntry.stressLevel}</p>;

      case 'Alcohol':
        return <p>{props.dataEntry.alcoholIntake}</p>;

      case 'Smoking':
        if(props.dataEntry.smoke) return <p>Yes</p>;
        return <p>No</p>;

      case 'Weight':
        return <p>{props.dataEntry.weight}</p>;
    }
  }

  return(
    <div className='DataRow'>
      {renderDate()}
      {renderData()}
    </div>
  );
}
export default DataRow;
