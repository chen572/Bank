import React, { Component } from 'react'
import Transactions from './Transactions'
import Balance from './Balance'
import HomeTransactions from './HomeTransactions'

class Home extends Component {

  render() {

    return (
      <div className="home">
        <Balance balance={this.props.balance} />
        <div className="latest">
          <h1>Latest Transactions:</h1>
          <br/>
          <HomeTransactions transactions={this.props.transactions} />
          {/* <Transactions transactions={this.props.transactions} /> */}
        </div>
      </div>
    )
  }

}

export default Home