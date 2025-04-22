import { api } from '../../../lib/axios';

export type Evidence = {
  id_evidence: string;
  origin: string;
  description: string;
  stability_level: 'Estavel' | 'Volatil' | 'Perigoso' | 'Contido';
  mission: string;
};

export type CreateEvidenceProps = Omit<Evidence, 'id_evidence'>;

export const EvidenceService = {
  findById: async (id: string) => {
    const { data } = await api.get(`/Evidence/mission/${id}`);
    return data;
  },
  findAll: async () => {
    const { data } = await api.get('/Evidence');
    return data;
  },
  create: async (evidence: CreateEvidenceProps) => {
    try {
      const data = await api.post('/Evidence', evidence);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
