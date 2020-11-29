import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionHistory = ({items}) => {
    return (
    <table className={s.transactionHistory}>
        <thead  >
            <tr className={s.tableHead}>
             <th className={s.item}>Type</th>
            <th className={s.item}>Amount</th>
            <th className={s.item}>Currency</th>
            </tr>
        </thead>

        <tbody>
                {items.map(item =>
            <tr key={item.id} className={s.tableHead}>
            <td className={s.itemRow}>{item.type}</td>
             <td className={s.itemRow}>{item.amount}</td>
            <td className={s.itemRow}>{item.currency}</td>
            </tr>)}

        </tbody>
    </table>
    )
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default  TransactionHistory