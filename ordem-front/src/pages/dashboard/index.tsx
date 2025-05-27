/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../../components/Navigation';
import { useQuery } from '@tanstack/react-query';
import { HqService, RankAgentsDTO } from '../../services/http/hq/HqService';
import Chart from 'react-apexcharts';
import * as S from './styles';
import { ApexOptions } from 'apexcharts';
import {
  FiArrowDownLeft,
  FiArrowUpRight,
  FiAward,
  FiClock,
  FiMinus,
  FiTarget,
  FiUsers,
  FiLogOut,
} from 'react-icons/fi';
import { getLastMonthAndYear } from '../../utils/getLastMonthAndYear';
import { Button } from '../../components/Button';
import { AuthService } from '../../services/http/auth/AuthService.ts';
import { useNavigate } from 'react-router';

import maplibregl from 'maplibre-gl';
import Map, { NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export function Dashboard() {
  const navigate = useNavigate();
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  const { data: activeAgents } = useQuery({
    queryKey: ['activeAgents'],
    queryFn: () => HqService.getActiveAgents(),
  });

  const { data: openMissions } = useQuery({
    queryKey: ['openMissions'],
    queryFn: () => HqService.getOpenMissions(),
  });

  const { month: lastMonth, year } = getLastMonthAndYear();

  const { data: finishedMission } = useQuery({
    queryKey: ['finishedMission'],
    queryFn: () => HqService.getFinishedMissionsByMonth(),
  });

  const { data: finishedMissionLastMonth } = useQuery({
    queryKey: ['finishedMissionLastMonth'],
    queryFn: () => HqService.getFinishedMissionsByMonth(lastMonth, year),
  });

  const { data: missionAverageDuration } = useQuery({
    queryKey: ['missionAverageDuration'],
    queryFn: () => HqService.getMissionsAverageDuration(),
  });

  const { data: missionAverageDurationLastMonth } = useQuery({
    queryKey: ['missionAverageDurationLastMonth'],
    queryFn: () => HqService.getMissionsAverageDuration(lastMonth, year),
  });

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

  const { data: verissimoHQ } = useQuery({
    queryKey: ['verissimoHQ'],
    queryFn: () => HqService.getVerissimoHQ(),
  });

  const { data: threatsLocation } = useQuery({
    queryKey: ['location'],
    queryFn: () => HqService.getLocation(),
  });

  const elementColors: Record<string, string> = {
    Medo: '#6B7AFF',
    Morte: '#3D375A',
    Sangue: '#FA1C43',
    Conhecimento: '#F6DD00',
    Energia: '#8C3EEC',
  };

  useEffect(() => {
    if (!mapLoaded || !mapRef.current || !Array.isArray(threatsLocation))
      return;

    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    const grouped = threatsLocation.reduce(
      (acc: Record<string, any[]>, threat: any) => {
        const key = `${threat.lat},${threat.lng}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(threat);
        return acc;
      },
      {},
    );

    Object.values(grouped).forEach((threats: any[]) => {
      const { lat, lng } = threats[0];
      const elements = threats.map((t) => t.element);
      const uniqueElements = Array.from(new Set(elements));
      const size = 20 + (uniqueElements.length - 1) * 10;

      const elementCounts = elements.reduce(
        (acc: Record<string, number>, el: string) => {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
        },
        {},
      );

      const title = uniqueElements
        .map((el) => `${el} (${elementCounts[el]})`)
        .join(', ');

      const el = document.createElement('div');
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.zIndex = '10';
      el.title = title;

      if (uniqueElements.length === 1) {
        el.style.backgroundColor = elementColors[uniqueElements[0]] || 'gray';
        el.style.boxShadow = `0 0 0 2px ${
          elementColors[uniqueElements[0]] || 'gray'
        }`;
      } else {
        const colors = uniqueElements.map((e) => elementColors[e] || 'gray');
        const step = 100 / colors.length;
        const gradient = colors
          .map((color, i) => `${color} ${i * step}% ${(i + 1) * step}%`)
          .join(', ');
        el.style.background = `conic-gradient(${gradient})`;
        el.style.boxShadow = `0 0 0 2px #fff`;
      }

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([parseFloat(lng), parseFloat(lat)])
        .addTo(mapRef.current!);

      markersRef.current.push(marker);
    });
  }, [threatsLocation, mapLoaded]);

  function handleMapLoad(event: any) {
    mapRef.current = event.target;
    setMapLoaded(true);
  }

  const isLoading =
    !teamsSpecialization &&
    !missionStatus &&
    !meanNex &&
    !agentsBySpecialization &&
    !agentsRank &&
    !finishedMission &&
    !finishedMissionLastMonth &&
    !openMissions &&
    !missionAverageDuration &&
    !missionAverageDurationLastMonth;

  if (isLoading) return <p>Carregando dashboard...</p>;

  const colors: Record<string, string> = {
    Combate: '#EC4899',
    Investigação: '#3b82f6',
    Suporte: '#F97316',
    Combatente: '#3b82f6',
    Especialista: '#A855F7',
    Ocultista: '#EC4899',
    Arquivada: '#94a3b8',
    Concluida: '#10b981',
    Aberta: '#3b82f6',
  };

  // Mean Nex Chart
  const nexOptions: ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
    dataLabels: { enabled: false },
    grid: { strokeDashArray: 3 },
    xaxis: {
      labels: {
        style: {
          colors: '#fff',
        },
      },
      categories: meanNex.map((item) => item.hqName),
    },
    yaxis: {
      max: 100,
      labels: {
        formatter: (value) => `${value}%`,
        style: {
          colors: ['#fff'],
        },
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${value}%`,
        title: { formatter: () => 'NEX Médio' },
      },
    },
    colors: ['#6366f1'],
    legend: {
      show: true,
      labels: {
        colors: ['#fff'],
      },
    },
  };

  const nexSeries = [
    {
      name: 'NEX Médio',
      data: meanNex.map((item) => item.nex),
    },
  ];

  // Team Specialization Chart
  const teamSpecializationLabels = teamsSpecialization.map(
    (item) => item.specialization,
  );
  const teamSpecializationSeries = teamsSpecialization.map(
    (item) => item.quantity,
  );
  const teamSpecializationColors = teamSpecializationLabels.map(
    (label) => colors[label] || '#999999',
  );

  const teamSpecializationOptions: ApexOptions = {
    chart: { type: 'donut', toolbar: { show: false } },
    labels: teamSpecializationLabels,
    colors: teamSpecializationColors,
    legend: {
      position: 'bottom',
      labels: {
        colors: ['#fff', '#fff', '#fff'],
      },
    },
    tooltip: {
      y: { formatter: (val: number) => val.toString() },
    },
    dataLabels: {
      style: {
        colors: ['#fff'],
      },

      formatter: (val: number, opts: any) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} ${val.toFixed(0)}%`;
      },
    },
  };

  // Agents By Specialization Chart
  const agentsSpecializationLabels = agentsBySpecialization.map(
    (item) => item.specialization,
  );
  const agentsBySpecializationColors = agentsSpecializationLabels.map(
    (label) => colors[label] || '#999999',
  );
  const agentsBySpecializationOptions: ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false }, stacked: false },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: '40%',
        distributed: true,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      max: Math.max(...agentsBySpecialization.map((item) => item.total)) + 10,
      labels: {
        style: {
          colors: ['#fff'],
        },
      },
      categories: agentsBySpecialization.map((item) => item.specialization),
      title: {
        text: 'Quantidade',
        style: {
          color: '#fff',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#fff'],
        },
      },
      title: {
        text: 'Especialização',
        style: {
          color: '#fff',
        },
      },
    },
    tooltip: {
      y: { formatter: (val: number) => `${val} membros` },
    },
    colors: agentsBySpecializationColors,
    legend: {
      position: 'top',
      labels: {
        colors: ['#fff', '#fff', '#fff'],
      },
    },
    grid: { strokeDashArray: 3 },
  };

  const agentsBySpecializationSeries = [
    {
      name: 'Total',
      data: agentsBySpecialization.map((item) => item.total),
    },
  ];

  // Mission Status Chart
  const missionStatusLabels = missionStatus.map((item) => item.status);
  const missionStatusSeries = missionStatus.map((item) => item.total);
  const missionStatusColors = missionStatusLabels.map(
    (label) => colors[label] || '#999999',
  );

  const missionStatusOptions: ApexOptions = {
    chart: { type: 'pie', toolbar: { show: false } },
    labels: missionStatusLabels,
    colors: missionStatusColors,
    legend: {
      position: 'bottom',
      labels: {
        colors: ['#fff', '#fff', '#fff'],
      },
    },
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

  const differenceAvgTime =
    missionAverageDuration && missionAverageDurationLastMonth
      ? missionAverageDuration.avgDurationDays -
        missionAverageDurationLastMonth.avgDurationDays
      : null;

  const isAvgTimePositive = differenceAvgTime !== null && differenceAvgTime < 0;

  const differenceFinishedMissions =
    finishedMission && finishedMissionLastMonth
      ? finishedMission.total_finished - finishedMissionLastMonth.total_finished
      : null;

  const isFinishedMissionsPositive =
    differenceFinishedMissions !== null && differenceFinishedMissions > 0;

  async function handleLogout() {
    try {
      await AuthService.logout();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }

  return (
    <>
      <Helmet title="Dashboard" />
      <S.Wrapper>
        <S.PageHeader>
          <h1>
            {verissimoHQ?.hqName} – Bem-vindo de volta, {verissimoHQ?.verName}!
          </h1>
          <div>
            {/*<p>Logout</p>*/}
            <Button onClick={handleLogout}>
              <S.Icon backgroundColor="trasnparent">
                <FiLogOut color="#fff" />
              </S.Icon>
            </Button>
          </div>
        </S.PageHeader>

        <S.TopGraphsWrapper>
          <S.TopGraphCard>
            <header>
              <span>Agentes ativos</span>

              <S.Icon backgroundColor="#13213D">
                <FiUsers color="#3B82F6" />
              </S.Icon>
            </header>

            <h2>{activeAgents?.active_agents}</h2>
          </S.TopGraphCard>

          <S.TopGraphCard>
            <header>
              <span>Missões em andamento</span>

              <S.Icon backgroundColor="#1E1D3D">
                <FiTarget color="#A855F7" />
              </S.Icon>
            </header>

            <h2>{openMissions?.total}</h2>
          </S.TopGraphCard>

          <S.TopGraphCard>
            <header>
              <span>Missões concluidas</span>
              <S.Icon backgroundColor="#0F2731">
                <FiAward color="#10B67F" />
              </S.Icon>
            </header>

            <h2>{finishedMission?.total_finished}</h2>

            <footer
              className={
                differenceFinishedMissions === 0
                  ? 'neutral'
                  : isFinishedMissionsPositive
                  ? 'positive'
                  : 'negative'
              }
            >
              {differenceFinishedMissions}{' '}
              {differenceFinishedMissions === 0 ? (
                <FiMinus />
              ) : isFinishedMissionsPositive ? (
                <FiArrowUpRight />
              ) : (
                <FiArrowDownLeft />
              )}
            </footer>
          </S.TopGraphCard>

          <S.TopGraphCard>
            <header>
              <span>Tempo médio</span>
              <S.Icon backgroundColor="#262425">
                <FiClock color="#F59E0B" />
              </S.Icon>
            </header>

            <h2>{missionAverageDuration?.avgDurationDays}d</h2>

            <footer
              className={
                differenceAvgTime === 0
                  ? 'neutral'
                  : isAvgTimePositive
                  ? 'positive'
                  : 'negative'
              }
            >
              {differenceAvgTime}d{' '}
              {differenceAvgTime === 0 ? (
                <FiMinus />
              ) : isAvgTimePositive ? (
                <FiArrowUpRight />
              ) : (
                <FiArrowDownLeft />
              )}
            </footer>
          </S.TopGraphCard>
        </S.TopGraphsWrapper>

        <S.GraphContainer>
          <div>
            <h2>Ocorrência de ameaças por elemento</h2>
          </div>
          <Map
            onLoad={handleMapLoad}
            initialViewState={{
              longitude: -51.9253,
              latitude: -14.235,
              zoom: 4,
            }}
            style={{ width: '100%', height: 600 }}
            mapStyle={`https://api.maptiler.com/maps/streets-v2-dark/style.json?key=${
              import.meta.env.VITE_MAPTILER_API_KEY
            }`}
            mapLib={maplibregl}
          >
            <NavigationControl position="top-right" />
          </Map>
        </S.GraphContainer>

        <S.GridWrapper>
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
                    <td>
                      <span>{index + 1}</span>
                    </td>
                    <td>
                      <p>{agent.agent_name}</p>
                    </td>
                    <td
                      className={`${
                        agent.missions_success_count > 0 ? 'success' : 'fail'
                      }`}
                    >
                      <p>{agent.missions_success_count}</p>
                    </td>
                  </S.TableRow>
                ))}
              </tbody>
            </S.RankAgentsTable>
          </S.RankAgentsTableContainer>

          {hasData(meanNex) && (
            <S.GraphContainer>
              <div>
                <h2>NEX médio por QG</h2>
              </div>
              <Chart
                options={nexOptions}
                series={nexSeries}
                type="bar"
                width="100%"
                height="100%"
              />
            </S.GraphContainer>
          )}

          {hasData(teamsSpecialization) && (
            <S.GraphContainer>
              <div>
                <h2>Equipes por especialização</h2>
              </div>
              <Chart
                options={teamSpecializationOptions}
                series={teamSpecializationSeries}
                type="donut"
                width="100%"
                height={400}
              />
            </S.GraphContainer>
          )}

          {hasData(missionStatus) && (
            <S.GraphContainer>
              <div>
                <h2>Missões por status</h2>
              </div>
              <Chart
                options={missionStatusOptions}
                series={missionStatusSeries}
                type="pie"
                width="100%"
                height={400}
              />
            </S.GraphContainer>
          )}
        </S.GridWrapper>

        {hasData(agentsBySpecialization) && (
          <S.GraphContainer>
            <div>
              <h2>Agentes por especialização</h2>
            </div>
            <Chart
              options={agentsBySpecializationOptions}
              series={agentsBySpecializationSeries}
              type="bar"
              width="100%"
              height="100%"
            />
          </S.GraphContainer>
        )}

        <Navigation />
      </S.Wrapper>
    </>
  );
}
