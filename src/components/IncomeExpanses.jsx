import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


function IncomeExpanses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expanse = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);


  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>+{income}Rwfr</p>
      </div>

      <div>
        <h4>Expanses</h4>
        <p id='money-minus' className='money minus'>-{expanse}Rwfr</p>
      </div>
    </div>
  )
}

export default IncomeExpanses
