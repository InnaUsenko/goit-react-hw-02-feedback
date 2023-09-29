import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistics/Statistic';
import Notification from './Notification/Notification';

const { Component } = require('react');

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    let divide = this.countTotalFeedback() <= 0 ? 1 : this.countTotalFeedback();
    return Math.round((this.state.good * 100) / divide);
  };

  vote = event => {
    const id = event.currentTarget.id;
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
    let total = this.countTotalFeedback();
    let countPositive = this.countPositiveFeedbackPercentage();
    return (
      <div style={{ padding: '16px' }}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions option={Object.keys(this.state)} vote={this.vote} />
          {total > 0 ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              countPositive={countPositive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
