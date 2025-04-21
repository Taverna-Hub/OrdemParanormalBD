import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';

export function Threats() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <Helmet title="Ameaças" />

      <h1>Ameaças</h1>

      <S.SearchInterface>
        <Input placeholder="Procure uma ameaças..." />

        <Button onClick={() => navigate('/ameacas/criar')}>Criar ameaça</Button>
      </S.SearchInterface>

      <S.TableContainer>
        <div>
          <h2>Ameaças</h2>
        </div>
        <S.Table>
          <S.TableHead>
            <tr>
              <th>#</th>
              <th>Nome</th>
            </tr>
          </S.TableHead>
          <tbody>
            <S.TableRow>
              <td>
                <span>1</span>
              </td>
              <td>
                <p>Paulo Henrique Rosado Fernandes</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>2</span>
              </td>
              <td>
                <p>Gustavo Mourato Aureliano de Melo</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>3</span>
              </td>
              <td>
                <p>Luan Hiroshi Kato</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>4</span>
              </td>
              <td>
                <p>Vinicius de Andrade Jordão</p>
              </td>
            </S.TableRow>
          </tbody>
        </S.Table>
      </S.TableContainer>

      <Navigation />
    </S.Wrapper>
  );
}
