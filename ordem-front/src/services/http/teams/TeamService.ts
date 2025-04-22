import { api } from '../../../lib/axios';

export type Team = {
  id: string;
  name: string;
  specialization: string;
};

export type CreateTeamProps = {
  team: Omit<Team, 'id'>;
  agentIds: string[];
};

export const TeamService = {
  findAgentsById: async (id: string) => {
    const { data } = await api.get(`/teams/${id}/agents`);
    return data;
  },
  findById: async (id: string) => {
    const { data } = await api.get(`/teams/${id}`);
    return data;
  },
  findAll: async () => {
    const { data } = await api.get('/teams');
    return data;
  },
  create: async (team: CreateTeamProps) => {
    try {
      const data = await api.post('/teams', team);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  addAgents: async (teamId: string, agentIds: string[]) => {
    try {
      const { data } = await api.post(
          `/teams/${teamId}/agents`,
          agentIds
      );
      return data;
    } catch (error) {
      console.error('Erro ao adicionar agentes:', error);
      throw error;
    }
  },
  removeAgent: async (teamId: string, agentId: string) => {
    try {
      const { data } = await api.delete(
          `/teams/${teamId}/agents/${agentId}`
      );
      return data;
    } catch (error) {
      console.error('Erro ao remover agente:', error);
      throw error;
    }
  },
  update: async (id: string, updatedTeam: { name: string; specialization: string }, agentIds: string[]) => {
    const { data } = await api.put(`/teams/${id}`, {
      team: updatedTeam,
      agentIds,                         // backend pode processar inclusão/removal de uma vez
    });
    return data;
  },
  delete: async (id: string) => {
    try {
      const { data } = await api.delete(`/teams/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
