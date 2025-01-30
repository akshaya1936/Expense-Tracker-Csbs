import React from 'react';

const History = (props)=>
    {
        const{list=[],ondelete}=props
    
            return( 
            <div>
            <h3>History</h3>
              <ul id="list" className="list">
                {list.map((listdata)=>(
                 <li className="lists" key={listdata.id}>
                   <span>{listdata.title}</span>
                   <span>₹{listdata.amount}</span>
                    <button className="delete-btn" onClick={()=>ondelete(listdata.id)}>X</button>
                 </li>
              ))}
              </ul>
              </div>
            )
    };

export default History;

