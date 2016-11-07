import React,{Component, PropTypes} from 'react';

class PatientRow extends Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    this.props.openPatientSummary(this.props.id)
  }
  render(){
    return(
      <div className="PatientRow">
        <p className="PatientName" onClick={this.handleChange}>{this.props.firstname + " " + this.props.lastname}</p>
        <p className="PatientStatus">{this.props.status}</p>
      </div>
    );
  }
}
PatientRow.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  openPatientSummary: PropTypes.func
};

export default PatientRow;
