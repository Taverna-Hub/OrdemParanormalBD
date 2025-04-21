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
};
