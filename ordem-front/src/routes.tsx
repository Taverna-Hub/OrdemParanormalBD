import { createBrowserRouter } from 'react-router';
import { Dashboard } from './pages/dashboard';
import { Missions } from './pages/missions/list';
import { Agents } from './pages/agents/list';
import { Teams } from './pages/teams/list';
import { Threats } from './pages/threats/list';
import { Login } from './pages/login';
import { CreateAgent } from './pages/agents/create';
import { CreateTeam } from './pages/teams/create';
import { Elements } from './pages/elements/list';
import { CreateMission } from './pages/missions/create';
import {EditAgent} from "./pages/agents/edit";

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
    path: '/missoes/criar',
    element: <CreateMission />,
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
    path: 'agentes/editar/:agentId',
    element: <EditAgent />
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
    path: '/elementos',
    element: <Elements />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
