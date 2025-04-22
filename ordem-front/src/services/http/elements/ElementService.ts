import { api } from '../../../lib/axios';

export type Element = {
  id_element: string;
  name: string;
  desciption: string;
  vantagem: string;
};

export const ElementService = {
  findAll: async () => {
    try {
      const { data } = await api.get('/element');
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findById: async (id: string) => {
    try {
      const { data } = await api.get(`/element/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
