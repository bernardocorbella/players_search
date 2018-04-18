import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from './constants/ActionTypes';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  it('`playersRequest` creates `PLAYERS_REQUEST` action', () => {
    expect(actions.playersRequest()).toEqual({
      type: types.PLAYERS_REQUEST
    });
  });

  it('`playersSuccess creates `PLAYERS_SUCCESS` action', () => {
    expect(actions.playersSuccess('args')).toEqual({
      type: types.PLAYERS_SUCCESS,
      payload: { players: 'args' }
    });
  });

  it('`playersError creates `PLAYERS_ERROR` action', () => {
    expect(actions.playersError('args')).toEqual({
      type: types.PLAYERS_ERROR,
      payload: { error: 'args' }
    });
  });

  it('`raiseError creates `RAISE_ERROR` action', () => {
    expect(actions.raiseError('args')).toEqual({
      type: types.RAISE_ERROR,
      payload: { error: 'args' }
    });
  });

  it('`getPlayers` creates required actions in success', () => {
    const expectedActions = [
      { type: types.PLAYERS_REQUEST },
      { type: types.PLAYERS_SUCCESS, payload: { players: [1] } }
    ];
    const store = mockStore({ players: [] });

    fetch.mockResponseOnce(JSON.stringify([1]));

    return store.dispatch(actions.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('`getPlayers` creates required actions in error', () => {
    const error = new Error('Fake error message');
    const expectedActions = [
      { type: types.PLAYERS_REQUEST },
      { type: types.PLAYERS_ERROR, payload: { error } }
    ];
    const store = mockStore({ error: {} });

    fetch.mockReject(error);

    return store.dispatch(actions.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
