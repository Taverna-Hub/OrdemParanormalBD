/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../../components/Navigation';
import { useQuery } from '@tanstack/react-query';
import { HqService, RankAgentsDTO } from '../../services/http/hq/HqService';
import Chart from 'react-apexcharts';
import * as S from './styles';
import { ApexOptions } from 'apexcharts';

export function Dashboard() {
  const { data: teamsSpecialization = [] } = useQuery({
    queryKey: ['teamsSpecialization'],
    queryFn: () => HqService.getSpecializationsInHQ(),
  });

  const { data: missionStatus = [] } = useQuery({
    queryKey: ['missionStatus'],
    queryFn: () => HqService.getMissionsByStatus(),
  });

  const { data: meanNex = [] } = useQuery({
    queryKey: ['meanNex'],
    queryFn: () => HqService.getMeanNexByHQ(),
  });

  const { data: agentsBySpecialization = [] } = useQuery({
    queryKey: ['agentsBySpecialization'],
    queryFn: () => HqService.getAgentsBySpecializationInHq(),
  });

  const { data: agentsRank = [] } = useQuery({
    queryKey: ['agentsRank'],
    queryFn: () => HqService.getRankAgentsByHQ(),
  });

  const isLoading =
    !teamsSpecialization &&
    !missionStatus &&
    !meanNex &&
    !agentsBySpecialization &&
    !agentsRank;

  if (isLoading) return <p>Carregando dashboard...</p>;

  const colors: Record<string, string> = {
    Combate: "#ef4444",
    Investigação: "#3b82f6",
    Suporte: "#f59e0b",
    Arquivada: "#94a3b8",
    Concluída: "#10b981",
    Aberta: "#3b82f6",
  };

  // Mean Nex Chart
  const nexOptions: ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
    dataLabels: { enabled: false },
    grid: { strokeDashArray: 3 },
    xaxis: {
      categories: meanNex.map(item => item.hqName),
    },
    yaxis: {
      max: 100,
      labels: { formatter: (value) => `${value}%` },
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}%`,
        title: { formatter: () => 'NEX Médio' },
      },
    },
    colors: ['#6366f1'],
    legend: { show: true },
  };

  const nexSeries = [{
    name: 'NEX Médio',
    data: meanNex.map(item => item.nex),
  }];

  // Team Specialization Chart
  const teamSpecializationLabels = teamsSpecialization.map(item => item.specialization);
  const teamSpecializationSeries = teamsSpecialization.map(item => item.quantity);
  const teamSpecializationColors = teamSpecializationLabels.map(label => colors[label] || "#999999");

  const teamSpecializationOptions: ApexOptions = {
    chart: { type: "donut", toolbar: { show: false } },
    labels: teamSpecializationLabels,
    colors: teamSpecializationColors,
    legend: { position: "bottom" },
    tooltip: {
      y: { formatter: (val: number) => val.toString() },
    },
    dataLabels: {
      formatter: (val: number, opts: any) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} ${val.toFixed(0)}%`;
      },
    },
  };

  // Agents By Specialization Chart
  const agentsBySpecializationOptions: ApexOptions = {
    chart: { type: "bar", toolbar: { show: false }, stacked: false },
    plotOptions: {
      bar: { horizontal: true, borderRadius: 4, barHeight: "40%" },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: agentsBySpecialization.map(item => item.specialization),
      title: { text: "Quantidade" },
    },
    yaxis: { title: { text: "Especialização" } },
    tooltip: {
      y: { formatter: (val: number) => `${val} membros` },
    },
    colors: ["#6366f1"],
    legend: { position: "top" },
    grid: { strokeDashArray: 3 },
  };

  const agentsBySpecializationSeries = [{
    name: "Total",
    data: agentsBySpecialization.map(item => item.total),
  }];

  // Mission Status Chart
  const missionStatusLabels = missionStatus.map(item => item.status);
  const missionStatusSeries = missionStatus.map(item => item.total);
  const missionStatusColors = missionStatusLabels.map(label => colors[label] || "#999999");

  const missionStatusOptions: ApexOptions = {
    chart: { type: "pie", toolbar: { show: false } },
    labels: missionStatusLabels,
    colors: missionStatusColors,
    legend: { position: "bottom" },
    tooltip: {
      y: { formatter: (val: number) => val.toString() },
    },
    dataLabels: {
      formatter: (val: number, opts: any) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} ${val.toFixed(0)}%`;
      },
    },
  };

  function hasData(arr: any[] | undefined | null) {
    return Array.isArray(arr) && arr.length > 0;
  } 


  return (
    <>
      <Helmet title="Dashboard" />
      <S.Wrapper>

        <S.RankAgentsTableContainer>
          <div>
            <h2>Ranking de Agentes</h2>
            <p>Top agentes por missões sucedidas</p>
          </div>
          <S.RankAgentsTable>
            <S.TableHead>
              <tr>
                <th>#</th>
                <th>Agente</th>
                <th>Missões sucedidas</th>
              </tr>
            </S.TableHead>
            <tbody>
              {agentsRank.map((agent: RankAgentsDTO, index: number) => (
                <S.TableRow key={agent.agent_name}>
                  <td><span>{index + 1}</span></td>
                  <td><p>{agent.agent_name}</p></td>
                  <td><p>{agent.missions_success_count}</p></td>
                </S.TableRow>
              ))}
            </tbody>
          </S.RankAgentsTable>
        </S.RankAgentsTableContainer>

        {hasData(meanNex) && (
          <S.GraphContainer>
            <Chart options={nexOptions} series={nexSeries} type="bar" width="100%" height="100%" />
          </S.GraphContainer>
        )}

        {hasData(teamsSpecialization) && (
          <S.GraphContainer>
            <Chart options={teamSpecializationOptions} series={teamSpecializationSeries} type="donut" width="100%" height="100%" />
          </S.GraphContainer>
        )}

        {hasData(agentsBySpecialization) && (
          <S.GraphContainer>
            <Chart options={agentsBySpecializationOptions} series={agentsBySpecializationSeries} type="bar" width="100%" height="100%" />
          </S.GraphContainer>
        )}

        {hasData(missionStatus) && (
          <S.GraphContainer>
            <Chart options={missionStatusOptions} series={missionStatusSeries} type="pie" width="100%" height="100%" />
          </S.GraphContainer>
        )}

        <Navigation />
      </S.Wrapper>
    </>
  );
}
