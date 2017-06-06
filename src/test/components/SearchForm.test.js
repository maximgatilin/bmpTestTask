import React from 'react';
import SearchForm from './../../components/SearchForm';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<SearchForm handleSubmit={()=>{}}/>);
});
