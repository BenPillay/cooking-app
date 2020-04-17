import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const LoginNavbar = () => {
  const { details } = useContext(LoginContext);
  return (
    <div className="navbar">
      <h1>Login</h1>
    </div>
  );
}
 
export default LoginNavbar;