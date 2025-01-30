const Balance = (props) => {
    const { list = [] } = props;
    console.log(list);
    const balance=list
    .reduce((prevResult,eachTransaction)=>prevResult+eachTransaction.amount,0)
    const total=balance.toFixed(2);

    
    return (
        <div className="balance">
        <h3> Your Balance</h3>
        <h1>₹{total}</h1>
        </div>
    );
    }
export default Balance;