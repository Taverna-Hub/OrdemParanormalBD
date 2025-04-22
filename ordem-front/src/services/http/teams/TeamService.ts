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
  update: async (id: string, updatedTeam: { name: string; specialization: string }, agentIds: string[]) => {
    try {
      const { data } = await api.put(`/teams/${id}`, {
        team: updatedTeam,
        agentIds,
      });
      return data;
    } catch (error) {
      console.error('Erro ao atualizar equipe:', error);
      throw error;
    }
  },
  addAgents: async (teamId: string, agentIds: string[]) => {
    try {
      const { data } = await api.post(`/teams/${teamId}/agents`, agentIds);
      return data;
    } catch (error) {
      console.error('Erro ao adicionar agentes:', error);
      throw error; // Garantir que o erro seja propagado para o front-end
    }
  },
  removeAgents: async (teamId: string, agentIds: string[]) => {
    try {
      const { data } = await api.delete(`/teams/${teamId}/agents`, { data: agentIds });
      return data;
    } catch (error) {
      console.error('Erro ao remover agentes:', error);
      throw error; // Garantir que o erro seja propagado para o front-end
    }
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
