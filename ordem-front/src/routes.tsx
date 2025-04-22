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
import { SpecificMission } from './pages/missions/id';
import { EditAgent } from './pages/agents/id';
import { CreateParanormalThreats } from './pages/threats/createParanormal';
import { UpdateThreats } from './pages/threats/id';
import { UpdateTeam } from './pages/teams/id';
import { CreateAddress } from './pages/address/create';
import { CreateOrganizationThreats } from './pages/threats/createOrganization';
import { UpdateOrganization } from './pages/threats/idOrganizatino';

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
    path: '/missoes/:id',
    element: <SpecificMission />,
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
    path: 'agentes/:id',
    element: <EditAgent />,
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
    path: '/equipes/:id',
    element: <UpdateTeam />,
  },
  {
    path: '/ameacas',
    element: <Threats />,
  },
  {
    path: '/ameacas/criar/paranormal',
    element: <CreateParanormalThreats />,
  },
  {
    path: '/ameacas/criar/organizacao',
    element: <CreateOrganizationThreats />,
  },
  {
    path: '/ameacas/paranormal/:id',
    element: <UpdateThreats />,
  },
  {
    path: '/ameacas/organizacao/:id',
    element: <UpdateOrganization />,
  },
  {
    path: '/elementos',
    element: <Elements />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/endereco/criar',
    element: <CreateAddress />,
  },
]);
