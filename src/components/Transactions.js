import React, { Component } from 'react'
import Transaction from './Transaction'

class Transactions extends Component {
  render() {

    return (
      <div id="log-transactions" className="operations">
        <div className="transactions">
          {this.props.transactions.map(t => <Transaction id="log-transaction" key={t._id} transaction={t} />)}
        </div>
      </div >
    )
  }

}

export default Transactions


