import { api } from '../../../lib/axios';

export type Agent = {
  name: string;
  birthDate: Date;
  phone: string;
  specialization: string;
  rank_agent: 'Recruta' | 'Veterano' | 'Elite';
  nex: number;
  retired: boolean;
  transcended: boolean;
};

export const AgentService = {
  create: async (agent: Agent) => {
    try {
      const data = api.post('/agents', agent);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
