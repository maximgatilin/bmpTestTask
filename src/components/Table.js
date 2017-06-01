import React from 'react';

export default function Table(props) {
  return (
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
        { props.exhibits.map((exhibit, index) =>
          <tr key={index}>
            <td>{exhibit.name}</td>
            <td>{exhibit.city}, {exhibit.country}</td>
            <td>{exhibit.organization}</td> 
            <td>{exhibit.description || "Описание отсутствует"}</td>
          </tr>)
        }
      </tbody>
    </table>
  );
}