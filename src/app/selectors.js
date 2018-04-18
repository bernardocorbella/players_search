import { createSelector } from 'reselect';
import ageFromDate from '../utils/ageFromDate';

const getPlayers = state => state.app.players;
const getFilter = state => state.app.filter;

/* 
 * TODO: Even though this is correctly tested in `selectors.test.js`, need to refactor the code
 * in order for coverage to pick it up.
 * 
 * Probably look into currying this into composable functions.
*/
export const getFilteredPlayers = createSelector([getPlayers, getFilter], (players, filter) => {
  return players
    .filter(p => (filter.age ? parseInt(filter.age, 10) === ageFromDate(p.dateOfBirth) : true))
    .filter(p => (filter.position ? p.position === filter.position : true))
    .filter(p => (filter.name ? p.name.toLowerCase().includes(filter.name.toLowerCase()) : true));
});
