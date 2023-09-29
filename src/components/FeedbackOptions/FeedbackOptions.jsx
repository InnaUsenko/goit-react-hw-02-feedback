import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.option.map(elem => {
          return (
            <button
              className={css.btn}
              key={elem}
              id={elem}
              onClick={this.props.vote}
            >
              <span className={css.buttonText}>{elem}</span>
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
