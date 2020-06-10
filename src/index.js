import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from './login';
import FundWithdraw from './fundWithdraw';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin:false,
      username:''
    };
  }

  onLoginSubmit = ({isLogin,username}) => {
    if(isLogin){
      //login success
      alert('success');
    }else{
      //login fail
      alert('Please enter valid input');
    }
    this.setState({
       isLogin:isLogin,
       username:username
    });
    console.log(isLogin+""+username)
  }

  render() {
    let { isLogin, username } = this.state;
    return isLogin ? 
    <FundWithdraw username={username}/> :  
    <Login onFormSubmit={this.onLoginSubmit}/>;   
   }
        
  
}

render(<App />, document.getElementById('root'));
