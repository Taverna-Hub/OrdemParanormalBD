import { api } from '../../../lib/axios';

export type GetThreatProps = {
  id_threat: string;
  names: string[];
  description: string;
  enigma: string;
  abilities: string[];
  elements: string[];
  elementsNames: string[];
};

export type CreateThreatProps = {
  names: string[];
  description: string;
  abilities: string[];
  elements: string[];
  enigma: string;
};

export const ThreatService = {
  create: async (threat: CreateThreatProps) => {
    try {
      const data = await api.post('/ParanormalEntity', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id: string, threat: CreateThreatProps) => {
    try {
      const { data } = await api.put(`/ParanormalEntity/${id}`, threat);
      return data;
    } catch (error) {
      console.error('Erro ao atualizar ameaça:', error);
      throw error;
    }
  },
  findAllParanormalEntity: async () => {
    const { data } = await api.get('/ParanormalEntity');
    return data;
  },
  findById: async (id: string) => {
    const { data } = await api.get(`/ParanormalEntity/${id}`);
    return data;
  },
  delete: async (id: string) => {
    try {
      const { data } = await api.delete(`/ParanormalEntity/${id}`);
      return data;
    } catch (error) {
      console.error('Erro ao deletar ameaça:', error);
      throw error;
    }
  },
};
