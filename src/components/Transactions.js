import React, { Component } from 'react'
import Transaction from './Transaction'

class Transactions extends Component {
  render() {

    return (
      <div className="transactions">
        {this.props.transactions.map(t => <Transaction key={t._id} transaction={t} />)}
      </div>
    )
  }

}

export default Transactions