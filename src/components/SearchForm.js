import React from 'react';
import { Field} from 'redux-form';
import PropTypes from 'prop-types';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

function SearchForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='form-inline'>
      <h3>Поиск по названию</h3>
      <div className='form-group'>
        <Field name='request' component='input' type='text' className='form-control'/>
        <button style={{marginLeft: '15px'}} type='submit' className='btn btn-primary'>
          <span className="glyphicon glyphicon-search" style={{marginRight: '5px'}}></span>
          Найти
        </button>
      </div>
    </form>
  );
}

SearchForm.propTypes = propTypes;

export default SearchForm;