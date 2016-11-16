import React, { Component, PropTypes } from 'react';
import Logo from './Logo';

class Navbar extends Component {
  constructor () {
    super();

    this.hamburgerMenuClassName = this.hamburgerMenuClassName.bind(this);
  }

  hamburgerMenuClassName(){
    if(this.props.showMenu){
      return 'HamburgerActive';
    }
    return 'HamburgerInactive';
  }

  render () {
    return (
      <div className="Navbar">
        <div className="Navbar-logo">
          <Logo />
          <h6>Heart Link</h6>
        </div>
        <div className="Navbar-navigation">
          <div className={this.hamburgerMenuClassName()} onClick={this.props.handleNavBarClick}>
           {/*<div className="Line1"></div>
            <div className="Line2"></div>
            <div className="Line3"></div>*/}
          </div>
        </div>
      </div>
    );
  }
};

Navbar.propTypes = {
  actions: PropTypes.object.isRequired
};

export default Navbar;
