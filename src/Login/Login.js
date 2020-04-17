import React from 'react';
import LoginContextProvider from './LoginContext';
import LoginForm from './LoginForm';
import LoginNavbar from './LoginNavbar';

function Login(){
    return(
        <div className = "App">
            <LoginContextProvider>
            <LoginNavbar />
            <LoginForm />
            </LoginContextProvider>
        </div>
    )
}

export default Login;