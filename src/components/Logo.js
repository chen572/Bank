import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@material-ui/core';

class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <Link to="/" className="nav-link">
          <Icon className="fas fa-university fa-primary fa-secondary fa-2x"></Icon>
          <span className='link-text'>Bank</span>
        </Link>
      </div>
    );
  }
}

export default Logo;
