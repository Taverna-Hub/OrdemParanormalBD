import { api } from '../../../lib/axios';

export type MissionAssignment = {
  id_team: string;
  id_mission: string;
  allocation_date: Date;
  deallocation_date: Date;
};

export const MissionAssignmentService = {
  findById: async (id: string) => {
    const { data } = await api.get(`/assignment/mission/${id}`);
    return data;
  },
  create: async (assignment: MissionAssignment) => {
    try {
      const data = await api.post('/assignment', assignment);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  update: async (id_team: string, id_mission: string) => {
    try {
      const body = {
        id_team,
        id_mission,
      };

      const data = await api.put(`/assignment`, body);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
