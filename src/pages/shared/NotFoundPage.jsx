import React from 'react'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>404 - Not Found</h1>
    <p>The page you are trying to access is not existing.</p>
    <Link to="/">Go to Login</Link>
  </div>
  )
}

export default NotFoundPage