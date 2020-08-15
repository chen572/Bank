import React, { Component } from 'react';

class Transaction extends Component {
  render() {
    const { transaction } = this.props;
    return (
      <div id={this.props.id} className='transaction'>
        <span className='vendor'>{transaction.vendor}</span>
        <span className='category'>{transaction.category}</span>
        <span className='amount'>{transaction.amount}</span>
        <span className='desc'>
          {transaction.amount < 0 ? 'Withdraw' : 'Deposite'}
        </span>
      </div>
    );
  }
}

export default Transaction;
