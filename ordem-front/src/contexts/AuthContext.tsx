import { createContext, ReactNode } from 'react';
import { AuthService, LoginProps } from '../services/http/auth/AuthService';
import { UseMutateFunction, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  handleLogin: UseMutateFunction<void, Error, LoginProps, unknown>;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { mutate: handleLogin } = useMutation({
    mutationFn: async (data: LoginProps) => {
      await AuthService.login(data);
    },
    onSuccess: () => {
      toast.success('Login efetuado com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao fazer o login!');
    },
  });

  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
