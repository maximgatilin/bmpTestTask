import { combineReducers } from 'redux';
import exhibits from './exhibits';
import { reducer as formReducer } from 'redux-form';
import { ADD_EXHIBIT } from './../actions/actionTypes'

export default combineReducers({
  exhibits,
  form: formReducer.plugin({
    // reset add form after submit
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