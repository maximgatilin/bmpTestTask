import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  organization: PropTypes.string,
  description: PropTypes.string
};

export default function TableItem(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.location}</td>
      <td>{props.organization}</td>
      <td>{props.description || "Описание отсутствует"}</td>
    </tr>

  );
}

TableItem.propTypes = propTypes;

