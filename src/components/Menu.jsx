import React, {Component} from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="Menu">
        <ul>
          <li onClick={this.props.handleFullListClick}>Full Patient List</li>
          <li onClick={this.props.handleNurseClick}>Nurse Recommended</li>
          <li>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
