import React, { Component, PropTypes } from 'react';
import DataTable from './DataTable';

class Detail extends Component {
  constructor () {
    super();

    this.closeDetail = this.closeDetail.bind(this);
    this.changeDropdown = this.changeDropdown.bind(this);

    this.state = {
      currentData: 'Overall',
      dropdownOpen: false
    }
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

  renderDropdown () {
    return (
      <div className="Dropdown">
        <div onClick={this.changeDropdown}>
          <h4>{this.state.currentData}</h4>
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
        <span>Overall</span>
        <span>Blood Pressure</span>
        <span>Heart Rate</span>
        <span>Stress</span>
        <span>Alcohol</span>
        <span>Smoking</span>
        <span>Weight</span>
        <span>Daily</span>
      </div>
    );
  }

  renderData () {
    return (
      <div className="Overall">
        <DataTable />
      </div>
    );
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
