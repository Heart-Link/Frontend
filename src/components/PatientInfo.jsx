import React, { Component, PropTypes } from 'react';
import Detail from './Detail';
import Inbox from './Inbox';

class PatientInfo extends Component {
  constructor () {
    super();

    this.showPatientDetail = this.showPatientDetail.bind(this);
    this.openInbox = this.openInbox.bind(this);
    this.closeInbox = this.closeInbox.bind(this);
    this.toggleFlag = this.toggleFlag.bind(this);

    this.state = {
      inbox: false
    }
  }

  showPatientDetail () {
    this.props.actions.setLeftSide({
      component: Detail,
      data: null
    });
    this.props.actions.getPatientDetail({ 
      id: this.props.ui.rightSideData.pid,
      token: this.props.userInfo.jwt
    });
  }
  
  toggleFlag () {
    this.props.actions.toggleFlag({ 
      id: this.props.ui.rightSideData.pid,
      token: this.props.userInfo.jwt
    })
  }

  openInbox () {
    this.props.actions.getMessages({ 
      id: this.props.ui.rightSideData.pid,
      token: this.props.userInfo.jwt
    });

    this.setState({ inbox: true });
  }

  closeInbox () {
    this.setState({ inbox: false });
  }

  renderAge () {
    if (!this.props.ui.rightSideData.dob) return '--'

    const date = new Date();
    const currYear = date.getFullYear();
    const currMonth = date.getMonth() + 1;
    const currDay = date.getDate();
    const patientYear = this.props.ui.rightSideData.dob.substring(0, 4);
    const patientMonth = this.props.ui.rightSideData.dob.substring(6, 8);
    const patientDay = this.props.ui.rightSideData.dob.substring(9, 11);
    
    if (patientMonth === currMonth) {
      if (patientDay <= currDay) {
        return currYear - patientYear;
      }
      return currYear - patientYear - 1;
    }

    if (patientMonth < currMonth) {
      return currYear - patientYear - 1;
    }

    return currYear - patientYear;
  }

  renderSex () {
    if (this.props.ui.rightSideData.sex === 'female') return 'F'
    if (this.props.ui.rightSideData.sex === 'male') return 'M';

    return '--';
  }

  renderLastInputDate () {
    if (!this.props.ui.rightSideData.lastInput.entryInfo) return '--';

    const date = new Date(this.props.ui.rightSideData.lastInput.entryInfo)
    const lastInputYear = date.getFullYear();
    const lastInputMonth = date.getMonth();
    const lastInputDay = date.getDate();

    return lastInputMonth + "/" + lastInputDay + "/" + lastInputYear;
  }

  renderStatusIcon () {
    if (this.props.ui.rightSideData.status < 5) return <div className="WarningIcon"/>
    if (this.props.ui.rightSideData.status > 7) return <div className="GoodIcon"/>
    return <div className="MediumIcon"/>
  }

  renderProviderButton () {
    if (this.props.userInfo.isDoctor) {
      if (this.props.ui.rightSideData.isFlagged) {
        return (
          <button className="Btn-med Btn-left Btn-norm"
                  onClick={this.toggleFlag} >
            Unflag Patient
          </button>
        )
      }

      return;
    }

    //For Nurse case manager
    if (this.props.ui.rightSideData.isFlagged) {
      return (
        <button className="Btn-med Btn-left Btn-norm"
                onClick={this.toggleFlag} >
          Unflag for Doctor
        </button>
      )
    }

    return (
      <button className="Btn-med Btn-left Btn-norm"
              onClick={this.toggleFlag} >
        Send to Provider
      </button>
    )
  }

  renderStats () {
    if (this.state.inbox) return <Inbox actions={this.props.actions}
                                        closeInbox={this.closeInbox}
                                        messageList={this.props.ui.messageList}
                                        id={this.props.ui.rightSideData.pid} 
                                        userInfo={this.props.userInfo} />;

    return (
      <div>
        <div className="PatientInfo-Messages Card">
          <h5>Messages: 1</h5>
          <button className="Btn-norm" onClick={this.openInbox}>
            Open Inbox
          </button>
        </div>

        <div className="PatientInfo-LastInput Card">
          <div className="Card-Row">
            <h4 className="Card-Row_topLeft">Last Input</h4>
            <h4 className="Card-Row_topRight">{this.renderLastInputDate()}</h4>
          </div>

          <div className="Stats">
            <div className="Card-left">
              <p>BP: <span>{this.props.ui.rightSideData.lastInput.bpHigh + "/" + this.props.ui.rightSideData.lastInput.bpLow} mmHg</span></p>
              <p>Heart Rate: <span>{this.props.ui.rightSideData.lastInput.averageHR || '--'} bpm</span></p>
              <p>Alcohol: <span>{this.props.ui.rightSideData.lastInput.alcoholIntake || '--'} drinks</span></p>
              <p>Smoke: <span>false</span></p>
            </div>

            <div className="Card-right">
              <p>Weight: <span>{this.props.ui.rightSideData.lastInput.stressLevel || '--'} lbs</span></p>
              <p>Stress: <span>{this.props.ui.rightSideData.lastInput.stressLevel || '--'}</span></p>
              <p>Checklist: <span>Passed</span></p>
            </div>
          </div>
        </div>

        <button className="Btn-large Btn-norm">
          Update Patient Recommended Values
        </button>

        {this.renderProviderButton()}

        <button className="Btn-med Btn-norm PatientDetailBtn" onClick={this.showPatientDetail}>
          View Patient Detail
        </button>
      </div>
    )
  }

  render () {
    return (
      <div className="PatientInfo">
        <div className="PatientInfo-Detail Card">
          <div className="Card-Row">
            <h4 className="Card-Row_topLeft">
              {this.props.ui.rightSideData.firstName + " " + this.props.ui.rightSideData.lastName}
            </h4>
            <h4 className="Card-Row_topRight">
              {this.props.ui.rightSideData.pid || '--'}
            </h4>
          </div>

          <div className="Stats">
            <div className="sixth">
              <p>Sex</p>
              <h5>{this.renderSex()}</h5>
            </div>

            <div className="sixth">
              <p>Age</p>
              <h5>{this.renderAge()}</h5>
            </div>

            <div className="sixth">
              <p>Weight</p>
              <h5>{this.props.ui.rightSideData.lastInput.stressLevel || '--'}</h5>
            </div>

            <div className="sixth">
              <p>Status</p>
              {this.renderStatusIcon()}
            </div>

            <div className="third">
              <p>Provider</p>
              <h5>{this.props.ui.rightSideData.provider || '--'}</h5>
            </div>
          </div>
        </div>

        {this.renderStats()}
      </div>
    );
  }
}

export default PatientInfo;
