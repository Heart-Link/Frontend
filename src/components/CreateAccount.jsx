import React, { Component, PropTypes } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class CreateAccount extends Component {
  constructor (props) {
    super(props);

    this.closePage = this.closePage.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePatientIDChange = this.handlePatientIDChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleBloodPressureHighChange = this.handleBloodPressureHighChange.bind(this);
    this.handleBloodPressureLowChange = this.handleBloodPressureLowChange.bind(this);
    this.handleStepsChange = this.handleStepsChange.bind(this);
    this.handleExerciseChange = this.handleExerciseChange.bind(this);
    this.handleHeartRateChange = this.handleHeartRateChange.bind(this);
    this.handleAlcoholIntakeChange = this.handleAlcoholIntakeChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleMaleSexChange = this.handleMaleSexChange.bind(this);
    this.handleFemaleSexChange = this.handleFemaleSexChange.bind(this);
    this.handleProviderChange = this.handleProviderChange.bind(this);

    if (this.props.ui.rightSideData === null) {
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
        bloodPressureHigh: '',
        bloodPressureHighValid: false,
        bloodPressureLow: '',
        bloodPressureLowValid: false,
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
        dob: '',
        startDate: moment(),
        sex: '',
        sexValid: false,
        provider: '',
      }
    } else {
      this.state = {
        isLoading: false,
        formAttempted: false,
        formValid: false,
        firstName: this.props.ui.rightSideData.firstName,
        firstNameValid: false,
        lastName: this.props.ui.rightSideData.lastName,
        lastNameValid: false,
        patientID: this.props.ui.rightSideData.pid,
        patientIDValid: false,
        email: this.props.ui.rightSideData.patientemail,
        emailValid: false,
        bloodPressureHigh: this.props.ui.rightSideData.vitalsbph,
        bloodPressureHighValid: false,
        bloodPressureLow: this.props.ui.rightSideData.vitalsbpl,
        bloodPressureLowValid: false,
        steps: this.props.ui.rightSideData.steps,
        stepsValid: false,
        exercise: this.props.ui.rightSideData.exercisetime,
        exerciseValid: false,
        heartRate: this.props.ui.rightSideData.vitalsbpm,
        heartRateValid: false,
        alcoholIntake: this.props.ui.rightSideData.vitalsalcohol,
        alcoholIntakeValid: false,
        weight: this.props.ui.rightSideData.weight,
        weightValid: false,
        dob: this.props.ui.rightSideData.dob,
        startDate: moment(),
        sex: this.props.ui.rightSideData.sex,
        sexValid: false,
        provider: this.props.ui.rightSideData.provider,
      }
    }
  }

  componentDidUpdate () {
    if (this.state.formValid) {
      this.props.actions.createAccount({
        data: {
          dob: this.state.startDate,
          emrid: this.state.patientID,
          email: this.state.email,
          exercisetime: this.state.exercise,
          firstname: this.state.firstName,
          gender: this.state.sex,
          lastname: this.state.lastName,
          managerid: this.props.userInfo.providerid,
          patientemail: this.state.email,
          provider: this.state.provider,
          status: 5,
          steps: this.state.steps,
          vitalsbpm: this.state.vitalsbpm,
          vitalsalcohol: this.state.alcoholIntake,
          vitalsbph: this.state.bloodPressureHigh,
          vitalsbpl: this.state.bloodPressureLow,
          vitalsweight: this.state.weight,
          providerid: this.props.userInfo.providerID,
        },
        token: this.props.userInfo.jwt
      });

      this.props.actions.setRightSide({
        component: null,
        data: null
      });
    }

    else if (this.state.formAttempted && !this.state.formValid && this.state.isLoading) {
      this.setState({
        formValid: this.formValid(),
        isLoading: false
      });
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
      bloodPressureHighValid: this.validateNumber(this.state.bloodPressureHigh),
      bloodPressureLowValid: this.validateNumber(this.state.bloodPressureLow),
      stepsValid: this.validateNumber(this.state.steps),
      exerciseValid: this.validateNumber(this.state.exercise),
      heartRateValid: this.validateNumber(this.state.heartRate),
      alcoholIntakeValid: this.validateNumber(this.state.alcoholIntake),
      weightValid: this.validateNumber(this.state.weight),
      sexValid: this.validateSex()
    });
  }

  formValid () {
    return (
      this.state.firstNameValid === true &&
      this.state.lastNameValid === true &&
      this.state.patientIDValid === true &&
      this.state.emailValid === true &&
      this.state.bloodPressureHighValid === true &&
      this.state.bloodPressureLowValid === true &&
      this.state.stepsValid === true &&
      this.state.exerciseValid === true &&
      this.state.heartRateValid === true &&
      this.state.alcoholIntakeValid === true &&
      this.state.weightValid === true &&
      this.state.sexValid === true
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

  validateSex () {
    if (this.state.sex) return true;
    return false;
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

  handleProviderChange (event) {
    this.setState({ provider: event.target.value });
  }

  handleBloodPressureHighChange (event) {
    this.setState({ bloodPressureHigh: event.target.value });
  }

  handleBloodPressureLowChange (event) {
    this.setState({ bloodPressureLow: event.target.value });
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

  handleMaleSexChange () {
    this.setState({ sex: 'male' });
  }

  handleFemaleSexChange () {
    this.setState({ sex: 'female' });
  }

  maleClassNames () {
    if (this.state.sex === 'male') return 'sexSelector_selected';
    return 'sexSelector_radio';
  }

  femaleClassNames () {
    if (this.state.sex === 'female') return 'sexSelector_selected';
    return 'sexSelector_radio';
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
                     onChange={this.handleProviderChange}
                     value={this.state.provider}
                     ref="provider" />

            <h6>Sex:</h6>
              <div className="sexSelector" onClick={this.handleMaleSexChange}>
                <div className={this.maleClassNames()}/>
                <span>Male</span>
              </div>
              <div className="sexSelector" onClick={this.handleFemaleSexChange}>
                <div className={this.femaleClassNames()}/>
                <span>Female</span>
              </div>
          </div>
        </div>

        <div className="`Create`Account-HealthInfo Card">
          <div className="Card-left">
            <h6 className="noMargin">Blood Pressure:</h6>
              <input className={(this.state.formAttempted && !this.state.bloodPressureHighValid) ? "small-input-bp input-error" : "small-input-bp"}
                     type="text"
                     value={this.state.bloodPressureHigh}
                     onChange={this.handleBloodPressureHighChange}
                     ref="bloodPressureHigh" />
              <span className="bpSeperator">/</span>
              <input className={(this.state.formAttempted && !this.state.bloodPressureLowValid) ? "small-input-bp_low input-error" : "small-input-bp_low"}
                     type="text"
                     value={this.state.bloodPressureLow}
                     onChange={this.handleBloodPressureLowChange}
                     ref="bloodPressureLow" />
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
