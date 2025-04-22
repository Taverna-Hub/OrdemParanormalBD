import { api } from '../../../lib/axios';

export type Threat = {
  id_threat: string;
  description: string;
};

export type ThreatName = {
  id_threat: string;
  name: string;
};

export type ThreatMission = {
  id_threat: string;
  id_mission: string;
};

export type ThreatNeutralization = {
  id_team: string;
  id_mission: string;
  id_threat: string;
  method: string;
  result: string;
};

export type ThreatElement = {
  id_element: string;
  id_threat: string;
};

export type ParanormalEntity = {
  id_entity: string;
  enigma: string | null;
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
};
