import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: []
    }
  }

  componentDidMount() {
    this.refreshState()
  }

  async refreshState() {
    const transactions = await axios.get('http://localhost:3001/transactions')
    this.setState({
      transactions: transactions.data
    })
  }

  addTransaction = async (transaction, operation) => {
    transaction.amount = operation === '+' ? transaction.amount : (-transaction.amount)
    await axios.post('http://localhost:3001/transaction', { transaction })
    await this.refreshState()
  }

  getBalance = () => {
    return this.state.transactions.length
      ? this.state.transactions.reduce((a, e) => a + e.amount, 0)
      : "Loading"
  }

  render() {
    return (
      <div className="App">
        <h1 className="balance">{this.getBalance()}</h1>
        <Operations addTransaction={this.addTransaction} />
        {this.state.transactions.length && <Transactions transactions={this.state.transactions} />}
      </div>
    )
  }
}

export default App