import React,{Component, PropTypes} from 'react';

class PatientRow extends Component{
  render(){
    return(
      <div className="PatientRow">
        <p className="PatientName">{this.props.firstname + " " + this.props.lastname}</p>
        <p className="PatientStatus">{this.props.status}</p>
      </div>
    );
  }
}
PatientRow.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired
};

export default PatientRow;
