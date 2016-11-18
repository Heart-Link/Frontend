import React, { Component } from 'react';
import PatientTable from './PatientTable';
import StatusIcons from './StatusIcons';

class PatientList extends Component {
  constructor (props) {
    super(props);

    this.handleSearchChange = this.handleSearchChange.bind(this);

    this.state = {
      searchValue: '',
      filteredList: this.props.patientList
    }
  }

  handleSearchChange (event) {
    this.setState({
      searchValue: event.target.value
    });

    if (event.target.value <= 0) {
      this.setState({ filteredList: this.props.patientList });
    };

    this.setState({
      filteredList: this.props.patientList.filter((patient) => {
        return (
          (patient.firstName + patient.lastName + patient.pid).toLowerCase().match( event.target.value.trim().toLowerCase() )
        );
      })
    })
  }

  goodCount () {
    if (!this.state.filteredList) return 0;
    let count = 0;

    this.state.filteredList.map((patient) => {
      if (patient.status > 7) count += 1;
    });

    return count;
  }

  mediumCount () {
    if (!this.state.filteredList) return 0;
    let count = 0;

    this.state.filteredList.map((patient) => {
      if (patient.status > 4 && patient.status < 8 ) count += 1;
    });

    return count;
  }

  warningCount () {
    if (!this.state.filteredList) return 0;
    let count = 0;

    this.state.filteredList.map((patient) => {
      if (patient.status < 5) count += 1;
    });

    return count;
  }

  render () {
    return (
      <div className="PatientList">
        <div className="TopRow">
          <input type="text" className="SearchBox" 
                 placeholder="Search for a patient..." 
                 onChange={this.handleSearchChange} />

          <StatusIcons good={this.goodCount()}
                       medium={this.mediumCount()}
                       warning={this.warningCount()}/>
        </div>

        <PatientTable patientList={this.state.filteredList}
                      setRightSide={this.props.actions.setRightSide}
                      flagged={this.props.ui.showFlagged} />
      </div>
    );
  }
};

export default PatientList;
