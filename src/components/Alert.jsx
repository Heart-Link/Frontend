import React, { Component, PropTypes } from 'react';

class Alert extends Component {
  constructor () {
    super ();

    this.unmountAlert = this.unmountAlert.bind(this);
  }

  componentDidMount () {
    setTimeout(this.unmountAlert, 3000);
  }

  unmountAlert () {
    this.props.sendAlert({ message: null });
  }

  render () {
    return (
      <div className="Alert">
        <h3>{this.props.message}</h3>
      </div>
    );
  }
};

Alert.PropTypes = {
  sendAlert: PropTypes.func.isRequired,
  message: PropTypes.string,
};

Alert.defaultProps = {
  message: 'This action is currently unavailable.'
};

export default Alert;
