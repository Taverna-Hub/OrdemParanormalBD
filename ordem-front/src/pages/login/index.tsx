import { FiLock, FiUser } from 'react-icons/fi';
import * as S from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { LoginProps } from '../../services/http/auth/AuthService';
import { Helmet } from 'react-helmet-async';
import { LuShield } from 'react-icons/lu';

export function Login() {
  const { register, handleSubmit } = useForm<LoginProps>();
  const { handleLogin } = useAuth();

  const today = new Date();

  async function handleSubmitLogin({ login, password }: LoginProps) {
    handleLogin({ login, password });
  }

  return (
    <>
      <Helmet title="Login" />
      <S.Wrapper>
        <S.Icon>
          <LuShield />
        </S.Icon>
        <S.LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
          <header>
            <h2>UMBRA</h2>
            <p>Unidade de Monitoramento de Bizarros e Realidades Alternativas</p>
          </header>

          <Input
            label="Login"
            {...register('login')}
            icon={<FiUser />}
            placeholder="Digite seu login"
          />
          <Input
            label="Senha"
            type="password"
            {...register('password')}
            icon={<FiLock />}
            placeholder="Digite sua senha"
          />

          <Button fullWidth>Entrar</Button>
        </S.LoginForm>

        <S.LoginFooter>
          <p>Acesso restrito a pessoal autorizado </p>
          <p>
            Departamento de Investigações Paranormais © {today.getFullYear()}
          </p>
        </S.LoginFooter>
      </S.Wrapper>
    </>
  );
}
