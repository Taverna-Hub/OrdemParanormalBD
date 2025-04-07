import { FiUser } from 'react-icons/fi';
import * as S from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Login() {
  return (
    <S.Wrapper>
      <S.LoginForm>
        <div>
          <FiUser />
        </div>

        <Input label="Login" />
        <Input label="Senha" />

        <Button>Entrar</Button>
      </S.LoginForm>
    </S.Wrapper>
  );
}
