import React, { Component } from 'react'
import Transaction from './Transaction'

class HomeTransaction extends Component {

  render() {
    const { transaction } = this.props

    return (
      <li>
        <Transaction transaction={transaction} />
      </li>
    )
  }

}

export default HomeTransaction