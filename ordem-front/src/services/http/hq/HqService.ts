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

export type FinishedMissionsDTO = {
  hq_name: string;
  total_finished: number;
  total_finished_month: number;
};

export type ActiveAgentsDTO = {
  total_agents: number;
  active_agents: number;
};

export type OpenMissionsDTO = {
  hq_name: number;
  total: number;
};

export type MissionAvgDurationDTO = {
  hq_name: number;
  avgDurationDays: number;
};

export type VerissimoDTO = {
  hqName: string;
  verName: string;
};

export type ThreatsLocationDTO = {
  element: string;
  lat: string;
  lng: string;
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

  getFinishedMissionsByMonth: async (
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
  ): Promise<FinishedMissionsDTO> => {
    const { data } = await api.get(
      `/qg/missions/finished?m=${month}&y=${year}`,
    );
    return data;
  },

  getActiveAgents: async (): Promise<ActiveAgentsDTO> => {
    const { data } = await api.get(`/qg/agents/active`);
    return data;
  },

  getOpenMissions: async (): Promise<OpenMissionsDTO> => {
    const { data } = await api.get(`/qg/missions/open`);
    return data;
  },

  getMissionsAverageDuration: async (
    month = new Date().getMonth(),
    year = new Date().getFullYear(),
  ): Promise<MissionAvgDurationDTO> => {
    const { data } = await api.get(
      `/qg/missions/duration?m=${month}&y=${year}`,
    );
    return data;
  },
  getVerissimoHQ: async (): Promise<VerissimoDTO> => {
    const { data } = await api.get(`/qg/welcome`);
    return data;
  },

  getLocation: async (): Promise<ThreatsLocationDTO[]> => {
    const { data } = await api.get(`/qg/threats/location`);
    return data;
  },
};
