import React from 'react'
import LoginLayout from '../../shared/components/layouts/LoginLayout';
import LoginComponent from '../../components/login/LoginComponent';

const LoginPage = () => {
  const handleLogin = (credentials) => {
    console.log('Login successful:', credentials);
};
  return (
    <LoginLayout>
    <LoginComponent onSubmit={handleLogin}/>
  </LoginLayout>
  )
}

export default LoginPage