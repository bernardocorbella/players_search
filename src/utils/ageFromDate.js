import moment from 'moment';

export default function ageFromDate(date, now = moment()) {
  return now.diff(date, 'years');
}
