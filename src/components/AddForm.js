import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default function AddForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='form-horizontal'>
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

AddForm.propTypes = propTypes;