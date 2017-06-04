import React from 'react';
import PropTypes from 'prop-types';

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

PaginationItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  active: PropTypes.bool
};

