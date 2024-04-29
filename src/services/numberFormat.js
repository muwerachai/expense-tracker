const formatCurrency = (number, currency = "THB") =>
  new Intl.NumberFormat("en-us", {
    currency,
    style: "currency",
    currencyDisplay: "narrowSymbol"
  }).format(number);

export { formatCurrency };
