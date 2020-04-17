import React from 'react';
import RegisterContextProvider from './RegisterContext';
import RegisterForm from './RegisterForm';
import RegisterNavbar from './RegisterNavbar';

function Register(){
    return(
        <div className = "App">
            <RegisterContextProvider>
            <RegisterNavbar />
            <RegisterForm />
            </RegisterContextProvider>
        </div>
    )
}

export default Register;