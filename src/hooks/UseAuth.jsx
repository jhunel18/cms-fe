import { useState, useEffect } from 'react';
import { AuthenticationService } from "../services/AuthenticationService";
import {getToken, getUserRole} from "../utils/TokenHelpers"

const useAuth = () => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const role = getUserRole();
      setUserRole(role);
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      const token = await AuthenticationService.login(credentials);
      const role = getUserRole();
      setUserRole(role);
      setLoading(false);
      return token;
    } catch (error) {
      setLoading(false);
      throw new Error(error.message);
    }
  };

  const logout = () => {
    AuthenticationService.logout();
    setUserRole(null);
  };

  return { userRole, loading, login, logout };
};

export default useAuth;
