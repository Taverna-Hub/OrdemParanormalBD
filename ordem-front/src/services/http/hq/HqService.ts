import { api } from '../../../lib/axios';

export type TeamsSpecializationsInHQ = {
  specialization: string;
  quantity: number;
};

export type MissionByStatusDTO = {
  status: string;
  total: number;
};

export type NexByHqDTO = {
  hqName: string;
  nex: number;
};

export type AgentsBySpecializationDTO = {
  specialization: string;
  total: number;
};

export type RankAgentsDTO = {
  agent_name: string;
  missions_success_count: number;
};

export const HqService = {
  getSpecializationsInHQ: async (): Promise<TeamsSpecializationsInHQ[]> => {
    const { data } = await api.get('/qg/teams/specializations');
    return data;
  },

  getMissionsByStatus: async (): Promise<MissionByStatusDTO[]> => {
    const { data } = await api.get('/qg/missions/status');
    return data;
  },

  getMeanNexByHQ: async (): Promise<NexByHqDTO[]> => {
    const { data } = await api.get('/qg/agents/nex');
    return data;
  },

  getAgentsBySpecializationInHq: async (): Promise<
    AgentsBySpecializationDTO[]
  > => {
    const { data } = await api.get('/qg/agents/specialization');
    return data;
  },

  getRankAgentsByHQ: async (): Promise<RankAgentsDTO[]> => {
    const { data } = await api.get('/qg/agents/rank');
    return data;
  },
};
