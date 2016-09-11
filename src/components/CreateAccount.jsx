import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class CreateAccount extends Component {
  constructor () {
    super();

    this.closePage = this.closePage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePatientIDChange = this.handlePatientIDChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleBloodPressureChange = this.handleBloodPressureChange.bind(this);
    this.handleStepsChange = this.handleStepsChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleHeartRateChange = this.handleHeartRateChange.bind(this);
    this.handleAlcoholIntakeChange = this.handleAlcoholIntakeChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);

    this.state = {
      isLoading: false,
      formAttempted: false,
      formValid: false,
      firstName: '',
      firstNameValid: false,
      lastName: '',
      lastNameValid: false,
      patientID: '',
      patientIDValid: false,
      email: '',
      emailValid: false,
      bloodPressure: '',
      bloodPressureValid: false,
      steps: '',
      stepsValid: false,
      exercise: '',
      exerciseValid: false,
      heartRate: '',
      heartRateValid: false,
      alcoholIntake: '',
      alcoholIntakeValid: false,
      weight: '',
      weightValid: false,
      startDate: moment()
    }
  }

  componentDidUpdate () {
    if (this.state.formValid) {
      console.log("API CALL HERE TO SUBMIT FORM");
      this.props.actions.setRightSide({
        component: null,
        data: null
      });
    }

    if (this.state.formAttempted && !this.state.formValid && this.state.isLoading) {
      this.setState({
        formValid: this.formValid(),
        isLoading: false
      });
      this.props.actions.sendAlert({ message: 'Incorrect data in form. Please try again.' });
    }
  }

  closePage (event) {
    event.preventDefault();

    this.props.actions.setRightSide({
      component: null,
      data: null
    });
  }

  submitForm (event) {
    event.preventDefault();

    this.validateForm();
  }

  validateForm () {
    this.setState({
      isLoading: true,
      formAttempted: true,
      firstNameValid: this.validateText(this.state.firstName),
      lastNameValid: this.validateText(this.state.lastName),
      patientIDValid: this.validateNumber(this.state.patientID),
      emailValid: this.validateEmail(),
      bloodPressureValid: this.validateNumber(this.state.bloodPressure),
      stepsValid: this.validateNumber(this.state.steps),
      exerciseValid: this.validateNumber(this.state.exercise),
      heartRateValid: this.validateNumber(this.state.heartRate),
      alcoholIntakeValid: this.validateNumber(this.state.alcoholIntake),
      weightValid: this.validateNumber(this.state.weight),
    });
  }

  formValid () {
    return (
      this.state.firstNameValid === true &&
      this.state.lastNameValid === true &&
      this.state.patientIDValid === true &&
      this.state.emailValid === true &&
      this.state.bloodPressureValid === true &&
      this.state.stepsValid === true &&
      this.state.exerciseValid === true &&
      this.state.heartRateValid === true &&
      this.state.alcoholIntakeValid === true &&
      this.state.weightValid === true
    );
  }

  validateText (value) {
    const regex = /^(?!\s*$)[a-zA-Z ]*$/;

    return regex.test(value);
  }

  validateNumber (value) {
    const regex = /^(?!\s*$)[0-9]*$/;

    return regex.test(value);
  }

  validateEmail () {
    const regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|xyz|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;

    return regex.test(this.state.email);
  }

  handleFirstNameChange (event) {
    this.setState({ firstName: event.target.value });
  }

  handleLastNameChange (event) {
    this.setState({ lastName: event.target.value });
  }

  handlePatientIDChange (event) {
    this.setState({ patientID: event.target.value });
  }

  handleDateChange (date) {
    this.setState({ startDate: date });
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value });
  }

  handleBloodPressureChange (event) {
    this.setState({ bloodPressure: event.target.value });
  }

  handleStepsChange (event) {
    this.setState({ steps: event.target.value });
  }

  handleExerciseChange (event) {
    this.setState({ exercise: event.target.value });
  }

  handleHeartRateChange (event) {
    this.setState({ heartRate: event.target.value });
  }

  handleAlcoholIntakeChange (event) {
    this.setState({ alcoholIntake: event.target.value });
  }

  handleWeightChange (event) {
    this.setState({ weight: event.target.value });
  }

  render () {
    return (
      <form className="CreateAccount"
            onSubmit={this.submitForm}>
        <div className="CreateAccount-PatientInfo Card">
          <div className="Card-left">
            <h6 className="noMargin">Patient Name:</h6>
              <input className={(this.state.formAttempted && !this.state.firstNameValid) ? "input-error" : null}
                     type="text"
                     placeholder="First Name"
                     onChange={this.handleFirstNameChange}
                     value={this.state.firstName}
                     ref="firstName" />

              <input className={(this.state.formAttempted && !this.state.lastNameValid) ? "input-error" : null}
                     type="text"
                     placeholder="Last Name"
                     onChange={this.handleLastNameChange}
                     value={this.state.lastName}
                     ref="lastName" />

            <h6>Patient ID:</h6>
              <input className={(this.state.formAttempted && !this.state.patientIDValid) ? "input-error" : null}
                     type="text"
                     value={this.state.patientID}
                     onChange={this.handlePatientIDChange}
                     ref="patientID" />

            <h6>Date of Birth:</h6>
            <DatePicker selected={this.state.startDate}
                        onChange={this.handleDateChange}
                        showYearDropdown={true}/>
          </div>

          <div className="Card-right">
            <h6 className="noMargin">Patient Email:</h6>
            <input className={(this.state.formAttempted && !this.state.emailValid) ? "input-error" : null}
                   type="email"
                   value={this.state.email}
                   onChange={this.handleEmailChange}
                   ref="email" />

            <h6>Provider:</h6>
              <input type="text"
                     ref="provider" />

            <h6>Sex:</h6>
          </div>
        </div>

        <div className="CreateAccount-HealthInfo Card">
          <div className="Card-left">
            <h6 className="noMargin">Blood Pressure:</h6>
              <input className={(this.state.formAttempted && !this.state.bloodPressureValid) ? "small-input input-error" : "small-input"}
                     type="text"
                     value={this.state.bloodPressure}
                     onChange={this.handleBloodPressureChange}
                     ref="bloodPressure" />
              <span>(mmHg)</span>

            <h6>Steps:</h6>
              <input className={(this.state.formAttempted && !this.state.stepsValid) ? "small-input input-error" : "small-input"}
                     type="text"
                     value={this.state.steps}
                     onChange={this.handleStepsChange}
                     ref="steps" />
              <span>(steps / day)</span>

            <h6>Exercise:</h6>
              <input className={(this.state.formAttempted && !this.state.exerciseValid) ? "small-input input-error" : "small-input"}
                     value={this.state.exercise}
                     onChange={this.handleExerciseChange}
                     type="text"
                     ref="exercise" />
              <span>(min / day)</span>
          </div>

          <div className="Card-right">
            <h6 className="noMargin">Heart Rate:</h6>
              <input className={(this.state.formAttempted && !this.state.heartRateValid) ? "small-input input-error" : "small-input"}
                     type="text"
                     value={this.state.heartRate}
                     onChange={this.handleHeartRateChange}
                     ref="heartRate" />
              <span>(bpm)</span>

            <h6>Alcohol Intake:</h6>
              <input className={(this.state.formAttempted && !this.state.alcoholIntakeValid) ? "small-input input-error" : "small-input"}
                     type="text"
                     value={this.state.alcoholIntake}
                     onChange={this.handleAlcoholIntakeChange}
                     ref="alcoholIntake" />
              <span>(drinks)</span>

            <h6>Weight:</h6>
              <input className={(this.state.formAttempted && !this.state.weightValid) ? "small-input input-error" : "small-input"}
                     type="text"
                     value={this.state.weight}
                     onChange={this.handleWeightChange}
                     ref="weight" />
              <span>(lbs)</span>
          </div>
        </div>

        <div className="CreateAccount-buttons">
          <button className="Btn-med Btn-close Btn-left"
                  onClick={this.closePage}>
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
