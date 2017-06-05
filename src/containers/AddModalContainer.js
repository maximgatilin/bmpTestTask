import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './../actions/actionCreators';
import AddModal from './../components/AddModal';

const mapStateToProps = (state) => {
  return {
    show: state.page.showAddModal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowBtn: bindActionCreators(actionCreators, dispatch).showAddModal,
    handleClose: bindActionCreators(actionCreators, dispatch).hideAddModal
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);