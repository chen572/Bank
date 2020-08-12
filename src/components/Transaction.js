import React, { Component } from 'react'

class Transaction extends Component {

  render() {
    const { transaction } = this.props
    return (
      <div>
        {transaction.amount}
        {transaction.category}
        {transaction.vendor}
      </div>
    )
  }

}

export default Transaction