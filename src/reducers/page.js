import * as types from './../actions/actionTypes';


const initialState = {
  showAddModal: false
};


export default function page(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_ADD_MODAL:
      return {
        ...state,
        showAddModal: true
      };
    case types.HIDE_ADD_MODAL:
      return {
        ...state,
        showAddModal: false
      };
    default:
      return state;
  }
}