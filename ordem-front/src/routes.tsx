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
import { ProtectedRoute } from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />,
      </ProtectedRoute>
    )
  },
  {
    path: '/missoes',
    element: (
      <ProtectedRoute>
        <Missions />
      </ProtectedRoute>
    ),
  },
  {
    path: '/missoes/criar',
    element: (
      <ProtectedRoute>
        <CreateMission />
      </ProtectedRoute>
    ),
  },
  {
    path: '/missoes/:id',
    element: (
      <ProtectedRoute>
        <SpecificMission />
      </ProtectedRoute>
    ),
  },
  {
    path: '/agentes',
    element: (
      <ProtectedRoute>
        <Agents />
      </ProtectedRoute>
    ),
  },
  {
    path: '/agentes/criar',
    element: (
      <ProtectedRoute>
        <CreateAgent />
      </ProtectedRoute>
    ),
  },
  {
    path: 'agentes/:id',
    element: (
      <ProtectedRoute>
        <EditAgent />
      </ProtectedRoute>
    ),
  },
  {
    path: '/equipes',
    element: (
      <ProtectedRoute>
        <Teams />
      </ProtectedRoute>
    ),
  },
  {
    path: '/equipes/criar',
    element: (
      <ProtectedRoute>
        <CreateTeam />
      </ProtectedRoute>
    ),
  },
  {
    path: '/equipes/:id',
    element: (
      <ProtectedRoute>
        <UpdateTeam />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ameacas',
    element: (
      <ProtectedRoute>
        <Threats />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ameacas/criar/paranormal',
    element: (
      <ProtectedRoute>
        <CreateParanormalThreats />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ameacas/criar/organizacao',
    element: (
      <ProtectedRoute>
        <CreateOrganizationThreats />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ameacas/paranormal/:id',
    element: (
      <ProtectedRoute>
        <UpdateThreats />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ameacas/organizacao/:id',
    element: (
      <ProtectedRoute>
        <UpdateOrganization />
      </ProtectedRoute>
    ),
  },
  {
    path: '/elementos',
    element: (
      <ProtectedRoute>
        <Elements />
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/endereco/criar',
    element: (
      <ProtectedRoute>
        <CreateAddress />
      </ProtectedRoute>
    ),
  },
]);
