import React, { Component } from 'react';

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      vendor: '',
      category: '',
    };
  }

  onChangeHandle = (e) => {
    const updatedState = { ...this.state };
    updatedState[e.target.id] = e.target.value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.amount}
          onChange={this.onChangeHandle}
          id='amount'
          type='text'
          placeholder='Amount'
        />
        <input
          value={this.state.vendor}
          onChange={this.onChangeHandle}
          id='vendor'
          type='text'
          placeholder='Vendor'
        />
        <input
          value={this.state.category}
          onChange={this.onChangeHandle}
          id='category'
          type='text'
          placeholder='Category'
        />
        <button
          onClick={() => this.props.addTransaction({ ...this.state }, '+')}
          className='deposit'
        >
          Deposit
        </button>
        <button
          onClick={() => this.props.addTransaction({ ...this.state }, '-')}
          className='withdraw'
        >
          Withdraw
        </button>
      </div>
    );
  }
}

export default Operations;
