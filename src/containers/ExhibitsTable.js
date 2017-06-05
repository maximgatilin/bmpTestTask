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
    return <Table items={this.props.items} changePage={this.changePage} page={this.props.page} isFiltered={this.props.isFiltered}/>
  }
}

function mapStateToProps(state) {
  const { items, searchName, filters } = state.exhibits;
  let filteredItems = items;
  const searchApplied = searchName !== '';
  const filtersApplied = Object.keys(filters).length !== 0;

  if (searchApplied) {
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(searchName.toLowerCase()));
  }

  if (filtersApplied) {
    // loop over all filters and apply it
    for (const key of Object.keys(filters)) {
      filteredItems = filteredItems.filter(item => item[key].includes(filters[key]));
    }
  }

  return ({
    items: filteredItems,
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
    isFiltered: searchApplied || filtersApplied
  });
}

export default connect(mapStateToProps)(ExhibitsTable);