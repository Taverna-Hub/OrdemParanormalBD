-- Gerando UUIDs para todas as entidades
SET @ag1      = UUID();
SET @ag2      = UUID();
SET @ag3      = UUID();
SET @ag4      = UUID();
SET @ag5      = UUID();
SET @ag6      = UUID();

SET @ver1     = @ag2;  -- Único Veríssimo

SET @addr1    = UUID();
SET @hq1      = UUID();

SET @team1    = UUID();
SET @team2    = UUID();
SET @team3    = UUID();

SET @elMedo   = UUID();
SET @elMorte  = UUID();
SET @elSangue = UUID();
SET @elConhe  = UUID();
SET @elEnergia= UUID();

SET @rit1     = UUID();
SET @rit2     = UUID();
SET @rit3     = UUID();

SET @miss1    = UUID();
SET @miss2    = UUID();

SET @evid1    = UUID();
SET @evid2    = UUID();

SET @thr1     = UUID();
SET @thr2     = UUID();
SET @thr3     = UUID();

SET @mem1     = UUID();
SET @mem2     = UUID();
SET @mem3     = UUID();
SET @mem4     = UUID();

-- População de AGENTS
INSERT INTO AGENTS (id_agent, name, birth_date, phone, specialization, rank_agent, nex, retired, transcended) VALUES
(@ag1, 'Alice Silva',   '1985-06-15', '81999990001', 'Ocultista',   'Recruta',  20, FALSE, FALSE),
(@ag2, 'Bruno Costa',   '1978-02-20', '81999990002', 'Especialista','Veterano', 45, FALSE, FALSE),
(@ag3, 'Carla Souza',   '1990-10-05', '81999990003', 'Combatente',  'Elite',    85, FALSE, TRUE),
(@ag4, 'Daniel Lima',   '1970-12-01', '81999990004', 'Especialista','Veterano', 60, TRUE,  FALSE),
(@ag5, 'Eva Santos',    '1982-03-12', '81999990005', 'Ocultista',   'Elite',    95, FALSE, TRUE),
(@ag6, 'Fabio Rocha',   '1995-07-30', '81999990006', 'Combatente',  'Recruta',  10, FALSE, FALSE);

-- População de VERISSIMO
INSERT INTO VERISSIMO (id_verissimo, login, password_ver) VALUES
(@ver1, 'bruno', 'senha123');

-- População de ENDEREÇOS
INSERT INTO ADDRESS (id_address, street, number, neighborhood, city, state, postal_code) VALUES
(@addr1, 'Rua da Aurora', 123, 'Boa Vista', 'Recife', 'PE', '50000000');

-- População de QGs (apenas 1)
INSERT INTO HQ (id_hq, name, security_level, room_count, id_address, id_verissimo) VALUES
(@hq1, 'QG Central', 9.0, 8, @addr1, @ver1);

-- Relação AGENTS_IN_HQ
INSERT INTO AGENTS_IN_HQ (id_hq, id_agent) VALUES
(@hq1, @ag1),
(@hq1, @ag2),
(@hq1, @ag3),
(@hq1, @ag4),
(@hq1, @ag5),
(@hq1, @ag6);

-- Elementos (ELEMENTS)
INSERT INTO ELEMENTS (id_element, name, description) VALUES
(@elMedo,   'Medo',         'Elemento neutro sem fraquezas ou vantagens'),
(@elMorte,  'Morte',        'Elemento forte contra Sangue'),
(@elSangue, 'Sangue',       'Elemento forte contra Conhecimento'),
(@elConhe,  'Conhecimento','Elemento forte contra Energia'),
(@elEnergia,'Energia',      'Elemento forte contra Morte');

-- Atualização de vantagem entre elementos
UPDATE ELEMENTS SET id_advantage = @elSangue WHERE id_element = @elMorte;
UPDATE ELEMENTS SET id_advantage = @elConhe  WHERE id_element = @elSangue;
UPDATE ELEMENTS SET id_advantage = @elEnergia WHERE id_element = @elConhe;
UPDATE ELEMENTS SET id_advantage = @elMorte   WHERE id_element = @elEnergia;

-- Rituais (RITUALS)
INSERT INTO RITUALS (id_ritual, name, description, requirements, risks, id_element) VALUES
(@rit1, 'Ritual do Medo',   'Provoca temor intenso no alvo',   'Tocha, sal grosso',              'Reações psicóticas', @elMedo),
(@rit2, 'Ritual Sangrento', 'Invoca poder através do sangue', 'Gotas de sangue verdadeiro',     'Hemorragia grave',   @elSangue),
(@rit3, 'Ritual de Morte',  'Enfraquece a vitalidade',        'Cenário fúnebre, ossos',         'Desgaste físico',    @elMorte);

-- Agentes que dominam rituais
INSERT INTO AGENT_RITUALS (id_agent, id_ritual) VALUES
(@ag3, @rit2),
(@ag3, @rit3),
(@ag5, @rit1),
(@ag5, @rit3);

-- Missões
INSERT INTO MISSION (id_mission, title, status, risks, objective, start_date, end_date, id_address) VALUES
(@miss1, 'Investigação no Cemitério', 'Aberta',   'Alto', 'Investigar aparições', '2025-04-01 07:00:00', NULL,     @addr1),
(@miss2, 'Combate à Seita Oculta',    'Concluida','Médio','Desmantelar seita',    '2025-02-01 09:00:00','2025-03-15', @addr1);

-- Equipes
INSERT INTO TEAM (id_team, name, specialization) VALUES
(@team1, 'Equipe Investigação', 'Investigação'),
(@team2, 'Equipe Combate',      'Combate'),
(@team3, 'Equipe Suporte',      'Suporte');

-- Líderes
INSERT INTO TEAM_LEADERS (id_team, id_agent) VALUES
(@team1, @ag1),
(@team2, @ag3),
(@team3, @ag5);

-- Agentes nas equipes
INSERT INTO AGENTS_IN_TEAM (id_team, id_agent, start_date, end_date) VALUES
(@team1, @ag1, '2025-01-10 08:00:00', NULL),
(@team1, @ag2, '2025-01-11 09:00:00', NULL),
(@team1, @ag4, '2025-01-14 12:00:00','2025-02-01'),
(@team2, @ag3, '2025-01-12 10:00:00', NULL),
(@team2, @ag6, '2025-01-15 13:00:00', NULL),
(@team3, @ag5, '2025-01-13 11:00:00', NULL);

-- Alocação de equipes em missões
INSERT INTO MISSION_ASSIGNMENT (id_team, id_mission, allocation_date, deallocation_date) VALUES
(@team1,@miss1,'2025-04-01 08:00:00', NULL),
(@team3,@miss1,'2025-04-01 08:30:00', NULL),
(@team2,@miss2,'2025-02-01 09:00:00','2025-03-15');

-- Evidências
INSERT INTO EVIDENCE (id_evidence, origin, description, stability_level, id_mission) VALUES
(@evid1,'Objeto ritualístico','Livro antigo com símbolos','Perigoso',@miss1),
(@evid2,'Manuscrito cifrado','Textos estranhos','Volatil',@miss2);

-- Ameaças
INSERT INTO THREATS (id_threat, description) VALUES
(@thr1,'Organização oculta que pratica rituais sombrios'),
(@thr2,'Entidade de energia sombria que se manifesta em cemitérios'),
(@thr3,'Entidade espectral aprisionada na cripta');

INSERT INTO THREATS_NAMES (id_threat, name) VALUES
(@thr1,'Seita Negra'),
(@thr2,'Sombra Vivente'),
(@thr3,'Espírito da Cripta');

INSERT INTO THREAT_MISSION (id_threat, id_mission) VALUES
(@thr1,@miss2),
(@thr2,@miss1),
(@thr3,@miss1);

INSERT INTO THREAT_NEUTRALIZATION (id_team, id_mission, id_threat, method, result) VALUES
(@team2,@miss2,@thr1,'Confronto direto com encantamentos','Seita dispersa'),
(@team1,@miss1,@thr2,'Ritual de banimento','Entidade enfraquecida');

INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES
(@elConhe,@thr1),
(@elEnergia,@thr1),
(@elSangue,@thr2),
(@elMorte,@thr2),
(@elMedo,@thr3),
(@elEnergia,@thr3);

INSERT INTO PARANORMAL_ENTITY (id_entity, enigma) VALUES
(@thr2,'Decifrar símbolos na tumba revela fraqueza');

INSERT INTO ENTITY_ABILITY (id_entity, ability) VALUES
(@thr2,'Intangibilidade'),
(@thr2,'Manipulação de sombras');

INSERT INTO PARANORMAL_ORGANIZATION (id_organization) VALUES
(@thr1);

INSERT INTO MEMBERS (id_member, id_organization, name, role) VALUES
(@mem1,@thr1,'Sacerdote Sombrio','Lider'),
(@mem2,@thr1,'Ana das Trevas','Pesquisador'),
(@mem3,@thr1,'Carlos Oculto','Ocultista'),
(@mem4,@thr1,'João Simpático','Simpatizante');
