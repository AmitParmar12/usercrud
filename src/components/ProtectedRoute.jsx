import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const userEmail = localStorage.getItem('userEmail');
  const userPassword = localStorage.getItem('userPassword');

  if (!userEmail || !userPassword) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
