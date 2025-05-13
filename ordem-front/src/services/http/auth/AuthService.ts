import { api } from '../../../lib/axios';

export type LoginProps = {
  login: string;
  password: string;
};
export const AuthService = {
  login: async ({ login, password }: LoginProps) => {
    const { data } = await api.post(`/login`, {
      login,
      password,
    });

    return data;
  },
};
