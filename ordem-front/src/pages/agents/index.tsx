import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../components/Navigation';

export function Agents() {
  return (
    <S.Wrapper>
      <Helmet title="Agentes" />

      <h1>Agentes</h1>

      <S.TableContainer>
        <div>
          <h2>Agentes</h2>
        </div>
        <S.Table>
          <S.TableHead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Especialização</th>
              <th>Equipe</th>
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
              <td>
                <p>Ocultista</p>
              </td>
              <td>
                <p>Equipe</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>2</span>
              </td>
              <td>
                <p>Gustavo Mourato Aureliano de Melo</p>
              </td>
              <td>
                <p>Ocultista</p>
              </td>
              <td>
                <p>Equipe</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>3</span>
              </td>
              <td>
                <p>Luan Hiroshi Kato</p>
              </td>
              <td>
                <p>Especialista</p>
              </td>
              <td>
                <p>Equipe</p>
              </td>
            </S.TableRow>

            <S.TableRow>
              <td>
                <span>4</span>
              </td>
              <td>
                <p>Vinicius de Andrade Jordão</p>
              </td>
              <td>
                <p>Combatente</p>
              </td>
              <td>
                <p>-</p>
              </td>
            </S.TableRow>
          </tbody>
        </S.Table>
      </S.TableContainer>

      <Navigation />
    </S.Wrapper>
  );
}
