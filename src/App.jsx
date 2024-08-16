import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboardPage from './pages/user/UserDashboardPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import LoginPage from './pages/shared/LoginPage';
import ForbiddenPage from './pages/shared/ForbiddenPage';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/protected/ProtectedRoute';
import NotFoundPage from './pages/shared/NotFoundPage';

function App() {
  
  return (
    <Routes>  
        <Route path="/" element={<LoginPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />

        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute component={AdminDashboardPage} requiredRole="ROLE_ADMIN" />
          } 
        />

        <Route 
          path="/user-dashboard" 
          element={
            <ProtectedRoute component={UserDashboardPage} requiredRole="ROLE_USER" />
          } 
        />
        <Route path = "*" element= {<NotFoundPage/>}/>
  </Routes>
  )
}

export default App
