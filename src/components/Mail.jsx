import React from 'react';
import mail from '../styles/img/Mail.png';

const Mail = (props) => {

  return(
    <img className="Mail" src={mail} onClick={props.openMessages}/>
  );
}

export default Mail;
