import React from 'react';
import {Field} from 'redux-form';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired
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
  const {handleSubmit, reset, handleResetClick} = props;
  return (
    <form onSubmit={handleSubmit} className='form-inline'>
      <h3>Фильтр по месту создания</h3>
      <div className='form-group'>
        <Field
          name='location'
          component='select'
          className='form-control'
          onChange={onChangeSubmit(() => {}, handleSubmit)}>
          <option key="empty" value=''></option>
          {props.options.map((item, index) => <option key={index}>{item}</option>)}
        </Field>
        {
          Object.keys(props.filters).length !== 0 &&
          <button
            className="btn btn-primary"
            style={{marginLeft: '15px'}}
            onClick={e => { e.preventDefault(); reset(); handleResetClick() }}>
            Сбросить фильтр
          </button>
        }
      </div>
    </form>
  );
}

FilterForm.propTypes = propTypes;

export default FilterForm;