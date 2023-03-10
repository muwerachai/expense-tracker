const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const formatShortMonthShortYear = date =>
  new Intl.DateTimeFormat('en-US', {
    year: '2-digit',
    month: 'short'
  }).format(new Date(date));

const formatAlterShortMonthShortYear = date =>
  `${MONTHS[date.slice(5, 7) - 1]} ${date.slice(2, 4)}`;

export { formatShortMonthShortYear, formatAlterShortMonthShortYear };