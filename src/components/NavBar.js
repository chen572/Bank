import React, { Component } from 'react';
import Logo from './Logo'
import NavIcon from './NavIcon'

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      logos: [
        { path: '/', logo: 'fas fa-user-circle fa-primary fa-secondary fa-2x', text: 'Home' },
        { path: '/add', logo: 'fas fa-wallet fa-2x fa-primary fa-secondary', text: 'Add'},
        { path: '/log', logo: 'fas fa-book fa-2x fa-primary fa-secondary', text: 'Log'}
      ],
    };
  }

  render() {
    return (
      <div className='navbar'>
        <ul className='navbar-nav'>
          <Logo />
          {this.state.logos.map(i => <NavIcon key={i.path} path={i.path} logo={i.logo} text={i.text} />)}
        </ul>
      </div>
    );
  }
}

export default NavBar;
