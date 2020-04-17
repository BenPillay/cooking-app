import React, { useContext, useState } from 'react';
import { RegisterContext } from './RegisterContext';
import Home from "../Home/Home";
import {Route, Link} from "react-router-dom";

const RegisterForm = () => {
  const { addDetails } = useContext(RegisterContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const handleClick = (e) =>{
    e.preventDefault();
    if(confirmPwd === pwd){
      window.location.href = "Home";
    }else{
      window.href = "/";
      alert("Password and Confirm password don't match ");
    }

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addDetails(email, pwd, confirmPwd)
    setEmail('');
    setPwd('');
    confirmPwd('');
  }

  return (
    <div>
      <Route exact path = "/Home" component = {Home} />
      <form onSubmit={handleSubmit} className = 'note-form'>
        <input type="email" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Password" value={pwd}
        onChange={(e) => setPwd(e.target.value)} required />     
      
        <input type="password" placeholder="Confirm Password" value={confirmPwd}
        onChange={(e) => setConfirmPwd(e.target.value)} required />     
      
      <a href="#" class="loginButton" onClick = {handleClick}>Enter</a>
      </form>
    </div>
  );
}
 
export default RegisterForm;