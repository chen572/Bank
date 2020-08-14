import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

class NavIcon extends Component {

  render() {

    return (
      <li className="nav-item">
        <Link to={this.props.path} className="nav-link">
          <Icon className={this.props.logo} />
          <span className="link-text">{this.props.text}</span>
        </Link>
      </li>
    )
  }

}

export default NavIcon