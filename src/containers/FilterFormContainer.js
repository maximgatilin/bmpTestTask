import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import * as actionCreators from './../actions/actionCreators';
import FilterForm from './../components/FilterForm';

const mapStateToProps = (state) => {
  let locations = state.exhibits.items
    // get organizations
    .map(item => item.location)
    // remove empty strings
    .filter(location => location !== '');
    // remove duplicates
  locations = locations.filter((location, index) => locations.indexOf(location) === index);

  return {
    options: locations,
    filters: state.exhibits.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function(...args) {
      // action for filter
      bindActionCreators(actionCreators, dispatch).filterExhibit(...args);
      // redirect user to first page
      dispatch(push(`/?page=1`));
    },
    handleResetClick: function(...args) {
      bindActionCreators(actionCreators, dispatch).resetFilterExhibit(...args);
    }
  }
};

const FilterFormContainer = reduxForm({
  form: 'filter'
})(FilterForm);

export default connect(mapStateToProps, mapDispatchToProps)(FilterFormContainer);