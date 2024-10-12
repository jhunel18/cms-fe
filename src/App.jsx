import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboardPage from './pages/user/UserDashboardPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import LoginPage from './pages/shared/LoginPage';
import ForbiddenPage from './pages/shared/ForbiddenPage';
import {Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/protected/ProtectedRoute';
import NotFoundPage from './pages/shared/NotFoundPage';
import ViewUsers from './pages/admin/ViewUsersPage'
import ViewSupplies from './pages/user/ViewSuppliesPage';
import AddClientPage from './pages/user/AddClientPage';
import AddUsers from './pages/admin/AddUsersPage';
import AddSupplies from './pages/user/AddSuppliesPage';
import ViewClientsPage from './pages/user/ViewClientsPage';
import AddTreatmentPage from './pages/user/AddTreatmentPage';
import ViewTreatmentPage from './pages/user/ViewTreatmentPage';

function App() {
  
  return (
    <Routes>  
        <Route path="/" element={<LoginPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />

        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute component={AdminDashboardPage} requiredRole="role_admin" />
          } 
        />
         <Route 
          path="manage-users/add" 
          element={
            <ProtectedRoute component={AddUsers} requiredRole="role_admin" />
          } 
        />
         <Route 
          path="manage-users/view" 
          element={
            <ProtectedRoute component={ViewUsers} requiredRole="role_admin" />
          } 
        />
        <Route 
          path="/user-dashboard" 
          element={
            <ProtectedRoute component={UserDashboardPage} requiredRole="role_user" />
          } 
        />
        <Route 
          path="/supplies/add" 
          element={
            <ProtectedRoute component={AddSupplies} requiredRole="role_user" />
          } 
        />
        <Route 
          path="/supplies/view" 
          element={
            <ProtectedRoute component={ViewSupplies} requiredRole="role_user" />
          } 
         
        />
         {/* Clients Page */}
         <Route 
          path="/clients/add" 
          element={
            <ProtectedRoute component={AddClientPage} requiredRole="role_user" />
          } 
        />
         <Route 
          path="/clients/view" 
          element={
            <ProtectedRoute component={ViewClientsPage} requiredRole="role_user" />
          } 
        />

         {/* Treatment Page */}
         <Route 
          path="/treatments/add" 
          element={
            <ProtectedRoute component={AddTreatmentPage} requiredRole="role_user" />
          } 
        />
         <Route 
          path="/treatments/view" 
          element={
            <ProtectedRoute component={ViewTreatmentPage} requiredRole="role_user" />
          } 
        />

        
        
        <Route path = "*" element= {<NotFoundPage/>}/>
  </Routes>
  )
}

export default App
