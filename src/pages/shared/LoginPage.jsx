import React from 'react'
import LoginLayout from '../../layouts/LoginLayout';
import Login from '../../components/login/Login';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login successful');
};
  return (
    <LoginLayout>
    <Login onSubmit={handleLogin}/>
  </LoginLayout>
  )
}

export default LoginPage