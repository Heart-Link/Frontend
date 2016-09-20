import React, {Component} from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="Menu">
        <ul>
          <li><a href="#">Full Patient List</a></li>
          <li><a href="#">Nurse Recommended</a></li>
          <li><a href="#">Log Out</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
