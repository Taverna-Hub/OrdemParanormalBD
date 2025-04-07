import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);
