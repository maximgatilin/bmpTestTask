import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import * as actionCreators from './../actions/actionCreators';
import SearchForm from './../components/SearchForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function(...args) {
      // action for search
      bindActionCreators(actionCreators, dispatch).searchExhibit(...args)
      // redirect user to first page
      dispatch(push(`/?page=1`));
    }
  }
};

const SearchFormContainer = reduxForm({
  form: 'search'
})(SearchForm);

export default connect(null, mapDispatchToProps)(SearchFormContainer);


