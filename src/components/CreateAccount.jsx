import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class CreateAccount extends Component {
  constructor () {
    super();

    this.submitForm = this.submitForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.state = {
      formAttempted: false,
      formValid: false,
      isLoading: false,
      firstName: '',
      firstNameValid: null,
      lastName: '',
      lastNameValid: null,
      patientID: '',
      patientIDValid: null,
      email: '',
      emailValid: null,
      provider: '',
      providerValid: null,
      bloodPressure: '',
      bloodPressureValid: null,
      steps: '',
      stepsValid: null,
      exercise: '',
      exerciseValid: null,
      heartRate: '',
      heartRateValid: null,
      alcoholIntake: '',
      alcoholIntakeValid: null,
      weight: '',
      weightValid: null,
      startDate: moment()
    }
  }

  submitForm (event) {
    event.preventDefault();
    console.log("SubmitForm");
  }

  handleDateChange (date) {
    this.setState({ startDate: date });
  }

  render () {
    return (
      <form className="CreateAccount"
            onSubmit={this.submitForm}>
        <div className="CreateAccount-PatientInfo Card">
          <div className="Card-left">
            <h6 className="noMargin">Patient Name:</h6>
              <input type="text"
                     placeholder="First Name"
                     value={this.state.firstName}
                     ref="firstName" />

              <input type="text"
                     placeholder="Last Name"
                     value={this.state.lastName}
                     ref="lastName" />

            <h6>Patient ID:</h6>
              <input type="text"
                     value={this.state.patientID}
                     ref="patientID" />

            <h6>Date of Birth:</h6>
            <DatePicker selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        showYearDropdown={true}/>
          </div>

          <div className="Card-right">
            <h6 className="noMargin">Patient Email:</h6>
              <input type="email"
                     value={this.state.email}
                     ref="email" />

            <h6>Provider:</h6>
              <input type="text"
                     value={this.state.provider}
                     ref="provider" />

            <h6>Sex:</h6>
          </div>
        </div>

        <div className="CreateAccount-HealthInfo Card">
          <div className="Card-left">
            <h6 className="noMargin">Blood Pressure:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.bloodPressure}
                     ref="bloodPressure" />
              <span>(mmHg)</span>

            <h6>Steps:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.steps}
                     ref="steps" />
              <span>(steps / day)</span>

            <h6>Exercise:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.exercise}
                     ref="exercise" />
              <span>(min / day)</span>
          </div>

          <div className="Card-right">
            <h6 className="noMargin">Heart Rate:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.hearRate}
                     ref="heartRate" />
              <span>(bpm)</span>

            <h6>Alcohol Intake:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.alcoholIntake}
                     ref="alcoholIntake" />
              <span>(drinks)</span>

            <h6>Weight:</h6>
              <input className="small-input"
                     type="text"
                     value={this.state.weight}
                     ref="weight" />
              <span>(lbs)</span>
          </div>
        </div>

        <div className="CreateAccount-buttons">
          <button className="Btn-med Btn-close Btn-left">
            Cancel
          </button>

          <button className="Btn-med Btn-norm"
                  type="submit">
            Create Account
          </button>
        </div>
      </form>
    );
  }
}

export default CreateAccount;
