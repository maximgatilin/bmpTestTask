import React from 'react';
import PaginationItem from './../../components/PaginationItem';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PaginationItem />);
});

