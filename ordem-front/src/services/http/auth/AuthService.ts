import { api } from '../../../lib/axios';

export type LoginProps = {
  login: string;
  password: string;
};
export const AuthService = {
  login: async ({ login, password }: LoginProps) => {
    const { data } = await api.post(`/auth/login`, {
      login,
      password,
    });

    console.log(data);

    const credentials = btoa(`${login}:${password}`);
    localStorage.setItem('ordem:auth', credentials);

    return data;
  },
  logout: async () => {
    await api.post(`/auth/logout`);
    localStorage.removeItem('ordem:auth');
  },

};
