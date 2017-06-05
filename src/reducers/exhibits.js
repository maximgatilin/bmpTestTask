import data from './../data/exhibits.json';
import * as types from './../actions/actionTypes';

const initialState = {
  items: data,
  searchName: '',
  filters: {}
};


export default function exhibits(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EXHIBIT:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case types.SEARCH_EXHIBIT:
      return {
        ...state,
        searchName: (action.payload && action.payload.request) || ''
      };
    case types.FILTER_EXHIBIT:
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
}