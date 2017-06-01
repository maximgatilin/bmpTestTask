import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../actions/actionCreators';
import Main from './../components/Main';

class MainContainer extends Component {
  render() {
    return <Main {...this.props.store} {...this.props.actions} />
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);