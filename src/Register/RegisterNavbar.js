import React, { useContext } from 'react';
import { RegisterContext } from './RegisterContext';

const RegisterNavbar = () => {
  const { details } = useContext(RegisterContext);
  return (
    <div className="navbar">
      <h1>Register</h1>
    </div>
  );
}
 
export default RegisterNavbar;