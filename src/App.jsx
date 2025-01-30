import React, { useState } from 'react';
import './App.css';
import AddTransactions from './components/AddTransactions';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';
import Balance from './components/Balance';
const initialvalue=[
    {id:1,title:"book", amount:50},
    {id:2,title:"pen", amount:90},
    {id:3,title:"pencil", amount:60},
    {id:4,title:"snacks", amount:100}
  ];
  function App() {
    const [list, setlist] = useState(initialvalue);
    
    
    const onadd= (transaction)=>
    {
      const updatedlist=[...list,transaction]
      setlist(updatedlist)
    }
  const ondelete=(id)=>
  {
     const deletedta=list.filter((l)=>l.id!==id)
     setlist(deletedta)
  }
  return(
    <div className ="expenses">
        <h2>Expense Tracker</h2>

        <Balance list ={list}/>
        <IncomeExpense list={list}/>
        <History list={list} ondelete={ondelete}/>
        <AddTransactions onadd={onadd}/>
      
    </div>
  )
  }


export default App;