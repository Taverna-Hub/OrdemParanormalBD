import { Navigate, useLocation } from 'react-router';

export function ProtectedRoute({ children }: any) {
  const location = useLocation();

  const isAuthenticated = () => {
    return !!localStorage.getItem('ordem:auth');
  };

  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
