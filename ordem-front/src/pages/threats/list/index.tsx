import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import {
  GetThreatProps,
  ThreatService,
} from '../../../services/http/threats/ThreatService';

export function Threats() {
  const navigate = useNavigate();

  const { data: paranormalEntities } = useQuery<GetThreatProps[]>({
    queryKey: ['paranormalEntities'],
    queryFn: () => ThreatService.findAllParanormalEntity(),
  });

  function handleGoToThreat(id: string) {
    navigate(`/ameacas/${id}`);
  }

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
              <th>Elementos</th>
            </tr>
          </S.TableHead>
          <tbody>
            {paranormalEntities?.map((paranormalEntity, index) => {
              return (
                <S.TableRow
                  onClick={() => handleGoToThreat(paranormalEntity.id_threat)}
                >
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>
                      {' '}
                      {paranormalEntity.names.map((name, index) => {
                        if (index + 1 === paranormalEntity.names.length) {
                          return `${name}`;
                        } else {
                          return `${name}, `;
                        }
                      })}
                    </p>
                  </td>
                  <td>
                    <p>
                      {paranormalEntity.elementsNames.map((name, index) => {
                        if (
                          index + 1 ===
                          paranormalEntity.elementsNames.length
                        ) {
                          return `${name}`;
                        } else {
                          return `${name}, `;
                        }
                      })}
                    </p>
                  </td>
                </S.TableRow>
              );
            })}
          </tbody>
        </S.Table>
      </S.TableContainer>

      <Navigation />
    </S.Wrapper>
  );
}
