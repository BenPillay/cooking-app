import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const RegisterContext = createContext();

const RegisterContextProvider = (props) => {
  const [details, setDetails] = useState([
    {email: '', 
     pwd: '', 
     id: ''}
  ]);

  const addDetails = (email, pwd) => {
    setDetails([...details, {email, pwd, id: uuid()}]);
  };

  return (
    <RegisterContext.Provider value={{details, addDetails }}>
      {props.children}
    </RegisterContext.Provider>
  );
}
 
export default RegisterContextProvider;