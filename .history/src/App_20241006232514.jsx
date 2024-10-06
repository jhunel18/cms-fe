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
import SuppliesPage from './pages/user/ViewSuppliesPage';
import ClientsPage from './pages/user/ClientsPage';
import AddUsers from './pages/admin/AddUsersPage';

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
          path="/supplies" 
          element={
            <ProtectedRoute component={Supplies} requiredRole="role_user" />
          } 
        />
         <Route 
          path="/clients" 
          element={
            <ProtectedRoute component={ClientsPage} requiredRole="role_user" />
          } 
        />
        
        <Route path = "*" element= {<NotFoundPage/>}/>
  </Routes>
  )
}

export default App
