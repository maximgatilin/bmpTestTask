import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const onChangeSubmit = (onChange, handleSubmit) => {
  let timerIdle;
  return e => {
    onChange(e);

    clearTimeout(timerIdle);
    timerIdle = setTimeout(() => {
      handleSubmit( );
    }, 100);
  }
};

function FilterForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='form-inline'>
      <h3>Фильтр по организации</h3>
      <div className='form-group'>
        <Field
          name='organization'
          component='select'
          className='form-control'
          onChange={onChangeSubmit(() => {}, props.handleSubmit)}>
          <option key="empty"></option>
          {props.options.map((item, index) => <option key={index}>{item}</option>)}
        </Field>
      </div>
    </form>
  );
}

FilterForm.propTypes = propTypes;

export default FilterForm;