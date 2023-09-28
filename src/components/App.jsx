import React from 'react';
import Feedback from './Feedback/Feedback';
const { Component } = require('react');

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {};
  countPositiveFeedbackPercentage = () => {};

  vote = event => {
    const id = event.target.id;
    switch (id) {
      case 'good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
      default:
        console.log(id + ' param is not in the state');
    }
  };
  render() {
    return (
      <Feedback
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        vote={this.vote}
      />
    );
  }
}

export default App;
