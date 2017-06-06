import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSelect: PropTypes.func,
  active: PropTypes.bool
};

export default function PaginationItem(props) {
  function select(event) {
    event.preventDefault();

    props.onSelect(props.value);
  }

  return (
    <li className={
      `${props.active ? 'active' : ''}
       ${props.disabled ? 'disabled' : ''}`
    }>
      <a href="/" onClick={select}>
        {props.children}
      </a>
    </li>
  );
}

PaginationItem.propTypes = propTypes;

