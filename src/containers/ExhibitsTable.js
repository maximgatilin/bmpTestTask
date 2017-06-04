import React, { Component } from 'react';
import Table from './../components/Table';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class ExhibitsTable extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.dispatch(push(`/?page=${page}`))
  }

  render() {
    return <Table items={this.props.items} changePage={this.changePage} page={this.props.page}/>
  }
}
function mapStateToProps(state) {
  return ({
    items: state.exhibits,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1
  });
}

export default connect(mapStateToProps)(ExhibitsTable);