import {
  FiAlertCircle,
  FiCalendar,
  FiTarget,
  FiTrash2,
  FiUsers,
} from 'react-icons/fi';
import { Navigation } from '../../../components/Navigation';
import * as S from './styles';
import { useParams } from 'react-router';
import {
  Mission,
  MissionService,
} from '../../../services/http/missions/MissionService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Select } from '../../../components/Select';
import { useForm } from 'react-hook-form';
import { Team, TeamService } from '../../../services/http/teams/TeamService';
import { Button } from '../../../components/Button';
import {
  MissionAssignment,
  MissionAssignmentService,
} from '../../../services/http/missionAssignment/MissionAssignmentService';
import { toast } from 'sonner';
import { Agent } from '../../../services/http/agents/AgentService';

type Options = {
  label: string;
  value: string;
};

type CreateAssignmentProps = Omit<MissionAssignment, 'id_team'> & {
  id_team: Options;
};

export function SpecificMission() {
  const { id } = useParams();
  const { control, getValues } = useForm();

  const queryClient = useQueryClient();

  const { data: mission } = useQuery<Mission>({
    queryKey: ['mission', id],
    queryFn: () => MissionService.findById(id as string),
  });

  const { data: teams } = useQuery<Team[]>({
    queryKey: ['teams'],
    queryFn: () => TeamService.findAll(),
  });

  const { data: assignments } = useQuery<MissionAssignment[]>({
    queryKey: ['assignments', id],
    queryFn: () => MissionAssignmentService.findById(id as string),
  });

  const assignment = assignments?.find(
    (ass: MissionAssignment) => ass.deallocation_date === null,
  );

  const { data: assignedTeam } = useQuery<Team[]>({
    queryKey: ['team', id],
    queryFn: () => TeamService.findById(assignment?.id_team as string),
  });

  const { data: teamAgents } = useQuery<Agent[]>({
    queryKey: ['team-agents', id],
    queryFn: () => TeamService.findAgentsById(assignment?.id_team as string),
  });

  const { mutate } = useMutation({
    mutationFn: async (data: CreateAssignmentProps) => {
      const reformattedData = {
        id_team: data.id_team.value,
        id_mission: id,
      };

      await MissionAssignmentService.create(
        reformattedData as MissionAssignment,
      );
    },
    onSuccess: async () => {
      toast.success('Equipe alocada com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao alocar equipe!');
    },
  });

  const { mutate: mutateDeallocateTeam } = useMutation({
    mutationFn: async () => {
      const data = {
        id_mission: id!,
        id_team: assignedTeam!.id_team,
      };

      await MissionAssignmentService.update(data.id_team, data.id_mission);
    },
    onSuccess: async () => {
      toast.success('Equipe desalocada com sucesso!');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao desalocar equipe!');
    },
  });

  function handleDeallocate() {
    mutateDeallocateTeam();
    queryClient.invalidateQueries({ queryKey: ['team-agents', id] });
  }

  function handleCreateAssignment() {
    const data = getValues() as CreateAssignmentProps;
    mutate(data);
    queryClient.invalidateQueries({ queryKey: ['team-agents', id] });
  }

  if (!mission) {
    return 'AAAAAAAAAAA';
  }

  if (!teams) {
    return 'AAAAAAAAA';
  }

  const teamOptions = teams.map((team: Team) => {
    return {
      label: team.name,
      value: team.id!,
    };
  });

  return (
    <S.Wrapper>
      <S.MissionHeader>
        <S.HeaderDetail>
          <div>
            <S.Status className={mission?.status}>
              <p>{mission?.status} </p>
            </S.Status>

            <h1>{mission?.title}</h1>

            <S.DateAndTime>
              <FiCalendar />
              <p>
                Iniciada:{' '}
                {new Date(mission.start_date).toLocaleDateString('pt-br')}
              </p>
            </S.DateAndTime>
          </div>

          <S.HeaderAgents>
            <div>
              {teamAgents && teamAgents?.length <= 4 ? (
                <>
                  {teamAgents?.map((agent) => (
                    <S.AvatarAgent>{agent.name[0]}</S.AvatarAgent>
                  ))}
                </>
              ) : (
                <>
                  {teamAgents?.map((agent, index) => {
                    if (index < 4) {
                      return <S.AvatarAgent>{agent.name[0]}</S.AvatarAgent>;
                    }
                  })}
                </>
              )}
            </div>
            <p>
              {teamAgents && teamAgents?.length <= 4 ? (
                <>
                  {teamAgents?.map((agent, index) => {
                    if (index === teamAgents.length - 1) {
                      return `${agent.name.split(' ')[0]}`;
                    } else {
                      return `${agent.name.split(' ')[0]}, `;
                    }
                  })}
                </>
              ) : (
                <>
                  {teamAgents?.map((agent, index) => {
                    if (index < 4) {
                      if (index === teamAgents.length - 1) {
                        return `${agent.name.split(' ')[0]}`;
                      } else {
                        return `${agent.name.split(' ')[0]}, `;
                      }
                    }
                  })}
                  e {teamAgents && teamAgents?.length - 4} outros
                </>
              )}
            </p>
          </S.HeaderAgents>
        </S.HeaderDetail>
      </S.MissionHeader>

      <S.MissionInfo>
        <S.InfoCard>
          <S.InfoCardHeader>
            <FiTarget />
            <h2>Objetivos</h2>
          </S.InfoCardHeader>

          <S.CardContent>
            <p>{mission.objective}</p>
          </S.CardContent>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardHeader>
            <FiAlertCircle />
            <h2>Riscos</h2>
          </S.InfoCardHeader>

          <S.CardContent>
            <p>{mission.risks}</p>
          </S.CardContent>
        </S.InfoCard>

        <S.InfoCard>
          <S.InfoCardHeader>
            <FiUsers />
            <h2>Atribuição de Equipe</h2>
          </S.InfoCardHeader>

          {!teamAgents ? (
            <S.CardNoAllocation>
              <Select
                control={control}
                options={teamOptions}
                label="Selecione uma equipe para esta missão:"
                name="id_team"
              />

              <Button onClick={() => handleCreateAssignment()}>
                Atribuir equipe
              </Button>
            </S.CardNoAllocation>
          ) : (
            <>
              <S.CardContent>
                <S.SelectedTeam>
                  <section>
                    <S.Avatar>
                      <FiUsers />
                    </S.Avatar>
                    <div>
                      <p>{assignedTeam?.name}</p>
                      <span>{teamAgents.length} agentes atribuidos</span>
                    </div>
                  </section>

                  <S.SelectedTeamsAction>
                    <Button onClick={() => handleDeallocate()}>
                      Remover <FiTrash2 />
                    </Button>
                  </S.SelectedTeamsAction>
                </S.SelectedTeam>

                <S.AgentCardList>
                  {teamAgents.map((agent: Agent) => {
                    return (
                      <S.AgentCard>
                        <S.Avatar>{agent.name[0]}</S.Avatar>

                        <p>{agent.name}</p>
                      </S.AgentCard>
                    );
                  })}
                </S.AgentCardList>
              </S.CardContent>
            </>
          )}

          <S.CardContent></S.CardContent>
        </S.InfoCard>
      </S.MissionInfo>

      <Navigation />
    </S.Wrapper>
  );
}
