import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import * as actionCreators from './../actions/actionCreators';
import AddForm from './../components/AddForm';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: function(...args) {
      bindActionCreators(actionCreators, dispatch).addExhibit(...args);
      bindActionCreators(actionCreators, dispatch).hideAddModal(...args);
    }
  }
};

const AddFormContainer = reduxForm({
  form: 'add'
})(AddForm);

export default connect(null, mapDispatchToProps)(AddFormContainer);