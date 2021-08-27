import moment from 'moment';
import showdown from 'showdown';

export const markdownConverter = new showdown.Converter();

export function formatDate(dateString) {
  const date = moment.utc(dateString);
  return date.format('MMM YYYY');
}
