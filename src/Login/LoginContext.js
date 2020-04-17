import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [details, setDetails] = useState([
    {email: '', 
     pwd: '', 
     id: ''}
  ]);

  const addDetails = (email, pwd) => {
    setDetails([...details, {email, pwd, id: uuid()}]);
  };

  return (
    <LoginContext.Provider value={{details, addDetails }}>
      {props.children}
    </LoginContext.Provider>
  );
}
 
export default LoginContextProvider;