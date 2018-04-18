import { getFilteredPlayers } from './selectors';
import moment from 'moment';

const now = moment();
const oneYearBefore = moment().subtract(1.1, 'years');

const PLAYERS = [
  { name: 'unique', dateOfBirth: now.format(), position: 'a' },
  { name: 'a', dateOfBirth: oneYearBefore.format(), position: 'b' },
  { name: 'a', dateOfBirth: now.format(), position: 'unique' }
];

describe('playersList selectors', () => {
  it('filters by name', () => {
    const state = {
      app: {
        players: PLAYERS,
        filter: {
          name: 'unique'
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[0]]);
  });

  it('filters by age', () => {
    const state = {
      app: {
        players: PLAYERS,
        filter: {
          age: 1
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[1]]);
  });

  it('filters by position', () => {
    const state = {
      app: {
        players: PLAYERS,
        filter: {
          position: 'unique'
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[2]]);
  });
});
