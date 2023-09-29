import React, { Component } from 'react';

class FeedbackOptions extends Component {
  render() {
    return (
      <div>
        {this.props.option.map(elem => {
          return (
            <button key={elem} id={elem} onClick={this.props.vote}>
              <span>{elem}</span>
            </button>
          );
        })}
      </div>
    );
  }
}

export default FeedbackOptions;
