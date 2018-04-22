import { createSelector } from 'reselect';
import ageFromDate from '../utils/ageFromDate';

const getPlayers = state => state.app.players;
const getFilter = state => state.app.filter;

const matchesPlayerAge = (p, age) =>
  age ? parseInt(age, 10) === ageFromDate(p.dateOfBirth) : true;

const matchesPlayerPosition = (p, position) => (position ? p.position === position : true);

const matchesPlayerName = (p, name) =>
  name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

export const getFilteredPlayers = createSelector([getPlayers, getFilter], (players, filter) =>
  players.filter(
    p =>
      matchesPlayerAge(p, filter.age) &&
      matchesPlayerPosition(p, filter.position) &&
      matchesPlayerName(p, filter.name)
  )
);
