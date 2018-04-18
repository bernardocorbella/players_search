import * as types from './constants/ActionTypes';

export const initialState = {
  players: [],
  filter: {
    name: '',
    position: '',
    age: ''
  },
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYERS_REQUEST:
      return { ...state, fetching: true };
    case types.PLAYERS_SUCCESS:
      return { ...state, fetching: false, players: action.payload.players };
    case types.PLAYERS_ERROR:
      return { ...state, fetching: false, error: action.payload.error };
    case types.FILTER_PLAYERS:
      return { ...state, filter: action.payload.filter };
    case types.RAISE_ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};
