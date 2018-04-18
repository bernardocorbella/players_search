import * as types from './constants/ActionTypes';
import { GET_URL } from './constants/endpoints';

export const playersRequest = () => ({ type: types.PLAYERS_REQUEST });
export const playersSuccess = players => ({
  type: types.PLAYERS_SUCCESS,
  payload: { players }
});
export const playersError = error => ({
  type: types.PLAYERS_ERROR,
  payload: { error }
});

export const getPlayers = () => dispatch => {
  dispatch(playersRequest());

  return fetch(GET_URL)
    .then(response => response.json())
    .then(data => dispatch(playersSuccess(data)))
    .catch(error => dispatch(playersError(error)));
};

export const filterPlayers = filter => ({
  type: types.FILTER_PLAYERS,
  payload: { filter }
});

export const raiseError = error => ({
  type: types.RAISE_ERROR,
  payload: { error }
});
