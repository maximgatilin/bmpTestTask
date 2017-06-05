import reducer from './../../reducers/exhibits';
import * as types from './../../actions/actionTypes';
import data from './../../data/exhibits.json';
import { generateLocation } from './../../utils/utils';

// add location field to each item
const items = data.map(item => {
  let location = generateLocation(item);
  return {
    ...item,
    location
  };
});

describe('page reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      items,
      searchName: '',
      filters: {}
    })
  });

  it('should handle ADD_EXHIBIT', () => {
    // Add to empty array
    expect(
      reducer({
        items: []
      }, {
        type: types.ADD_EXHIBIT,
        payload: {
          name: 'Test'
        }
      })
    ).toEqual({
      items: [
        {
          name: 'Test',
          location: ''
        }
      ]
    });

    // Add to existing array
    expect(
      reducer({
        items: [
          {
            name: 'Test',
            location: 'another'
          }
        ]
      }, {
        type: types.ADD_EXHIBIT,
        payload: {
          name: 'Mack'
        }
      })
    ).toEqual({
      items: [
        {
          name: 'Test',
          location: 'another'
        },
        {
          name: 'Mack',
          location: ''
        }
      ]
    });

    // Add with location parameters
    expect(
      reducer({
        items: [
          {
            name: 'Test',
            location: 'another'
          }
        ]
      }, {
        type: types.ADD_EXHIBIT,
        payload: {
          name: 'Mack',
          city: 'Moscow',
          country: 'Russia'
        }
      })
    ).toEqual({
      items: [
        {
          name: 'Test',
          location: 'another'
        },
        {
          name: 'Mack',
          city: 'Moscow',
          country: 'Russia',
          location: 'Moscow, Russia'
        }
      ]
    });

    expect(
      reducer({
        items: [
          {
            name: 'Test',
            location: 'another'
          }
        ]
      }, {
        type: types.ADD_EXHIBIT,
        payload: {
          name: 'Mack',
          city: 'Moscow'
        }
      })
    ).toEqual({
      items: [
        {
          name: 'Test',
          location: 'another'
        },
        {
          name: 'Mack',
          city: 'Moscow',
          location: 'Moscow'
        }
      ]
    });

    expect(
      reducer({
        items: [
          {
            name: 'Test',
            location: 'another'
          }
        ]
      }, {
        type: types.ADD_EXHIBIT,
        payload: {
          name: 'Mack',
          country: 'Russia'
        }
      })
    ).toEqual({
      items: [
        {
          name: 'Test',
          location: 'another'
        },
        {
          name: 'Mack',
          country: 'Russia',
          location: 'Russia'
        }
      ]
    });
  });

  it('should handle SEARCH_EXHIBIT', () => {
    expect(
      reducer({
        items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}]
      }, {
        type: types.SEARCH_EXHIBIT,
        payload: {
          request: 'Another text'
        }
      })
    ).toEqual({
      items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}],
      searchName: 'Another text'
    })
  });

  it('should handle FILTER_EXHIBIT', () => {
    expect(
      reducer({
        items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}]
      }, {
        type: types.FILTER_EXHIBIT,
        payload: {
          organization: 'Microsoft'
        }
      })
    ).toEqual({
      items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}],
      filters: { organization: 'Microsoft' }
    })
  });

  it('should handle RESET_FILTER_EXHIBIT', () => {
    expect(
      reducer({
        items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}],
        filters: { organization: 'Microsoft' }
      }, {
        type: types.RESET_FILTER_EXHIBIT
      })
    ).toEqual({
      items: [{name: 'First'}, {name: 'Second'}, {name: 'Another one'}],
      filters: {}
    })
  });




});