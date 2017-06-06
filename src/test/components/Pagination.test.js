import React from 'react';
import Pagination from './../../components/Pagination';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Pagination items={3} activePage={1} onSelect={()=>{}}/>);
});

it('renders with needed amount of buttons', () => {
  const pagination =  shallow(<Pagination items={3} activePage={1} onSelect={()=>{}}/>);
  expect(pagination.find('PaginationItem').length === 3, true).toEqual(true);
});

it('renders with needed amount of buttons including optional buttons', () => {
  const pagination =  shallow(<Pagination items={3} activePage={1} onSelect={()=>{}} first last next prev/>);
  expect(pagination.find('PaginationItem').length === 7, true).toEqual(true);
});

