import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/dashboard';
import { Missions } from './pages/missions';
import { Agents } from './pages/agents';
import { Teams } from './pages/teams';
import { Threats } from './pages/threats';
import { Arsenal } from './pages/arsenal';
import { Login } from './pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/missoes',
    element: <Missions />,
  },
  {
    path: '/agentes',
    element: <Agents />,
  },
  {
    path: '/equipes',
    element: <Teams />,
  },
  {
    path: '/ameacas',
    element: <Threats />,
  },
  {
    path: '/arsenal',
    element: <Arsenal />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
