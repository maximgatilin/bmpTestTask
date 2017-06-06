import React from 'react';
import AddModal from './../../components/AddModal';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddModal title="Test title" handleShowBtn={()=>{}} handleClose={()=>{}} show/>);
});

it('renders with open popup', () => {
  const component = shallow(<AddModal title="Test title" handleShowBtn={()=>{}} handleClose={()=>{}} show/>);
  expect(component.find('Modal').length === 1, true).toEqual(true);
});

it('renders with closed popup', () => {
  const component = shallow(<AddModal title="Test title" handleShowBtn={()=>{}} handleClose={()=>{}} show={false}/>);
  expect(component.find('Modal').length === 0, true).toEqual(true);
});
