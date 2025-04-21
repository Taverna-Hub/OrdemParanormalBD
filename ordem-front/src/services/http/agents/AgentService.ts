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
  findById: async (id: string) => {
    const { data } = await api.get(`/agents/${id}`)
    return data;
  },
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
  update: async (id: string, updateAgent: Partial<Omit<Agent, 'id'>>) => {
    try {
      const { data } = await api.put(`/agents/${id}`, updateAgent);
      return data;
    } catch (error) {
      console.error('Erro ao atualizar agente:', error);
      throw error;
    }
  },
  delete: async (id: string) => {
    try {
      await api.delete(`/agents/${id}`);
    } catch (error) {
      console.error('Erro ao deletar agente:', error);
      throw error;
    }
  }
};
