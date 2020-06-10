import React, { useState } from "react";

const FundWithdraw = (props) => {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message,setMessage] = useState("");

  function onFormSubmit(event) {     
    event.preventDefault();
    console.log(account)
    console.log(amount)
    //check account type and amount
    if(account==='Saving'){
       if(amount>10000){
          setMessage('Your balance is low')  
       }else{
         setMessage('Amount Withdraw')
       } 
       setAccount('');
       setAmount('');
    }
    if(account==='Current'){
       if(amount>5000){
          setMessage('Your balance is low')  
       }else{
         setMessage('Amount Withdraw')
       }       
       setAccount('');
       setAmount(''); 
    }
  }

  return (
    <div className="ui container">
        <h1>Welcome {props.username}!</h1>
        <form onSubmit={onFormSubmit}>
            <select
              value={account}
              onChange ={e => setAccount(e.target.value)}
            >
              <option value="">Account</option>
              <option value="Saving">Saving</option>
              <option value="Current">Current</option>
            </select>
            <input type="text"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                type="amount"
                maxLength="6"
                minLength="3"
            />
            <input type="submit"
                value="Withdraw" 
            />
              <input type="reset"
                value="Cancel" 
            />
          </form>
          <p>{message}</p>
          <p>Saving Account limit : '10000'</p>
          <p>Current Account limit : '5000'</p>
    </div>  
  )
};

export default FundWithdraw;