import { api } from '../../../lib/axios';

export type MissionAssignment = {
  id_team: string;
  id_mission: string;
  allocation_date: Date;
  deallocation_date: Date;
};

export const MissionAssignmentService = {
  findById: async (id: string) => {
    const { data } = await api.get(`/assignment/${id}`);
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
      const date = {
        deallocation_date: new Date(),
      };
      const data = await api.post(`/assignment/${id_mission}/${id_team}`, date);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
