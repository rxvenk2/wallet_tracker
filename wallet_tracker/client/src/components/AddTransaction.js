import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  //Here states are created and initialized using React Hooks useState()

  //'description' has current value of the state, 'setDescription' will let it to be modified
  const [description, setDescription] = useState('');

  //'amount' has current value of the state, 'setDescription' will let it to be modified
  const [amount, setAmount] = useState(0);

  //'date' has current value of the state, 'setDate' will let it to be modified
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      date,
      description,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add New Income/Expense</h3>
      <form onSubmit={onSubmit}>
       <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />  
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add Income/Expense</button>
      </form>
    </>
  )
}
