import React, { Component, PropTypes } from 'react';
import TableRow from './TableRow';

class PatientTable extends Component {
  constructor (props) {
    super(props);

    this.patientIDClickHandler = this.patientIDClickHandler.bind(this);
    this.patientNameClickHandler = this.patientNameClickHandler.bind(this);
    this.statusClickHandler = this.statusClickHandler.bind(this);
    this.providerClickHandler = this.providerClickHandler.bind(this);
    this.messagesClickHandler = this.messagesClickHandler.bind(this);

    this.state = {
      direction: 0,
      patientList: this.props.patientList,
      sort: 'status',
    };
  }

  patientIDClickHandler (event) {
    event.preventDefault();

    if(this.state.sort === 'patientID') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          patientList: this.state.patientList.sort((a, b) => { 
            return b.pid - a.pid 
          })
        });

      } else {
        this.setState({ 
          direction: 0,
          patientList: this.state.patientList.sort((a, b) => { 
            return a.pid - b.pid 
          })
        });
      }

      return;
    }

    this.setState({
      sort: 'patientID',
      direction: 0,
      patientList: this.state.patientList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  patientNameClickHandler (event) {
    event.preventDefault();

    if(this.state.sort === 'patientName') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          patientList: this.state.patientList.sort((a, b) => {
            const nameA=(a.lastName + a.firstName).toLowerCase();
            const nameB=(b.lastName + b.firstName).toLowerCase();

            if (nameA > nameB) return -1;
            if (nameA < nameB) return 1;

            return 0;
          })
        });
      } else {
        this.setState({ 
          direction: 0,
          patientList: this.state.patientList.sort((a, b) => {
            const nameA=(a.lastName + a.firstName).toLowerCase();
            const nameB=(b.lastName + b.firstName).toLowerCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;

            return 0;
          })
        });
      }
      return;
    }

    this.setState({
      sort: 'patientName',
      direction: 0,
      patientList: this.state.patientList.sort((a, b) => {
        const nameA=(a.lastName + a.firstName).toLowerCase();
        const nameB=(b.lastName + b.firstName).toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;

        return 0;
      })
    });
  }

  statusClickHandler (event) {
    event.preventDefault();

    if(this.state.sort === 'status') {
      if (this.state.direction === 0) {
        this.setState({ direction: 1 });
      } else {
        this.setState({ direction: 0 });
      }
      return;
    }

    this.setState({
      sort: 'status',
      direction: 0
    });
  }

  providerClickHandler (event) {
    event.preventDefault();

    if(this.state.sort === 'provider') {
      if (this.state.direction === 0) {
        this.setState({ 
          direction: 1,
          patientList: this.state.patientList.sort((a, b) => {
            const providerA=(a.provider).toLowerCase();
            const providerB=(b.provider).toLowerCase();

            if (providerA > providerB) return -1;
            if (providerA < providerB) return 1;

            return 0;
          })
        });
      } else {
        this.setState({ 
          direction: 0,
          patientList: this.state.patientList.sort((a, b) => {
            const providerA=(a.provider).toLowerCase();
            const providerB=(b.provider).toLowerCase();

            if (providerA < providerB) return -1;
            if (providerA > providerB) return 1;

            return 0;
          })
       });
      }
      return;
    }

    this.setState({
      sort: 'provider',
      direction: 0,
      patientList: this.state.patientList.sort((a, b) => {
          const providerA=(a.provider).toLowerCase();
          const providerB=(b.provider).toLowerCase();

          if (providerA < providerB) return -1;
          if (providerA > providerB) return 1;

          return 0;
        })
    });
  }

  messagesClickHandler (event) {
    event.preventDefault();

    if(this.state.sort === 'messages') {
      if (this.state.direction === 0) {
        this.setState({ direction: 1 });
      } else {
        this.setState({ direction: 0 });
      }
      return;
    }

    this.setState({
      sort: 'messages',
      direction: 0
    });
  }

  patientIDClassName () {
    if (this.state.sort === 'patientID') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  patientNameClassName () {
    if (this.state.sort === 'patientName') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  statusClassName () {
    if (this.state.sort === 'status') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  providerClassName () {
    if (this.state.sort === 'provider') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  messagesClassName () {
    if (this.state.sort === 'messages') {
      if (this.state.direction === 0){
        return 'DownArrow_active';
      }
      return 'UpArrow_active';
    }

    return 'DownArrow';
  }

  renderRows () {
    if (this.state.patientList.length === 0) return <h2>Patient List Empty</h2>;

    return (this.state.patientList).map((row, index) => {
      return <TableRow key={index}
                       patient={row} />;
    });
  }

  sortByID () {
    this.setState({
      patientList: this.state.patientList.sort((a, b) => { 
                     return a.pid - b.pid 
                   })
    });
  }

  render () {
    return (
      <div className="PatientTable">
        <div className="Headers">
          <div>
            <p>Patient ID</p>
            <div className={this.patientIDClassName()} onClick={this.patientIDClickHandler} />
          </div>
          <div>
            <p>Patient Name</p>
            <div className={this.patientNameClassName()} onClick={this.patientNameClickHandler} />
          </div>
          <div>
            <p>Status</p>
            <div className={this.statusClassName()} onClick={this.statusClickHandler}/>
          </div>
          <div>
            <p>Provider</p>
            <div className={this.providerClassName()} onClick={this.providerClickHandler}/>
          </div>
          <div>
            <p>Messages</p>
            <div className={this.messagesClassName()} onClick={this.messagesClickHandler}/>
          </div>
        </div>

        {this.renderRows()}
      </div>
    );
  }
};

PatientTable.propTypes = {
  patientList: PropTypes.array.isRequired
};

export default PatientTable;
