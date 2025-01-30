const IncomeExpense =(props)=>{
    const {list=[]}=props;
    let income = list
        .filter((eachTransaction) => eachTransaction.amount > 0)
        .reduce((acc, eachTransaction) => acc + eachTransaction.amount, 0)
        .toFixed(2)
    let expense = list
        .filter((eachTransaction) => eachTransaction.amount < 0)
        .reduce((acc, eachTransaction) => acc - eachTransaction.amount, 0)   
        .toFixed(2)

    /*list.forEach((eachTransaction)=>{
        if(eachTransaction.amount>0)
        {
            income +=eachTransaction.amount;
        }
        else{
            expense -=eachTransaction.amount;
        }
    });  */
    return(
        <div className="container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+₹{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-₹{expense}</p>
            </div>
        </div>
    )
}
export default IncomeExpense;