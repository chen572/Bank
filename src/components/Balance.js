import React, { Component } from 'react'

class Balance extends Component {

  render() {

    return (
      <div>
        <h1>Your Balance:</h1>
        <h1 className='balance'>${this.props.balance}</h1>
      </div>
    )
  }

}

export default Balance