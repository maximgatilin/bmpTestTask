import React from 'react';
import TableItem from './../../components/TableItem';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<TableItem name="Test name"/>);
});

it('renders with all fields', () => {
  const tableItem = shallow(<TableItem name="Test name" location="Moscow, Russia" organization="Microsoft" description="Test description"/>);
  const expectedDOM = <tr>
    <td>Test name</td>
    <td>Moscow, Russia</td>
    <td>Microsoft</td>
    <td>Test description</td>
  </tr>;

  expect(tableItem.contains(expectedDOM)).toEqual(true);
});

it('renders with description fallback', () => {
  const tableItem = shallow(<TableItem name="Test name" location="Moscow, Russia" organization="Microsoft"/>);
  const expectedDOM = <tr>
    <td>Test name</td>
    <td>Moscow, Russia</td>
    <td>Microsoft</td>
    <td>Описание отсутствует</td>
  </tr>;

  expect(tableItem.contains(expectedDOM)).toEqual(true);
});
