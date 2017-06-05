import data from './../data/exhibits.json';
import * as types from './../actions/actionTypes';

// add location field to each item
const items = data.map(item => {
  const locationSeparator = item.city && item.country ? ',' : '';
  const location = item.city || item.country ? `${item.city}${locationSeparator} ${item.country}` : '';
  return {
    ...item,
    location
  };
});

const initialState = {
  items,
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
    case types.RESET_FILTER_EXHIBIT:
      return {
        ...state,
        filters: {}
      };
    default:
      return state;
  }
}