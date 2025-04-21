import { FiAlertCircle, FiCalendar, FiTarget, FiUsers } from 'react-icons/fi';
import { Navigation } from '../../../components/Navigation';
import * as S from './styles';
import { useParams } from 'react-router';
import {
  Mission,
  MissionService,
} from '../../../services/http/missions/MissionService';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Select } from '../../../components/Select';
import { useForm } from 'react-hook-form';
import { Team, TeamService } from '../../../services/http/teams/TeamService';
import { Button } from '../../../components/Button';
import {
  MissionAssignment,
  MissionAssignmentService,
} from '../../../services/http/missionAssignment/MissionAssignmentService';
import { toast } from 'sonner';

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

  const { data: mission } = useQuery<Mission>({
    queryKey: ['mission', id],
    queryFn: () => MissionService.findById(id as string),
  });

  const { data: teams } = useQuery<Team[]>({
    queryKey: ['teams'],
    queryFn: () => TeamService.findAll(),
  });

  const { data: teamAssigned } = useQuery<Team[]>({
    queryKey: ['assignment', id],
    queryFn: () => MissionAssignmentService.findById(id as string),
  });

  console.log(teamAssigned);

  const { mutate } = useMutation({
    mutationFn: async (data: CreateAssignmentProps) => {
      const reformattedData = {
        id_team: data.id_team.value,
        id_mission: id,
      };

      console.log(reformattedData);

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

  function handleCreateAssignment() {
    const data = getValues() as CreateAssignmentProps;
    mutate(data);
  }

  if (!mission) {
    return 'AAAAAAAAAAA';
  }

  if (!teams) {
    return 'AAAAAAAAA';
  }

  const teamOptions = teams?.map((team: Team) => {
    return {
      label: team.name,
      value: team.id,
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
              <S.AvatarAgent />
              <S.AvatarAgent />
              <S.AvatarAgent />
              <S.AvatarAgent />
            </div>
            Dante, Arthur, Carina, Rubens e 4 outros
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

          <S.CardContent></S.CardContent>
        </S.InfoCard>
      </S.MissionInfo>

      <Navigation />
    </S.Wrapper>
  );
}
