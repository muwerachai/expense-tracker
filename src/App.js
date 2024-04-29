import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TransactionItem from "./components/TransactionItem";

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
          <TransactionItem key={item.id} transaction={item} />
        ))}

        {/* ********** End Transaction Item #1 ********** */}
      </ul>
      {/* ********** End Transaction List ********** */}
    </div>
  );
}

export default App;
