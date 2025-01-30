import { useState } from "react";

const AddTransactions = (props)=>
    {
    const {onadd}=props;
    const [title,settitle]=useState("")
    const [amount,setamt]=useState("")
    
    const onChangetitle=(event)=>
    {
        settitle(event.target.value)
    }
    const onChangeamt=(event)=>
    {
       setamt(event.target.value)
    }
    function onsubmit(event)
    {
        event.preventDefault();
       const transaction={
        id:Math.random(),
        title,
        amount: +amount
       }
       console.log(transaction);
       onadd(transaction);
    };
        return <div>
            <h3>Add new</h3>
             <hr></hr>
             <form onSubmit={onsubmit}>
             <div className="form-control">
             <label htmlFor="title" >Title:<br/></label> <input type="text"
              id="title"
               onChange={onChangetitle} 
               value={title} 
               placeholder="Enter the title" required>

               </input>
             </div>
    
             <div className="form-control">
                <p>(positive-income & negative-expense)</p>
             <label htmlFor="amt" >Amount :<br></br> </label> <input type="number" id="amt" onChange={onChangeamt} value={amount} placeholder="Enter the amount" required></input>
             </div>
             <br></br>
             <button>Add transaction</button></form>
             
        </div>
    }

export default AddTransactions;