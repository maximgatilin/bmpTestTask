import { combineReducers } from 'redux';
import exhibits from './exhibits';
import { reducer as formReducer } from 'redux-form';
import { ADD_EXHIBIT } from './../actions/actionTypes';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  exhibits,
  routing: routerReducer,
  form: formReducer.plugin({
    // reset 'add' form after submit
    add: (state, action) => {
      switch(action.type) {
        case ADD_EXHIBIT:
          return undefined;
        default:
          return state;
      }
    }
  })
});