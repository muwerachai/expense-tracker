function EditTransactionForm() {
  return (
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
  );
}

export default EditTransactionForm;
