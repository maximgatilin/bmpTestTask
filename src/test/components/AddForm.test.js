import React from 'react';
import AddForm from './../../components/AddForm';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<AddForm handleSubmit={()=>{}}/>);
});
