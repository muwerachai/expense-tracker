import { formatCurrency } from '../services/numberFormat';
import { formatShortMonthShortYear } from '../services/dateFormat';
import { createClasses } from '../services/classService';

function TransactionItem (props) {
  const {
    transaction: { type, date, payee, category, amount }
  } = props;
    return   ( 
    <li
    // className={`list-group-item d-flex callout-${
    // type === 'Expense' ? 'danger' : 'success'
    // }`}
    className={createClasses(
      'list-group-item d-flex', 
      type === 'Expense' ? 'callout-danger' : 'callout-success'
      )}
      onClick={() => props.openEditForm(props.transaction)}
    >          
    <div className="d-flex flex-grow-1 gap-4" role="button">
      <div
        className="border border-dark rounded-2 bg-warning p-2 text-center"
        style={{ width: '3.75rem' }}
      >
        <p 
          className="m-0 text-black-50" 
          style={{ fontSize: '0.75rem' }}
        >
          {/* {MONTHS[item.date.slice(5, 7) - 1]} 
          {item.date.slice(2, 4)}   */}
          {formatShortMonthShortYear(date)}
        </p>
        <p className="m-0">{date.slice(8)}</p>
      </div>

      <div className="d-flex align-items-center flex-grow-1">
        <div className="flex-grow-1">
          <p className="mb-1 fw-bold">{payee}</p>
          <p
            className="mb-0 text-black-50"
            style={{ fontSize: '0.75rem' }}
          >
            {category}
          </p>
        </div>
        <span
            // className={`badge text-bg-${
            //   type === 'Expense' ? 'danger' : 'success'
            // }`}
            className={createClasses(
              'badge',
              type === 'Expense' ? 'text-bg-danger' : 'text-bg-success'
            )}
          >
            {formatCurrency(amount)}
          </span>
      </div>
    </div>
  </li>
)}

export default TransactionItem