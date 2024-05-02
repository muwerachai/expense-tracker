import { useState } from "react";
import { validateTransaction } from "../services/validator";
import { createClasses } from "../services/classService";

const expenses = ["Food", "Grocery", "Health", "Transport", "Utilities"];
const incomes = ["Investment", "Lotto", "Salary", "Wage"];

function CreateTransactionForm(props) {
  const [payee, setPayee] = useState("");
  const [category, setCategory] = useState("Food");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("Expense");
  const [error, setError] = useState({});

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // always validate form data
    const transactionError = validateTransaction({
      payee,
      amount,
      date
    });

    if (transactionError) {
      return setError(transactionError);
    }

    props.createTransaction({ payee, amount, date, category, type });
    props.onCloseForm();
    setError({});
    setPayee("");
    setAmount("");
    setDate("");
    setType("Expense");
    setCategory(expenses[0]);
  };

  return (
    <div className="bg-white p-3 rounded-2 my-3">
      <form className="row g-3" onSubmit={handleSubmitForm}>
        {/* ********** Begin Radio Button: Expense or Income ********** */}
        <div className="col-12">
          <div className="btn-group">
            <input
              type="radio"
              className="btn-check"
              id="cbx-expense"
              name="type"
              value="Expense"
              checked={type === "Expense"}
              onChange={(event) => {
                setType(event.target.value);
                setCategory(expenses[0]);
              }}
            />
            <label className="btn btn-outline-danger" htmlFor="cbx-expense">
              Expense
            </label>
            <input
              type="radio"
              className="btn-check"
              id="cbx-income"
              name="type"
              value="Income"
              checked={type === "Income"}
              onChange={(event) => {
                setType(event.target.value);
                setCategory(incomes[1]);
              }}
            />
            <label className="btn btn-outline-success" htmlFor="cbx-income">
              Income
            </label>
          </div>
        </div>
        {/* ********** End Radio Button: Expense or Income ********** */}

        {/* ********** Begin Input: Payee ********** */}
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input
            type="text"
            className={createClasses(
              "form-control",
              error.payee ? "is-invalid" : ""
            )}
            value={payee}
            onChange={(event) => setPayee(event.target.value)}
          />
          {error.payee && <div className="invalid-feedback">{error.payee}</div>}
        </div>
        {/* ********** End Input: Payee ********** */}

        {/* ********** Begin Select: Category ********** */}
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {type === "Expense"
              ? expenses.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))
              : incomes.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
          </select>
        </div>
        {/* ********** End Select: Category ********** */}

        {/* ********** Begin Input: Amount ********** */}
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input
            type="text"
            className={createClasses(
              "form-control",
              error.amount ? "is-invalid" : ""
            )}
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
          {error.amount && (
            <div className="invalid-feedback">{error.amount}</div>
          )}
        </div>
        {/* ********** End Input: Amount ********** */}

        {/* ********** Begin Input: Date ********** */}
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        {/* ********** End Input: Date ********** */}

        {/* ********** Begin Form Button ********** */}
        <div className="col-12">
          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-primary">Save</button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={props.onCloseForm}
            >
              Cancel
            </button>
          </div>
        </div>
        {/* ********** End Form Button ********** */}
      </form>
    </div>
  );
}
export default CreateTransactionForm;
