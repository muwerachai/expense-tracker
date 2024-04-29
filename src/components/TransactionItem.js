import { formatShortMonthShortYear } from "../services/dateFormat";
import { formatCurrency } from "../services/numberFormat";
import { createClasses } from "../services/classService";
function TransactionItem(props) {
  const {
    transaction: { type, date, payee, category, amount }
  } = props;
  return (
    <li
      // className={`list-group-item d-flex callout-${
      //   type === "Expense" ? "danger" : "success"
      // }`}
      className={createClasses(
        "list-group-item d-flex",
        type === "Expense" ? "callout-danger" : "callout-success"
      )}
    >
      <div className="d-flex flex-grow-1 gap-4" role="button">
        {/* ********** Begin Transaction Date #1 ********** */}
        <div
          className="border border-dark rounded-2 bg-warning p-2 text-center"
          style={{ width: "3.75rem" }}
        >
          <p className="m-0 text-black-50" style={{ fontSize: "0.75rem" }}>
            {/* {formatAlterShortMonthShortYear} */}
            {formatShortMonthShortYear(date)}
          </p>
          <p className="m-0">{date.slice(8)}</p>
        </div>
        {/* ********** End Transaction Date #1 ********** */}

        <div className="d-flex align-items-center flex-grow-1">
          {/* ********** Begin Transaction Detail #1 ********** */}
          <div className="flex-grow-1">
            <p className="mb-1 fw-bold">{payee}</p>
            <p className="mb-0 text-black-50" style={{ fontSize: "0.75rem" }}>
              {category}
            </p>
          </div>
          {/* ********** End Transaction Detail #1 ********** */}

          {/* ********** Begin Transaction Amount #1 ********** */}
          <span
            // className={`badge text-bg-${
            //   type === "Expense" ? "danger" : "success"
            // }`}
            className={createClasses(
              "badge",
              type === "Expense" ? "text-bg-danger" : "text-bg-success"
            )}
          >
            {formatCurrency(amount)}
          </span>
          {/* ********** End Transaction Amount #1 ********** */}
        </div>
      </div>
    </li>
  );
}
export default TransactionItem;
