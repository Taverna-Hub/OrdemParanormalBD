import { api } from '../../../lib/axios';

export type Address = {
  id_address: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
  postal_code: string;
};

export type CreateAddressProps = Omit<Address, 'id_address'>;

export const AddressService = {
  findAll: async () => {
    const { data } = await api.get('/address');
    return data;
  },
  create: async (address: CreateAddressProps) => {
    try {
      const data = await api.post('/address', address);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findById: async (id: string) => {
    const { data } = await api.get(`/addresses/${id}`);
    return data;
  }

};
