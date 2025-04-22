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
      const data = await api.post('/ParanormalEntity', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  createOrganization: async (threat: CreateOrganizationProps) => {
    try {
      const data = await api.post('/Organization', threat);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findAllParanormalEntity: async () => {
    const { data } = await api.get('/ParanormalEntity');
    return data;
  },
  findAllOrganization: async () => {
    const { data } = await api.get('/Organization');
    return data;
  },
  findParanormalById: async (id: string) => {
    const { data } = await api.get(`/ParanormalEntity/${id}`);
    return data;
  },
  findOrganizationById: async (id: string) => {
    const { data } = await api.get(`/Organization/${id}`);
    return data;
  },
  addMember: async (id: string, member: Member) => {
    try {
      const data = await api.post(`/Organization/add/${id}`, member);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
