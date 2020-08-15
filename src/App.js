import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Operations from './components/Operations';
import Transactions from './components/Transactions';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      open: false,
    };
  }

  componentDidMount() {
    this.refreshState();
  }

  async refreshState() {
    const transactions = await axios.get('/transactions');
    this.setState({
      transactions: transactions.data,
    });
  }

  addTransaction = async (transaction, operation) => {
    transaction.amount =
      operation === '+' ? transaction.amount : -transaction.amount;
    if (this.getBalance() - transaction.amount <= 0) {
      await axios.post('/transaction', { transaction });
      await this.refreshState();
    } else {
      alert('insufficient funds');
    }
  };

  getBalance = () => {
    return this.state.transactions.length
      ? this.state.transactions.reduce((a, e) => a + e.amount, 0)
      : 'Loading';
  };

  render() {
    return (
      <Router>
        <div className='background'>
          <div id="circle" className='circle-background'></div>
          <NavBar />
          <div className='App'>
            <Route
              exact
              path='/'
              render={() => (
                <Home
                  transactions={this.state.transactions.filter((t, i) => i < 6)}
                  balance={this.getBalance()}
                />
              )}
            />
            <Route
              exact
              path='/add'
              render={() => (
                <Operations
                  balance={this.getBalance()}
                  addTransaction={this.addTransaction}
                />
              )}
            />
            <Route
              exact
              path='/log'
              render={() =>
                this.state.transactions.length && (
                  <Transactions transactions={this.state.transactions} />
                )
              }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
