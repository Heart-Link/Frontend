import React,{Component, PropTypes} from 'react';

class PatientRow extends Component{
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.renderStatusIcon = this.renderStatusIcon.bind(this);
  }


  renderStatusIcon() {
    if (this.props.status < 5) return <div className='WarningIcon'/>
    if(this.props.status > 7) return <div className='GoodIcon'/>
    return <div className='MediumIcon'/>
  };

  handleChange(){
    this.props.openPatientSummary(this.props.id)
  }
  render(){
    return(
      <div className="PatientRow">
        <p className="PatientName" onClick={this.handleChange}>{this.props.firstName + " " + this.props.lastName}</p>
        <div className='PatientStatus'>{this.renderStatusIcon()}</div>
      </div>
    );
  }
}

PatientRow.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  openPatientSummary: PropTypes.func
};

export default PatientRow;
