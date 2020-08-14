import React, { Component } from 'react'
import HomeTransaction from './HomeTransaction'

class HomeTransactions extends Component {

  render() {

    return (
      <div className="home-transactions">
        <ul>
          {this.props.transactions.map(t => <HomeTransaction transaction={t} />)}
        </ul>
      </div>
    )
  }

}

export default HomeTransactions