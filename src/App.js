import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialTransactions = [
  {
    id: uuidv4(),
    payee: "7-11",
    category: "Food",
    amount: 200,
    date: "2022-08-17",
    type: "Expense"
  },
  {
    id: uuidv4(),
    payee: "ฺBig C",
    category: "Grocery",
    amount: 555,
    date: "2022-08-14",
    type: "Expense"
  },
  {
    id: uuidv4(),
    payee: "Facebook",
    category: "Salary",
    amount: 2500,
    date: "2022-07-30",
    type: "Income"
  }
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function App() {
  const [transactions, setTransactions] = useState(initialTransactions);
  const [payee, setPayee] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  return (
    <div className="container" style={{ maxWidth: 768 }}>
      {/* ********** Begin Create Form ********** */}
      <div className="bg-white p-3 rounded-2 my-3">
        <form className="row g-3">
          {/* ********** Begin Radio Button: Expense or Income ********** */}
          <div className="col-12">
            <div className="btn-group">
              <input
                type="radio"
                className="btn-check"
                id="cbx-expense"
                name="type"
                defaultChecked
              />
              <label className="btn btn-outline-danger" htmlFor="cbx-expense">
                Expense
              </label>
              <input
                type="radio"
                className="btn-check"
                id="cbx-income"
                name="type"
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
            <input type="text" className="form-control" />
          </div>
          {/* ********** End Input: Payee ********** */}

          {/* ********** Begin Select: Category ********** */}
          <div className="col-sm-6">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option>Food</option>
              <option>Investment</option>
              <option>Salary</option>
              <option>Transport</option>
            </select>
          </div>
          {/* ********** End Select: Category ********** */}

          {/* ********** Begin Input: Amount ********** */}
          <div className="col-sm-6">
            <label className="form-label">Amount</label>
            <input type="text" className="form-control" />
          </div>
          {/* ********** End Input: Amount ********** */}

          {/* ********** Begin Input: Date ********** */}
          <div className="col-sm-6">
            <label className="form-label">Date</label>
            <input type="date" className="form-control" />
          </div>
          {/* ********** End Input: Date ********** */}

          {/* ********** Begin Form Button ********** */}
          <div className="col-12">
            <div className="mt-3 d-flex gap-3">
              <button className="btn btn-primary">Save</button>
              <button className="btn btn-outline-secondary">Cancel</button>
              <button className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
          {/* ********** End Form Button ********** */}
        </form>
      </div>
      {/* ********** End Create Form ********** */}

      {/* ********** Begin Transaction List ********** */}
      <ul className="list-group my-3">
        {transactions.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex callout-${
              item.type === "Expense" ? "danger" : "success"
            }`}
          >
            <div className="d-flex flex-grow-1 gap-4" role="button">
              {/* ********** Begin Transaction Date #1 ********** */}
              <div
                className="border border-dark rounded-2 bg-warning p-2 text-center"
                style={{ width: "3.75rem" }}
              >
                <p
                  className="m-0 text-black-50"
                  style={{ fontSize: "0.75rem" }}
                >
                  {/* {MONTHS[item.date.slice(5, 7) - 1]} {item.date.slice(2, 4)} */}
                  {new Intl.DateTimeFormat("en-us", {
                    year: "2-digit",
                    month: "short"
                  }).format(new Date(item.date))}
                </p>
                <p className="m-0">{item.date.slice(8)}</p>
              </div>
              {/* ********** End Transaction Date #1 ********** */}

              <div className="d-flex align-items-center flex-grow-1">
                {/* ********** Begin Transaction Detail #1 ********** */}
                <div className="flex-grow-1">
                  <p className="mb-1 fw-bold">{item.payee}</p>
                  <p
                    className="mb-0 text-black-50"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {item.category}
                  </p>
                </div>
                {/* ********** End Transaction Detail #1 ********** */}

                {/* ********** Begin Transaction Amount #1 ********** */}
                <span
                  className={`badge text-bg-${
                    item.type === "Expense" ? "danger" : "success"
                  }`}
                >
                  {new Intl.NumberFormat("en-us", {
                    style: "currency",
                    currency: "THB",
                    currencyDisplay: "narrowSymbol"
                  }).format(item.amount)}
                </span>
                {/* ********** End Transaction Amount #1 ********** */}
              </div>
            </div>
          </li>
        ))}

        {/* ********** End Transaction Item #1 ********** */}
      </ul>
      {/* ********** End Transaction List ********** */}
    </div>
  );
}

export default App;
