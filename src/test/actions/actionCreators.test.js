import * as actions from './../../actions/actionCreators';
import * as types from './../../actions/actionTypes';

describe('actions', () => {
  it('should create an action to add exhibit', () => {
    const exhibit = {
      name: 'Test name',
      organization: 'Test organization'
    };
    const expectedAction = {
      type: types.ADD_EXHIBIT,
      payload: {
        name: 'Test name',
        organization: 'Test organization'
      }
    };

    expect(actions.addExhibit(exhibit)).toEqual(expectedAction);
  });

  it('should create an action to search exhibit', () => {
    const testRequest = {
      request: 'Test name'
    };
    const expectedAction = {
      type: types.SEARCH_EXHIBIT,
      payload: {
        request: 'Test name'
      }
    };

    expect(actions.searchExhibit(testRequest)).toEqual(expectedAction);
  });

  it('should create an action to filter exhibits', () => {
    const filter = {
      location: 'Moscow, Russia'
    };
    const expectedAction = {
      type: types.FILTER_EXHIBIT,
      payload: {
        location: 'Moscow, Russia'
      }
    };

    expect(actions.filterExhibit(filter)).toEqual(expectedAction);
  });

  it('should create an action to reset filters', () => {
    const expectedAction = {
      type: types.RESET_FILTER_EXHIBIT
    };

    expect(actions.resetFilterExhibit()).toEqual(expectedAction);
  });

  it('should create an action to show add modal', () => {
    const expectedAction = {
      type: types.SHOW_ADD_MODAL
    };

    expect(actions.showAddModal()).toEqual(expectedAction);
  });

  it('should create an action to hide add modal', () => {
    const expectedAction = {
      type: types.HIDE_ADD_MODAL
    };

    expect(actions.hideAddModal()).toEqual(expectedAction);
  });

});