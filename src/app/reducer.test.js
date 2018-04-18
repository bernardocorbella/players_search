import * as types from './constants/ActionTypes';
import reducer, { initialState } from './reducer';

describe('App reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle PLAYERS_REQUEST', () => {
    expect(reducer(initialState, { type: types.PLAYERS_REQUEST })).toEqual({
      ...initialState,
      fetching: true
    });
  });

  it('should handle PLAYERS_SUCCESS', () => {
    expect(
      reducer(initialState, {
        type: types.PLAYERS_SUCCESS,
        payload: { players: [1] }
      })
    ).toEqual({
      ...initialState,
      players: [1]
    });
  });

  it('should handle PLAYERS_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.PLAYERS_ERROR,
        payload: { error: 'error' }
      })
    ).toEqual({
      ...initialState,
      error: 'error'
    });
  });

  it('should handle FILTER_PLAYERS', () => {
    expect(
      reducer(initialState, {
        type: types.FILTER_PLAYERS,
        payload: { filter: 'filter' }
      })
    ).toEqual({
      ...initialState,
      filter: 'filter'
    });
  });

  it('should handle RAISE_ERROR', () => {
    expect(
      reducer(initialState, {
        type: types.RAISE_ERROR,
        payload: { error: 'error' }
      })
    ).toEqual({
      ...initialState,
      error: 'error'
    });
  });
});
