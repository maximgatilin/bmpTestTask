import { combineReducers } from 'redux';
import exhibits from './exhibits';
import page from './page';
import { reducer as formReducer } from 'redux-form';
import * as types from './../actions/actionTypes';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  exhibits,
  page,
  routing: routerReducer,
  form: formReducer.plugin({
    // reset 'add' form after submit
    add: (state, action) => {
      switch(action.type) {
        case types.ADD_EXHIBIT:
          return undefined;
        default:
          return state;
      }
    }
  })
});