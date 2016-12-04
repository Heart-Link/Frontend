import React, {Component} from 'react';
import { Link } from 'react-router';

class Menu extends Component{
  renderUserName(){
    if(this.props.userInfo.userName != null){
      return <p>{'Hello ' + this.props.userInfo.userName}</p>;
    } else{
      return <p>Not signed in</p>;
    }
  }
  render(){
    console.log(this.props, "Menu");
    return(
      <div className="Menu">
        {this.renderUserName()}
        <ul>
          <li onClick={this.props.handleFullListClick}>Full Patient List</li>
          <li onClick={this.props.handleNurseClick}>Nurse Recommend</li>
          <li><Link to={'/'}>Log Out</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
