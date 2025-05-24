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

export type CreateOrganizationProps = {
  names: string[];
  description: string;
  elements: string[];
};

export type Member = {
  name: string;
  role: string;
  id_member: string;
};

export type GetOrganizationProps = {
  names: string[];
  description: string;
  elements: string[];
  members: Member[];
  id_threat: string;
  elementsNames: [];
};

export const ThreatService = {
  createParanormal: async (threat: CreateThreatProps) => {
    try {
      const data = await api.post('/paranormalEntity', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  updateParanormal: async (threat: CreateThreatProps) => {
    try {
      const data = await api.put('/paranormalEntity', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  createOrganization: async (threat: CreateOrganizationProps) => {
    try {
      const data = await api.post('/organization', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findAllParanormalEntity: async () => {
    const { data } = await api.get('/paranormalEntity');
    return data;
  },
  findAllOrganization: async () => {
    const { data } = await api.get('/organization');
    return data;
  },
  findParanormalById: async (id: string) => {
    const { data } = await api.get(`/paranormalEntity/${id}`);
    return data;
  },
  findOrganizationById: async (id: string) => {
    const { data } = await api.get(`/organization/${id}`);
    return data;
  },
  addMember: async (id: string, member: Member) => {
    try {
      const data = await api.post(`/organization/add/${id}`, member);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
