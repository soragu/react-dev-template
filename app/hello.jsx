import React from 'react';

module.exports = class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>
  }
}