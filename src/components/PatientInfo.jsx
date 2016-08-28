import React, { Component, PropTypes } from 'react';

class PatientInfo extends Component {
  render () {
    return (
      <div className="PatientInfo">
        <div className="PatientInfo-Detail Card">
          <div className="Card-Row">
            <h4 className="Card-Row_topLeft">Patient Name</h4>
            <h4 className="Card-Row_topRight">123456</h4>
          </div>

          <div className="Stats">
            <div className="sixth">
              <p>Sex</p>
              <h5>M</h5>
            </div>

            <div className="sixth">
              <p>Age</p>
              <h5>54</h5>
            </div>

            <div className="sixth">
              <p>Weight</p>
              <h5>175</h5>
            </div>

            <div className="sixth">
              <p>Status</p>
              <h5>Check</h5>
            </div>

            <div className="third">
              <p>Provider</p>
              <h5>Pamintuan</h5>
            </div>
          </div>
        </div>

        <div className="PatientInfo-Messages Card">
          <h5>Messages: 1</h5>
          <button className="Btn-norm">
            Open Inbox
          </button>
        </div>

        <div className="PatientInfo-LastInput Card">
          <div className="Card-Row">
            <h4 className="Card-Row_topLeft">Last Input</h4>
            <h4 className="Card-Row_topRight">08/30/2016</h4>
          </div>

          <div className="Stats">
            <div className="Card-left">
              <p>BP: <span>145 / 92 mmHg</span></p>
              <p>Heart Rate: <span>88 bpm</span></p>
              <p>RAFT: <span>Answer</span></p>
              <p>Alcohol: <span>3 drinks</span></p>
            </div>

            <div className="Card-right">
              <p>Smoke: <span>Yes</span></p>
              <p>Weight: <span>175 lbs</span></p>
              <p>Stress: <span>8</span></p>
              <p>Checklist: <span>Passed</span></p>
            </div>
          </div>
        </div>

        <button className="Btn-large Btn-norm">
          Update Patient Recommended Values
        </button>

        <button className="Btn-med Btn-left Btn-norm">
          Send to Provider
        </button>

        <button className="Btn-med Btn-norm">
          View Patient Detail
        </button>

      </div>
    );
  }
}

export default PatientInfo;
