import React, { Component } from 'react';

class Operations extends Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      vendor: '',
      category: '',
    };
  }

  componentWillUnmount() {
    document.getElementById('circle').classList.remove('add-page');
  }

  componentDidMount() {
    document.getElementById('circle').classList.add('add-page');
  }

  onChangeHandle = (e) => {
    const updatedState = { ...this.state };
    updatedState[e.target.id] = e.target.value;
    this.setState(updatedState);
  };

  render() {
    return (
      <div className='operations'>
        <h1 className='balance'>New Transaction</h1>
        <div className='input-area'>
          <input
            className='operations-input'
            value={this.state.amount}
            onChange={this.onChangeHandle}
            id='amount'
            type='text'
            required
          />
          <label htmlFor='amount' className='label'>
            Amount
          </label>
        </div>
        <div className='input-area'>
          <input
            className='operations-input'
            value={this.state.vendor}
            onChange={this.onChangeHandle}
            id='vendor'
            type='text'
            required
          />
          <label htmlFor='vendor' className="label">Vendor</label>
        </div>
        <div className='input-area'>

        <input
          className='operations-input'
          value={this.state.category}
          onChange={this.onChangeHandle}
          id='category'
          type='text'
          required
          />
          <label htmlFor="category" className="label">Category</label>
          </div>
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
