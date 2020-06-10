import React, { useState } from "react";

const Login = (props) =>{
  
  const [uname, setUser] = useState("");
  const [upass, setPassword] = useState("");


  function validateForm() {
    return uname.length > 0 && upass.length > 0;
  }

  function onFormSubmit(event) { 
    
    if(uname==='admin' || upass==='admin'){
      //success      
      props.onFormSubmit({isLogin:true,username:uname});
    }else{       
      //fail
      props.onFormSubmit({isLogin:false,username:''});
    }
    //setUser('');
    //setPassword('');
    event.preventDefault();
  }

  return (
    <div className="ui container">
    <form onSubmit={onFormSubmit}>
       <input 
            
            type="text"
            type="uname"
            value={uname}
            onChange={e => setUser(e.target.value)}            
            maxLength="10"
            minLength="3"
        />
        <input type="text"
            value={upass}
            onChange={e => setPassword(e.target.value)}
            type="password"
             maxLength="10"
            minLength="3"
         />
         <input type="submit"
            value="Submit" 
            disabled={!validateForm()}
         />
          <input type="reset"
            value="Cancel" 
         />         
      </form>
      <span>Please use username and password : 'admin'</span>
    </div>  
  )
}

export default Login;