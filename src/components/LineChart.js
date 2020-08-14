import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

class LineChart extends Component {

  render() {
    const data = {
      labels: ['', '', '', '', ''],
      datasets: [
        {
          label: '',
          data: this.props.transactions,
          backgroundColor: ['#fa9372']
        }
      ]
    }

    return (
      <Line data={data} />
    )
  }

}

export default LineChart