import React, {Component} from 'react';
import Modal from './../components/Modal';

export default class AddModal extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.handleShowBtn}>
          <span className="glyphicon glyphicon-plus-sign" style={{marginRight: '5px'}}></span>
          Добавить новый экспонат
        </button>
        { this.props.show && <Modal title={this.props.title} handleClose={this.props.handleClose}>{this.props.children}</Modal>}
      </div>
    )
  }
}