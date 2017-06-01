import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table.js';
import AddForm from './AddForm';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="page-header">Экспонаты</h1>
        <AddForm onSubmit={this.props.addExhibit}/>
        <Table exhibits={this.props.exhibits}/>
      </div>
    )
  }
}

Main.propTypes = {
  exhibits: PropTypes.array
};

export default Main;