import React from 'react';
import FilterForm from './../../components/FilterForm';
import { shallow } from 'enzyme';

it('renders without crashing with empty options and filters', () => {
  shallow(<FilterForm handleSubmit={()=>{}} reset={()=>{}} options={[]} filters={{}}/>);
});

it('renders without crashing with non-empty options and filters', () => {
  shallow(<FilterForm handleSubmit={()=>{}} reset={()=>{}} options={['Some','Another']} filters={{test: 'Test filter'}}/>);
});