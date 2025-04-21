import { FiAlertCircle, FiCalendar, FiTarget, FiUsers } from 'react-icons/fi';
import { Navigation } from '../../../components/Navigation';
import * as S from './styles';
import { useParams } from 'react-router';
import {
  Mission,
  MissionService,
} from '../../../services/http/missions/MissionService';
import { useQuery } from '@tanstack/react-query';

export function SpecificMission() {
  const { id } = useParams();

  const { data: mission } = useQuery<Mission>({
    queryKey: ['mission', id],
    queryFn: () => MissionService.findById(id as string),
  });

  if (!mission) {
    return 'AAAAAAAAAAA';
  }

  return (
    <S.Wrapper>
      <S.MissionHeader>
        <img src="" alt="" />
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
            <h2>Agentes</h2>
          </S.InfoCardHeader>

          <S.CardContent>
            <p>{mission.objective}</p>
          </S.CardContent>
        </S.InfoCard>
      </S.MissionInfo>

      <Navigation />
    </S.Wrapper>
  );
}
