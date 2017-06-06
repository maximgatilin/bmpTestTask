import React from 'react';
import Modal from './../../components/Modal';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Modal title="Test title" handleClose={()=>{}}/>);
});
