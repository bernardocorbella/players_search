import moment from 'moment';
import ageFromDate from './ageFromDate';

describe('ageFromDate', () => {
  it('returns correct age from a date', () => {
    const nowDate = moment('2018-04-13');
    const pastDate = '2008-04-13';

    expect(ageFromDate(pastDate, nowDate)).toBe(10);
  });
});
