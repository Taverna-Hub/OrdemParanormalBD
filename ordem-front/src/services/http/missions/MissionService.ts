import { api } from '../../../lib/axios';

export type Mission = {
  id_mission: string;
  title: string;
  status: 'Arquivada' | 'Concluida' | 'Aberta';
  risks: string;
  objective: string;
  start_date: Date;
  end_date: Date;
  id_address: string;
  team_name: string;
};

export type MissionThreat = {
  description: string;
  id_threat: string;
  threatType: string;
  threat_names: string;
};

export type MissionNeutralizedThreat = {
  id_mission: string;
  id_team: string;
  id_threat: string;
  method: string;
  result: string;
};

export type CreateMissionProps = Omit<Mission, 'id_mission'>;

export const MissionService = {
  findById: async (id: string) => {
    const { data } = await api.get(`/missions/${id}`);
    return data;
  },
  findAll: async () => {
    const { data } = await api.get('/missions/with_team');
    return data;
  },
  findMissionThreats: async (id: string) => {
    const { data } = await api.get(`missions/threats/${id}`);
    return data;
  },
  findMissionNeutralizedThreats: async (id: string) => {
    const { data } = await api.get(`missions/neutralization/${id}`);
    return data;
  },
  create: async (mission: Mission) => {
    try {
      const data = await api.post('/missions', mission);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (id: string) => {
    try {
      const { data } = await api.delete<void>(`/missions/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
