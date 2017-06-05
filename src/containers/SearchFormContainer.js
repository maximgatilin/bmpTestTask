import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actionCreators from './../actions/actionCreators';
import SearchForm from './../components/SearchForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: bindActionCreators(actionCreators, dispatch).searchExhibit

  }
};

const SearchFormContainer = reduxForm({
  form: 'search'
})(SearchForm);

export default connect(null, mapDispatchToProps)(SearchFormContainer);