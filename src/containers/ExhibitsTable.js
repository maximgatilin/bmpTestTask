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
  const { items, searchName } = state.exhibits;
  let filteredItems = items;
  let page = Number(state.routing.locationBeforeTransitions.query.page) || 1;

  if (searchName !== '') {
    filteredItems = filteredItems.filter(item => item.name.includes(searchName));
  }

  return ({
    items: filteredItems,
    page: page
  });
}

export default connect(mapStateToProps)(ExhibitsTable);