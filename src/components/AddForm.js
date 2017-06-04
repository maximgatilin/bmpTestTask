import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class AddForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className='form-horizontal'>
        <div className='form-group'>
          <label htmlFor='name' className='col-sm-2 control-label'>Название</label>
          <div className='col-sm-4'>
            <Field name='name' component='input' type='text' className='form-control' required/>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='city' className='col-sm-2 control-label'>Город создания</label>
          <div className='col-sm-4'>
            <Field name='city' component='input' type='text' className='form-control'/>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='country' className='col-sm-2 control-label'>Страна создания</label>
          <div className='col-sm-4'>
            <Field name='country' component='input' type='text' className='form-control'/>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='organization' className='col-sm-2 control-label'>Организация</label>
          <div className='col-sm-4'>
            <Field name='organization' component='input' type='text' className='form-control'/>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='col-sm-2 control-label'>Описание</label>
          <div className='col-sm-4'>
             <Field name='description' component='textarea' className='form-control'/>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Добавить</button>
      </form>
    );
  }
}

AddForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

AddForm = reduxForm({
  form: 'add'
})(AddForm);

export default AddForm;