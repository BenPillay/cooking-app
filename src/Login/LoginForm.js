import React, { useContext, useState } from 'react';
import { LoginContext } from './LoginContext';
import Home from "../Home/Home";
import {Route, Link} from "react-router-dom";

const LoginForm = () => {
  const { addDetails } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleClick = (e) =>{
    e.preventDefault();
    if (email === "Ben@gmail.com" && pwd === "714"){
      window.location.href = "Home";
    }else{
      window.location.href = "/";
      alert("Incorrect email or password")
    }

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addDetails(email, pwd)
    setEmail('');
    setPwd('');
  }

  return (
    <div>
      <Route exact path = "/Home" component = {Home} />
      <form onSubmit={handleSubmit} className = 'note-form'>
        <input type="text" placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} required />

        <input type="text" placeholder="Password" value={pwd}
        onChange={(e) => setPwd(e.target.value)} required />     
      
      <a href="#" class="loginButton" onClick = {handleClick}>Login</a>
      </form>
    </div>
  );
}
 
export default LoginForm;