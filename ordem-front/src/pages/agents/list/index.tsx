import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { Button } from '../../../components/Button';
import { useNavigate } from 'react-router';
import { Input } from '../../../components/Input';
import { useQuery } from '@tanstack/react-query';
import {
  Agent,
  AgentService,
} from '../../../services/http/agents/AgentService';

export function Agents() {
  const navigate = useNavigate();

  const { data: agents } = useQuery({
    queryKey: ['agents'],
    queryFn: () => AgentService.findAll(),
  });

  const handleEditAgent = (agentId: string | number) => {
      navigate(`/agentes/${agentId}`)
  }

  return (
    <S.Wrapper>
      <Helmet title="Agentes" />

      <h1>Agentes</h1>

      <S.SearchInterface>
        <Input placeholder="Procure um agente..." />

        <Button onClick={() => navigate('/agentes/criar')}>Criar agente</Button>
      </S.SearchInterface>

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
              <th>Patente</th>
            </tr>
          </S.TableHead>
          <tbody>
            {agents?.map((agent: Agent, index: number) => {
              return (
                <S.TableRow
                    key={agent.id || index}
                    onClick={() => handleEditAgent(agent.id)}
                >
                  <td>
                    <span>{index + 1}</span>
                  </td>
                  <td>
                    <p>{agent.name}</p>
                  </td>
                  <td>
                    <p>{agent.specialization}</p>
                  </td>
                  <td>
                    <p>{agent.rank_agent}</p>
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
