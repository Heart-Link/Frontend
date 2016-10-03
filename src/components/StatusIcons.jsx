import React from 'react';

const StatusIcons = (props) => {
  return (
    <div className="StatusIcons">
      <div className="GoodIcon"/> <span>{props.good}</span> 
      <div className="MediumIcon" /> <span>{props.medium}</span>
      <div className="WarningIcon" /> <span>{props.warning}</span>
    </div>
  );
};

export default StatusIcons;
