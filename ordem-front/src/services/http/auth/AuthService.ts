import { api } from '../../../lib/axios';

export type LoginProps = {
  login: string;
  password_ver: string;
};
export const AuthService = {
  login: async ({ login, password_ver }: LoginProps) => {
    const { data } = await api.post(`/login`, {
      login,
      password_ver,
    });

    return data;
  },
};
