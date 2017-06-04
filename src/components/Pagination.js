import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './PaginationItem';

export default function Pagination(props) {
  const elements = [];
  const active = props.activePage;

  for (let i = 1; i < props.items + 1; i++) {
    let item = <PaginationItem key={i}
                               onSelect={props.onSelect}
                               value={i}
                               active={i === active}>
      {i}
    </PaginationItem>;
    elements.push(item);
  }

  const firstIndex = 1;
  const lastIndex = elements.length;

  return (
    <div className={props.className}>
      <ul className="pagination">
        <PaginationItem
          disabled={active === 1}
          onSelect={props.onSelect}
          value={firstIndex}
          key="First">
          <span>&laquo;</span>
        </PaginationItem>
        <PaginationItem
          onSelect={props.onSelect}
          value={active - 1}
          disabled={active === 1}
          key="Previous">
          <span>&lsaquo;</span>
        </PaginationItem>

        {elements}

        <PaginationItem
          onSelect={props.onSelect}
          value={active + 1}
          disabled={active === lastIndex}
          key="Next">
          <span>&rsaquo;</span>
        </PaginationItem>
        <PaginationItem
          onSelect={props.onSelect}
          value={lastIndex}
          disabled={active === lastIndex}
          key="Last">
          <span>&raquo;</span>
        </PaginationItem>
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  items: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  activePage: PropTypes.number.isRequired,
  className: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool,
  next: PropTypes.bool,
  prev: PropTypes.bool
};