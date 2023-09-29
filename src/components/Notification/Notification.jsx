import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return <h2>{this.props.message}</h2>;
  }
}

export default Notification;
