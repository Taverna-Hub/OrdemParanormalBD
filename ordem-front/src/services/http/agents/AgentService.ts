import { api } from '../../../lib/axios';

export type Agent = {
  id: string;
  name: string;
  birthDate: Date;
  telNumber: string;
  specialization: string;
  rank_agent: 'Recruta' | 'Veterano' | 'Elite';
  nex: number;
  retired: boolean;
  transcended: boolean;
};

export const AgentService = {
  findAll: async () => {
    const { data } = await api.get('/agents');
    return data;
  },
  create: async (agent: Agent) => {
    try {
      const data = await api.post('/agents', agent);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
