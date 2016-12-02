import React, { Component, PropTypes } from 'react';
import DataTable from './DataTable';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, Hint, VerticalGridLines, AreaSeries} from 'react-vis';

class Detail extends Component {
  constructor (props) {
    super(props);

    this.closeDetail = this.closeDetail.bind(this);
    this.changeDropdown = this.changeDropdown.bind(this);
    this.onClickOverall = this.onClickOverall.bind(this);
    this.onClickBloodPressure = this.onClickBloodPressure.bind(this);
    this.onClickHeartRate = this.onClickHeartRate.bind(this);
    this.onClickStress = this.onClickStress.bind(this);
    this.onClickAlcohol = this.onClickAlcohol.bind(this);
    this.onClickSmoking = this.onClickSmoking.bind(this);
    this.onClickWeight = this.onClickWeight.bind(this);

    this.state = {
      currentData: 'Overall',
      dropdownOpen: false,
      bpHighData: null,
      bpLowData: null,
      heartRateData: null,
      stressData: null,
      alcoholData: null,
      smokingData: null,
      weightData: null,
    }
  }

  noDataAvailable() {
    this.props.actions.sendAlert({ message: 'Data not currently available for selected user.'});
  }
  
  closeDetail () {
    this.props.actions.setLeftSide({
      component: null,
      data: null
    });
  }

  changeDropdown () {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  onClickOverall () {
    this.setState({
      currentData: 'Overall',
      dropdownOpen: false
    });
  }

  onClickBloodPressure () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Blood Pressure',
      dropdownOpen: false,
      bpHighData: this.props.ui.leftSideData.map((dataEntry, index) => {
                    return { x: index, y: dataEntry.bpHigh }
                  }),
      bpLowData: this.props.ui.leftSideData.map((dataEntry, index) => {
                   return { x: index, y: dataEntry.bpLow }
                 })
    });
  }

  onClickHeartRate () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Heart Rate',
      dropdownOpen: false,
      heartRateData: this.props.ui.leftSideData.map((dataEntry, index) => {
                        return { x: index, y: dataEntry.averageHR }
                     })
    });
  }

  onClickStress () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Stress',
      dropdownOpen: false,
      stressData: this.props.ui.leftSideData.map((dataEntry, index) => {
                    return { x: index, y: dataEntry.stressLevel }
                  })
    });
  }

  onClickAlcohol () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Alcohol',
      dropdownOpen: false,
      alcoholData: this.props.ui.leftSideData.map((dataEntry, index) => {
                     return { x: index, y: dataEntry.alcoholIntake }
                   })
    });
  }

  onClickSmoking () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Smoking',
      dropdownOpen: false,
      smokingData: this.props.ui.leftSideData.map((dataEntry, index) => {
                     var individualEntry = (dataEntry.smoke) ? 1 : 0;
                     return { x: index, y: individualEntry}
                   })
    });
  }

  onClickWeight () {
    if(!this.props.ui.leftSideData || this.props.ui.leftSideData.length === 0) {
      this.noDataAvailable();
      return;
    }

    this.setState({
      currentData: 'Weight',
      dropdownOpen: false,
      weightData: this.props.ui.leftSideData.map((dataEntry, index) => {
                    return { x: index, y: dataEntry.weight }
                  })
    });
  }

  renderDropdown () {
    return (
      <div className="Dropdown">
        <div onClick={this.changeDropdown}>
          <h5>{this.state.currentData}</h5>
          <div className="DownArrow"/>
        </div>
        {this.renderOpenDropdown()}
      </div>
    );
  }

  renderOpenDropdown () {
    if (!this.state.dropdownOpen) return;

    return (
      <div className="OpenDropdown">
        <span onClick={this.onClickOverall}>Overall</span>
        <span onClick={this.onClickBloodPressure}>Blood Pressure</span>
        <span onClick={this.onClickHeartRate}>Heart Rate</span>
        <span onClick={this.onClickStress}>Stress</span>
        <span onClick={this.onClickAlcohol}>Alcohol</span>
        <span onClick={this.onClickSmoking}>Smoking</span>
        <span onClick={this.onClickWeight}>Weight</span>
      </div>
    );
  }

  renderData () {
    switch(this.state.currentData) {
      case 'Blood Pressure':
       if(this.state.bpHighData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>

              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.bpHighData}/>
              <AreaSeries
                color="#34A6B3"
                data={this.state.bpLowData}/>
              <XAxis title="Day" />
              <YAxis title="BPM" />
            </XYPlot>
          );
        }
      
      case 'Heart Rate':
        if(this.state.heartRateData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.heartRateData}/>
              <XAxis title="Day" />
              <YAxis title="BPM" />
            </XYPlot>
          );
        }
      
      case 'Stress':
        if(this.state.stressData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.stressData}/>
              <XAxis title="Day" />
              <YAxis title="Stress Level" />
            </XYPlot>
          );
        }
      
      case 'Alcohol':
        if(this.state.alcoholData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.alcoholData}/>
              <XAxis title="Day" />
              <YAxis title="Alcohol" />
            </XYPlot>
          );
        }
      
      case 'Smoking':
        if(this.state.smokeingData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.smokingData}/>
              <XAxis title="Day" />
              <YAxis title="Smoking" />
            </XYPlot>
          );
        }
      
      case 'Weight':
        if(this.state.weightData === null) {
          return (<div>No Data</div>)
        } else {
          return (
            <XYPlot
              width={900}
              height={500}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <AreaSeries
                color="#5BD1CF"
                data={this.state.weightData}/>
              <XAxis title="Day" />
              <YAxis title="Weight (lbs)" />
            </XYPlot>
          );
        }
      
      case 'Overall':
      default:
        return (
          <div className="Overall">
            <DataTable data={this.props.ui.leftSideData}/>
          </div>
        );
    }
  }

  render () {
    return (
      <div className="Detail">
        <div className="TopBar">
          {this.renderDropdown()}
          <div className="CloseButton" onClick={this.closeDetail}/>
        </div>

        <div className="Data">
          {this.renderData()}
        </div>
      </div>
    );
  }
};

export default Detail;
