import React from 'react';
import PropTypes from 'prop-types';
import Pagination from './../components/Pagination';
import TableItem from './../components/TableItem';

const propTypes = {
  items: PropTypes.array.isRequired,
  isFiltered: PropTypes.bool,
  paginated: PropTypes.bool,
  page: PropTypes.number,
  changePage: PropTypes.func
};

export default function Table(props) {
  const perPage = 5;
  const pages = Math.ceil(props.items.length / perPage);
  const currentPage = props.page || 1;
  const startOffset = ( currentPage - 1) * perPage;
  const emptyText = props.isFiltered ? 'По выбранным фильтрам ничего не найдено' : 'Данные отсутствуют';
  let startCount = 0;

  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Название</th>
          <th>Место создания</th>
          <th>Организация</th>
          <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        { props.items.length === 0 && <tr>{emptyText}</tr> }
        { props.items.map((exhibit, index) => {
            if (props.paginated) {
              if (index >= startOffset && startCount < perPage) {
                startCount++;
                return <TableItem key={index} {...exhibit}/>
              } else {
                return null;
              }
            } else {
              return <TableItem key={index} {...exhibit}/>;
            }
          }
        )
        }
        </tbody>
      </table>
      {props.paginated && <Pagination className="pull-left" maxButtons={10} first last next prev
                                      items={pages} activePage={currentPage} onSelect={props.changePage}/>}
    </div>

  );
}

Table.propTypes = propTypes;

