import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Button } from '../../../components/Button';
import { Navigation } from '../../../components/Navigation';

export function CreateTeam() {
  const { control } = useForm();
  const specOptions = [
    {
      label: 'Investigação',
      value: 'Investigação',
    },
    {
      label: 'Combate',
      value: 'Combate',
    },
    {
      label: 'Suporte',
      value: 'Suporte',
    },
  ];
  const agentsOptions = [
    {
      label: 'Todos os agentes',
      value: 'all',
    },
  ];
  const agents = [
    { id: 1, name: 'Carlos Silva', role: 'Especialista Tático' },
    { id: 2, name: 'Ana Oliveira', role: 'Analista de Intel' },
    { id: 3, name: 'Bruno Santos', role: 'Operador de Campo' },
    { id: 4, name: 'Daniela Costa', role: 'Especialista Técnico' },
    { id: 5, name: 'Eduardo Lima', role: 'Médico de Campo' },
    { id: 6, name: 'Paulo Rosado', role: 'Ocultista' },
    { id: 7, name: 'Gustavo Mourato', role: 'Especialista' },
  ];
  return (
    <S.Wrapper>
      <Helmet title="Criar Nova Equipe" />

      <h1>Criar Nova Equipe</h1>

      <S.GridWrapper>
        <S.GridColumn>
          <S.TeamBasicInfo>
            <h2>Informações Básicas</h2>
            <Input
              label="Nome da equipe"
              placeholder="Digite o nome da equipe"
              name="nome_do_campo_no_back"
            />

            <Select
              label="Especialização da equipe"
              placeholder="Selecione uma especialização"
              control={control}
              options={specOptions}
              name="type"
            />
          </S.TeamBasicInfo>

          <S.TeamStatistics>
            <h2>Estatísticas da Equipe</h2>
            <p>Selecione agentes para vizualizar estatísticas</p>
          </S.TeamStatistics>
        </S.GridColumn>

        <S.GridColumn>
          <S.TeamSelectAgents>
            <h2>Seleção de Agentes</h2>
            <Select
              control={control}
              options={agentsOptions}
              name="filter"
              placeholder=""
            />

            <S.AgentsHeader>
              <span>Agentes</span>
              <span></span>
              <span>Líder</span>
            </S.AgentsHeader>

            {agents.map((agent, index) => (
              <S.AgentCard>
                <input
                  type="radio"
                  name={'lider' + index}
                  id={'lider' + index}
                  style={{ marginRight: '1rem' }}
                />

                <S.Label htmlFor={'lider' + index}>
                  <h3>{agent.name}</h3>
                  <p>{agent.role}</p>
                </S.Label>

                <Button size="sm">Definir como líder</Button>
              </S.AgentCard>
            ))}
          </S.TeamSelectAgents>

          <S.GridButtons>
            <Button>Cancelar</Button>
            <Button> Criar Equipe </Button>
          </S.GridButtons>
        </S.GridColumn>
      </S.GridWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
