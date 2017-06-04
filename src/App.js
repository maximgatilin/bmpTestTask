import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
