import React from 'react';
import Pagination from './../components/Pagination';

export default function Table(props) {
  const perPage = 5;
  const pages = Math.ceil(props.items.length / perPage);
  const currentPage = props.page;
  const startOffset = ( currentPage - 1) * perPage;
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
        { props.items.map((exhibit, index) => {
            if (index >= startOffset && startCount < perPage) {
              startCount++;
              return <tr key={index}>
                <td>{exhibit.name}</td>
                <td>{exhibit.city}, {exhibit.country}</td>
                <td>{exhibit.organization}</td>
                <td>{exhibit.description || "Описание отсутствует"}</td>
              </tr>
            }
          }
        )
        }
        </tbody>
      </table>
      <Pagination className="pull-left" maxButtons={10} first last next prev
                         items={pages} activePage={currentPage} onSelect={props.changePage}/>
    </div>

  );
}

