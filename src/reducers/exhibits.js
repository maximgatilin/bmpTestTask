import data from './../data/exhibits.json';

const initialState = data;

export default function exhibits(state = initialState, action) {
  switch (action.type) {
    case 'ADD_EXHIBIT':
      return [...state, action.payload]
    default:
      return state;
  }
}