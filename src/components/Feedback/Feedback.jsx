import React from 'react';
const { Component } = require('react');

class Feedback extends Component {
  render() {
    return (
      <div>
        <h1>TITLE</h1>
        <div>
          <button id="good" onClick={this.props.vote}>
            Good
          </button>
          <button id="neutral" onClick={this.props.vote}>
            Neutral
          </button>
          <button id="bad" onClick={this.props.vote}>
            Bad
          </button>
        </div>
        <h2>Statistic</h2>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
      </div>
    );
  }
}
export default Feedback;
