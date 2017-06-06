import React from 'react';
import Table from './../../components/Table';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Table items={[]} isFiltered={false}/>);
});

it('renders with pagination', () => {
  const table = shallow(<Table items={[]} isFiltered={false} changePage={()=>{}} paginated={true}/>);
  expect(table.find('Pagination').length === 1, true).toEqual(true);
});

it('renders without pagination', () => {
  const table = shallow(<Table items={[]}/>);
  expect(table.find('Pagination').length === 0, true).toEqual(true);
});

