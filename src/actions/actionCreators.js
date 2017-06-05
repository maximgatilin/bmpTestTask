import * as types from './actionTypes';

export function addExhibit(exhibit) {
  return {
    type: types.ADD_EXHIBIT,
    payload: exhibit
  }
}

export function searchExhibit(request) {
  return {
    type: types.SEARCH_EXHIBIT,
    payload: request
  }
}

export function filterExhibit(filter) {
  return {
    type: types.FILTER_EXHIBIT,
    payload: filter
  }
}

export function resetFilterExhibit() {
  return {
    type: types.RESET_FILTER_EXHIBIT
  }
}