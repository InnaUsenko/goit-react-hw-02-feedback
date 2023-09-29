import React, { Component } from 'react';

class Statistic extends Component {
  render() {
    return (
      <div>
        <h2>Statistic</h2>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.countPositive} %</p>
      </div>
    );
  }
}

export default Statistic;
