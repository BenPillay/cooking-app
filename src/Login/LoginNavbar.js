import React, { useContext } from 'react';
import { LoginContext } from './LoginContext';

const LoginNavbar = () => {
  const { details } = useContext(LoginContext);
  return (
    <div className="navbar">
      <h1>Welcome to the cooking app</h1>
    </div>
  );
}
 
export default LoginNavbar;