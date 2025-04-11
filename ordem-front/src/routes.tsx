import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/dashboard';
import { Missions } from './pages/missions';
import { Agents } from './pages/agents/list';
import { Teams } from './pages/teams';
import { Threats } from './pages/threats';
import { Arsenal } from './pages/arsenal';
import { Login } from './pages/login';
import { CreateAgent } from './pages/agents/create';
import { CreateTeam } from './pages/teams/create';

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
    path: '/agentes/criar',
    element: <CreateAgent />,
  },
  {
    path: '/equipes',
    element: <Teams />,
  },
  {
    path: '/equipes/criar',
    element: <CreateTeam />,
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
