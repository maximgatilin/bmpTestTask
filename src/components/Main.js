import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table.js';

class Main extends Component {
  render() {
    return (
      <div>
        <Table exhibits={this.props.exhibits}/>
      </div>
    )
  }
}

Main.propTypes = {
  exhibits: PropTypes.array
};

export default Main;