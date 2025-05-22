import { api } from '../../../lib/axios';

export type Ritual = {
  id_ritual: string;
  name: string;
  description: string;
  requirements: string;
  risks: string;
  id_element: string;
};

export const RitualService = {
  findAll: async () => {
    const { data } = await api.get('/ritual');
    return data;
  },
};
