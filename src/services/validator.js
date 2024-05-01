import validator from "validator";

const validateTransaction = ({ payee, amount, date }) => {
  // example input => { payee: '7-11' , amount: '', date: ''}
  // return error => { payee: 'payee is required', amount: 'amount is required' }

  const error = {};

  if (validator.isEmpty(payee)) {
    error.payee = "payee is required.";
  }

  if (validator.isEmpty(amount)) {
    error.amount = "amount is required.";
  } else if (!validator.isNumeric(amount)) {
    error.amount = "amount must be a numeric.";
  } else if (amount <= 0) {
    error.amount = "amount must be greater than zero.";
  }

  if (!validator.isDate(date)) {
    error.date = "invalid date format.";
  }
  return Object.keys(error).length > 0 ? error : false;
};
export { validateTransaction };
