const formatCurrency = (number, currency = 'THB') =>
  new Intl.NumberFormat('en-US', {
    currency,
    style: 'currency',
    currencyDisplay: 'narrowSymbol'
  }).format(number);

export { formatCurrency };