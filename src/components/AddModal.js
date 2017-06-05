import React from 'react';
import Modal from './../components/Modal';
import PropTypes from 'prop-types';

const propTypes = {
  handleShowBtn: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default function AddModal(props) {
  const { handleShowBtn, handleClose, show, children } = props;

  return (
    <div>
      <button className="btn btn-primary" onClick={handleShowBtn}>
        <span className="glyphicon glyphicon-plus-sign" style={{marginRight: '5px'}}></span>
        Добавить новый экспонат
      </button>
      { show && <Modal title={this.props.title} handleClose={handleClose}>{children}</Modal>}
    </div>
  )
}

AddModal.propTypes = propTypes;
