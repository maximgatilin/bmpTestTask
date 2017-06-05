import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
};

function Modal(props) {
  const { title, handleClose } = props;
  return (
    <div id="myModal" className="modal show" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>&times;</button>
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;

export default Modal;

