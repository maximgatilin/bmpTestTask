import reducer from './../../reducers/page';
import * as types from './../../actions/actionTypes';

describe('page reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        showAddModal: false
      })
  });

  it('should handle SHOW_ADD_MODAL', () => {
    expect(
      reducer({
        showAddModal: false
      }, {
        type: types.SHOW_ADD_MODAL
      })
    ).toEqual({
      showAddModal: true
    })
  });

  it('should handle SHOW_ADD_MODAL', () => {
    expect(
      reducer({
        showAddModal: true
      }, {
        type: types.HIDE_ADD_MODAL
      })
    ).toEqual({
      showAddModal: false
    })
  });
});

