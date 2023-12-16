import React, { useContext } from 'react'

import { GlobalContext } from '../context/GobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log('Transactions:', transactions);


  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {transactions.map(transaction =><Transaction key={transaction.id} transaction ={transaction}></Transaction> )}
    </ul>
  </>
  )
}
