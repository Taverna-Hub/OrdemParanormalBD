-- Gerando UUIDs para todas as entidades
-- ===================================================================
-- Agentes
SET
  @ag1=UUID(),  @ag2=UUID(),  @ag3=UUID(),  @ag4=UUID(), @ag5=UUID(), @ag6=UUID(),
  @ag7=UUID(),  @ag8=UUID(),  @ag9=UUID(),  @ag10=UUID(), @ag11=UUID(), @ag12=UUID(),
  @ag13=UUID(), @ag14=UUID(), @ag15=UUID(), @ag16=UUID(), @ag17=UUID(), @ag18=UUID(),
  @ag19=UUID(), @ag20=UUID(), @ag21=UUID(), @ag22=UUID(), @ag23=UUID(), @ag24=UUID(),
  @ag25=UUID(), @ag26=UUID(), @ag27=UUID(), @ag28=UUID(), @ag29=UUID(), @ag30=UUID();

-- ===================================================================
-- Verissimos
SET
    @ver1 = @ag2, @ver2=@ag15, @ver3=@ag23;

-- ===================================================================
-- Endereços
SET
    @addr1= UUID(), @addr2=UUID(), @addr3=UUID();

SET
    @addrM1 = UUID(), @addrM2 = UUID(), @addrM3 = UUID(),
    @addrM4 = UUID(), @addrM5 = UUID(), @addrM6 = UUID(),
    @addrM7 = UUID(), @addrM8 = UUID(), @addrM9 = UUID();

-- ===================================================================
-- QGs
SET @hq1= UUID(), @hq2=UUID(),   @hq3=UUID();

-- ===================================================================
-- Equipes
SET
  @team1  = UUID(),  @team2  = UUID(),  @team3  = UUID(),  @team4  = UUID(),
  @team5  = UUID(),  @team6  = UUID(),  @team7  = UUID(),  @team8  = UUID(),
  @team9  = UUID(),  @team10 = UUID(),  @team11 = UUID(),  @team12 = UUID();

-- ===================================================================
-- Elementos
SET @elMedo   = UUID();
SET @elMorte  = UUID();
SET @elSangue = UUID();
SET @elConhe  = UUID();
SET @elEnergia= UUID();

-- ===================================================================
-- Rituais
SET
    @rit1=UUID(),  @rit2=UUID(),  @rit3=UUID(),  @rit4=UUID(),  @rit5=UUID(),
    @rit6=UUID(),  @rit7=UUID(),  @rit8=UUID(),  @rit9=UUID(),  @rit10=UUID(),
    @rit11=UUID(), @rit12=UUID(), @rit13=UUID(), @rit14=UUID(), @rit15=UUID();

-- ===================================================================
-- Missões
SET
    @miss1= UUID(),  @miss2= UUID(), @miss3=UUID(), @miss4=UUID(), @miss5=UUID(),
    @miss6=UUID(), @miss7=UUID(), @miss8=UUID(), @miss9=UUID();

-- ===================================================================
-- Evidencias
SET
    @evid1 = UUID(), @evid2 = UUID(), @evid3 = UUID(),
    @evid4 = UUID(), @evid5 = UUID(), @evid6 = UUID(),
    @evid7 = UUID(), @evid8 = UUID(), @evid9 = UUID();


-- ===================================================================
-- Ameaças
SET
    @thr1=UUID(),  @thr2=UUID(),  @thr3=UUID(),  @thr4=UUID(),  @thr5=UUID(),
    @thr6=UUID(),  @thr7=UUID(),  @thr8=UUID(),  @thr9=UUID(),  @thr10=UUID(),
    @thr11=UUID(), @thr12=UUID(), @thr13=UUID(), @thr14=UUID(), @thr15=UUID();

-- ===================================================================
-- Membros-organizações
SET
    @mem1=UUID(),  @mem2=UUID(),  @mem3=UUID(),  @mem4=UUID(),
    @mem5=UUID(),  @mem6=UUID(),  @mem7=UUID(),  @mem8=UUID(),
    @mem9=UUID(),  @mem10=UUID(), @mem11=UUID(), @mem12=UUID(),
    @mem13=UUID(), @mem14=UUID(), @mem15=UUID(), @mem16=UUID(),
    @mem17=UUID(), @mem18=UUID(), @mem19=UUID(), @mem20=UUID(),
    @mem21=UUID(), @mem22=UUID(), @mem23=UUID(), @mem24=UUID();

-- ===================================================================
-- População de AGENTS
INSERT INTO AGENTS (id_agent, name, birth_date, phone, specialization, rank_agent, nex, retired, transcended) VALUES
(@ag1,  'Alice Silva',    '1985-06-15', '81999990001', 'Ocultista',   'Recruta',  20, FALSE, FALSE),
(@ag2,  'Bruno Costa',    '1978-02-20', '81999990002', 'Especialista','Veterano', 45, FALSE, FALSE),
(@ag3,  'Carla Souza',    '1990-10-05', '81999990003', 'Combatente',  'Elite',    85, FALSE, TRUE),
(@ag4,  'Daniel Lima',    '1970-12-01', '81999990004', 'Especialista','Veterano', 60, TRUE,  FALSE),
(@ag5,  'Eva Santos',     '1982-03-12', '81999990005', 'Ocultista',   'Elite',    95, FALSE, TRUE),
(@ag6,  'Fabio Rocha',    '1995-07-30', '81999990006', 'Combatente',  'Recruta',  10, FALSE, FALSE),
(@ag7,  'Gustavo Pires',  '1981-01-10', '81999990007', 'Especialista','Recruta',  25, FALSE, FALSE),
(@ag8,  'Helena Dias',    '1984-05-22', '81999990008', 'Ocultista',   'Veterano', 50, FALSE, FALSE),
(@ag9,  'Igor Almeida',   '1979-11-11', '81999990009', 'Combatente',  'Elite',    90, FALSE, FALSE),
(@ag10, 'Juliana Freitas','1992-08-17', '81999990010', 'Combatente',  'Recruta',  15, FALSE, FALSE),
(@ag11, 'Karina Moura',   '1986-04-03', '81999990011', 'Ocultista',   'Veterano', 55, FALSE, FALSE),
(@ag12, 'Lucas Batista',  '1988-09-29', '81999990012', 'Especialista','Elite',    80, FALSE, FALSE),
(@ag13, 'Mariana Costa',  '1991-12-05', '81999990013', 'Combatente',  'Veterano', 65, FALSE, FALSE),
(@ag14, 'Nicolas Horn',   '1975-07-07', '81999990014', 'Especialista','Recruta',  18, FALSE, FALSE),
(@ag15, 'Olivia Reis',    '1983-02-14', '81999990015', 'Ocultista',   'Elite',    88, FALSE, TRUE),
(@ag16, 'Pedro Lima',     '1976-06-21', '81999990016', 'Combatente',  'Veterano', 58, TRUE,  FALSE),
(@ag17, 'Quesia Tavares', '1989-03-30', '81999990017', 'Especialista','Recruta',  22, FALSE, FALSE),
(@ag18, 'Renato Alves',   '1993-10-12', '81999990018', 'Especialista','Veterano', 47, FALSE, FALSE),
(@ag19, 'Sofia Gomes',    '1987-11-25', '81999990019', 'Ocultista',   'Elite',    92, FALSE, TRUE),
(@ag20, 'Thiago Varela',  '1990-01-18', '81999990020', 'Combatente',  'Recruta',  12, FALSE, FALSE),
(@ag21, 'Ubirajara Luz',  '1972-08-08', '81999990021', 'Especialista','Veterano', 60, TRUE,  FALSE),
(@ag22, 'Valéria Rocha',  '1985-09-09', '81999990022', 'Combatente',  'Recruta',  14, FALSE, FALSE),
(@ag23, 'Wellington Paz', '1982-03-03', '81999990023', 'Combatente',  'Elite',    85, FALSE, TRUE),
(@ag24, 'Ximena Duarte',  '1994-12-12', '81999990024', 'Ocultista',   'Veterano', 53, FALSE, FALSE),
(@ag25, 'Yuri Santana',   '1988-07-07', '81999990025', 'Especialista','Recruta',  19, FALSE, FALSE),
(@ag26, 'Zara Pinto',     '1992-10-10', '81999990026', 'Combatente',  'Elite',    89, FALSE, TRUE),
(@ag27, 'Alan Cardoso',   '1977-05-05', '81999990027', 'Combatente',  'Veterano', 63, FALSE, FALSE),  -- corrigido
(@ag28, 'Beatriz Silva',  '1991-02-02', '81999990028', 'Ocultista',   'Recruta',  17, FALSE, FALSE),
(@ag29, 'Cassio Nunes',   '1983-06-06', '81999990029', 'Especialista','Elite',    82, FALSE, TRUE),
(@ag30, 'Diana Azevedo',  '1989-09-09', '81999990030', 'Combatente',  'Veterano', 57, FALSE, FALSE);

-- População de VERISSIMO
INSERT INTO VERISSIMO (id_verissimo, login, password_ver) VALUES
(@ver1, 'BC', 'cost876'),
(@ver2,'OR','olive457'),
(@ver3,'WP','peace8233');

-- População de ENDEREÇOS
INSERT INTO ADDRESS (id_address, street, number, neighborhood, city, state, postal_code) VALUES
(@addr1,'Rua da Aurora',123,'Boa Vista','Recife','PE','50000-000'),
(@addr2,'Av. Beira Mar', 45,'Meireles','Fortaleza','CE','60000-000'),
(@addr3,'Av. Borges de Medeiros',789,'Centro','Porto Alegre','RS','90000-000'),
(@addrM1, 'Rua do Cemitério',        50,  'Campo Santo',       'Recife',        'PE', '50010-000'),
(@addrM2, 'Rua da Lapa',             123, 'Boa Vista',         'Recife',        'PE', '50020-000'),
(@addrM3, 'Av. dos Malassombros',    300, 'Santo Amaro',       'Recife',        'PE', '50030-000'),
(@addrM4, 'Av. Beira Mar',           45,  'Meireles',          'Fortaleza',     'CE', '60000-000'),
(@addrM5, 'Rua dos Encantamentos',   77,  'Praia de Iracema',   'Fortaleza',     'CE', '60010-000'),
(@addrM6, 'Av. da Luz',              200, 'Centro',            'Fortaleza',     'CE', '60020-000'),
(@addrM7, 'Rua do Trabalho',         10,  'Distrito Industrial','Porto Alegre','RS','90010-000'),
(@addrM8, 'Praça da Matriz',         1,   'Centro Histórico',  'Porto Alegre',  'RS', '90020-000'),
(@addrM9, 'Rua da Câmara',           250, 'Cidade Baixa',      'Porto Alegre',  'RS', '90030-000');

-- População de QGs
INSERT INTO HQ (id_hq, name, security_level, room_count, id_address, id_verissimo) VALUES
(@hq1,'QG Central',      9.0,  8,@addr1,@ver1),
(@hq2,'QG Fortaleza',    7.5,  6,@addr2,@ver2),
(@hq3,'QG Porto Alegre', 8.0,  7,@addr3,@ver3);

-- Relação AGENTS_IN_HQ
INSERT INTO AGENTS_IN_HQ (id_hq, id_agent) VALUES
-- QG1
(@hq1,@ag1),(@hq1,@ag2),(@hq1,@ag3),(@hq1,@ag4),(@hq1,@ag5),
(@hq1,@ag6),(@hq1,@ag7),(@hq1,@ag8),(@hq1,@ag9),(@hq1,@ag10),
-- QG2
(@hq2,@ag11),(@hq2,@ag12),(@hq2,@ag13),(@hq2,@ag14),(@hq2,@ag15),
(@hq2,@ag16),(@hq2,@ag17),(@hq2,@ag18),(@hq2,@ag19),(@hq2,@ag20),
-- QG3
(@hq3,@ag21),(@hq3,@ag22),(@hq3,@ag23),(@hq3,@ag24),(@hq3,@ag25),
(@hq3,@ag26),(@hq3,@ag27),(@hq3,@ag28),(@hq3,@ag29),(@hq3,@ag30);

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
(@rit3, 'Ritual de Morte',  'Enfraquece a vitalidade',        'Cenário fúnebre, ossos',         'Desgaste físico',    @elMorte),
(@rit4,'Ritual do Conhecimento','Expõe segredos ocultos','Tinta invisível','Visões perturbadoras',@elConhe),
(@rit5,'Ritual da Energia','Amplifica poderes','Cristal energético','Sobrecarga vital',@elEnergia),
(@rit6,'Ritual Noturno','Convoca a penumbra','Vela negra','Visão turva',@elMedo),
(@rit7,'Ritual Sanguinário Ancestral','Forja alianças sombrias','Cálice ancestral','Maldição prolongada',@elSangue),
(@rit8,'Ritual de Transição','Renasce a alma','Pó de ossos','Enfraquece espírito',@elMorte),
(@rit9,'Ritual do Arcano','Enfraquece barreiras','Manuscrito arcano','Esgotamento mental',@elConhe),
(@rit10,'Ritual Vital','Regenera ferimentos','Sangue puro','Dependência',@elEnergia),
(@rit11,'Ritual do Eclipse','Apaga luz','Obsidiana','Perda de visão',@elMedo),
(@rit12,'Ritual Rubro','Manifesta chamas','Brasa eterna','Queimaduras internas',@elSangue),
(@rit13,'Ritual Fúnebre','Convoca a morte','Velas fúnebres','Depressão profunda',@elMorte),
(@rit14,'Ritual da Lâmina Mental','Corta mentes','Fio de prata','Distorção psíquica',@elConhe),
(@rit15,'Ritual Primordial','Desperta a essência','Cristal bruto','Explosão de energia',@elEnergia);

-- Agentes que dominam rituais
INSERT INTO AGENT_RITUALS (id_agent, id_ritual) VALUES
(@ag3, @rit2),(@ag3, @rit3),
(@ag5, @rit1),(@ag5, @rit3),
(@ag7,@rit4),(@ag8,@rit5),
(@ag9,@rit6),(@ag10,@rit7),
(@ag11,@rit8),(@ag12,@rit9),
(@ag13,@rit10),(@ag14,@rit11),
(@ag15,@rit12),(@ag16,@rit13),
(@ag17,@rit14),(@ag18,@rit15);

-- Missões
INSERT INTO MISSION (id_mission, title, status, risks, objective, start_date, end_date, id_address) VALUES
(@miss1, 'Investigação no Cemitério',               'Aberta',    'Alto',   'Investigar aparições',                '2025-04-01 07:00:00', NULL,         @addrM1),
(@miss2, 'Combate à Seita Oculta',                  'Concluida', 'Médio',  'Desmantelar seita',                   '2025-02-01 09:00:00', '2025-03-15', @addrM2),
(@miss3, 'Patrulha Noturna',                        'Aberta',    'Baixo',  'Monitorar atividade paranormal',      '2025-05-05 22:00:00', NULL,         @addrM3),
(@miss4, 'Investigação na Praia',                   'Aberta',    'Médio',  'Coletar testemunhos',                 '2025-05-10 06:00:00', NULL,         @addrM4),
(@miss5, 'Ritual de Contenção',                     'Aberta',    'Alto',   'Conter manifestação',                 '2025-05-12 20:00:00', NULL,         @addrM5),
(@miss6, 'Reconhecimento Urbano',                   'Concluida', 'Baixo',  'Mapear pontos quentes',               '2025-04-20 10:00:00', '2025-04-21', @addrM6),
(@miss7, 'Investigação em Fábrica Abandonada',      'Aberta',    'Alto',   'Examinar fenômenos',                  '2025-05-08 14:00:00', NULL,         @addrM7),
(@miss8, 'Proteção de Local Histórico',             'Aberta',    'Médio',  'Garantir segurança',                  '2025-05-15 09:00:00', NULL,         @addrM8),
(@miss9, 'Análise de Artefato',                     'Concluida', 'Baixo',  'Estudar relíquia',                    '2025-03-01 08:00:00', '2025-03-03', @addrM9);

-- Equipes
INSERT INTO TEAM (id_team, name, specialization) VALUES
-- QG Central (@hq1)
(@team1,  'Vigilantes da Aurora',    'Investigação'),
(@team2,  'Legião Sombria',          'Combate'),
(@team3,  'Guardiões do Crepúsculo', 'Suporte'),
(@team4,  'Olhos da Realidade',      'Investigação'),

-- QG Fortaleza (@hq2)
(@team5,  'Maré Oculta',             'Investigação'),
(@team6,  'Titãs de Rocha',          'Combate'),
(@team7,  'Sentinelas da Bruma',     'Suporte'),
(@team8,  'Oráculo do Horizonte',    'Investigação'),

-- QG Porto Alegre (@hq3)
(@team9,  'Andarilhos da Névoa',     'Investigação'),
(@team10, 'Fúria do Guaíba',         'Combate'),
(@team11, 'Protetores da Pedra',     'Suporte'),
(@team12, 'Tecelões de Sombras',     'Investigação');


-- Agentes nas equipes
INSERT INTO AGENTS_IN_TEAM (id_team, id_agent, start_date, end_date) VALUES
-- QG Central (agentes @ag1…@ag10)
(@team1,  @ag1,  '2025-05-01 08:00:00', NULL),
(@team1,  @ag2,  '2025-05-01 08:00:00', NULL),
(@team1,  @ag3,  '2025-05-01 08:00:00', NULL),
(@team2,  @ag4,  '2025-05-01 08:00:00', NULL),
(@team2,  @ag5,  '2025-05-01 08:00:00', NULL),
(@team2,  @ag6,  '2025-05-01 08:00:00', NULL),
(@team3,  @ag7,  '2025-05-01 08:00:00', NULL),
(@team3,  @ag8,  '2025-05-01 08:00:00', NULL),
(@team4,  @ag9,  '2025-05-01 08:00:00', NULL),
(@team4,  @ag10, '2025-05-01 08:00:00', NULL),

-- QG Fortaleza (agentes @ag11…@ag20)
(@team5,  @ag11, '2025-05-01 09:00:00', NULL),
(@team5,  @ag12, '2025-05-01 09:00:00', NULL),
(@team5,  @ag13, '2025-05-01 09:00:00', NULL),
(@team6,  @ag14, '2025-05-01 09:00:00', NULL),
(@team6,  @ag15, '2025-05-01 09:00:00', NULL),
(@team6,  @ag16, '2025-05-01 09:00:00', NULL),
(@team7,  @ag17, '2025-05-01 09:00:00', NULL),
(@team7,  @ag18, '2025-05-01 09:00:00', NULL),
(@team8,  @ag19, '2025-05-01 09:00:00', NULL),
(@team8,  @ag20, '2025-05-01 09:00:00', NULL),

-- QG Porto Alegre (agentes @ag21…@ag30)
(@team9,  @ag21, '2025-05-01 10:00:00', NULL),
(@team9,  @ag22, '2025-05-01 10:00:00', NULL),
(@team9,  @ag23, '2025-05-01 10:00:00', NULL),
(@team10, @ag24, '2025-05-01 10:00:00', NULL),
(@team10, @ag25, '2025-05-01 10:00:00', NULL),
(@team10, @ag26, '2025-05-01 10:00:00', NULL),
(@team11, @ag27, '2025-05-01 10:00:00', NULL),
(@team11, @ag28, '2025-05-01 10:00:00', NULL),
(@team12, @ag29, '2025-05-01 10:00:00', NULL),
(@team12, @ag30, '2025-05-01 10:00:00', NULL);

-- Alocação de equipes em missões
INSERT INTO MISSION_ASSIGNMENT (id_team, id_mission, allocation_date, deallocation_date) VALUES
-- QG Central (miss1, miss2, miss3)
(@team1,  @miss1, '2025-04-01 08:00:00', NULL),
(@team2,  @miss2, '2025-04-01 08:15:00', NULL),
(@team3,  @miss3, '2025-02-01 09:00:00', '2025-03-15'),
(@team4,  @miss3, '2025-05-05 22:20:00', NULL),

-- QG Fortaleza (miss4, miss5, miss6)
(@team5,  @miss4, '2025-05-10 06:30:00', NULL),
(@team6,  @miss4, '2025-05-10 06:45:00', NULL),
(@team7,  @miss5, '2025-05-12 20:10:00', NULL),
(@team8,  @miss6, '2025-04-20 10:05:00', '2025-04-21'),

-- QG Porto Alegre (miss7, miss8, miss9)
(@team9,  @miss7, '2025-05-08 14:10:00', NULL),
(@team10, @miss7, '2025-05-08 14:25:00', NULL),
(@team11, @miss8, '2025-05-15 09:10:00', NULL),
(@team12, @miss9, '2025-03-01 08:10:00', '2025-03-03');

-- Evidências
INSERT INTO EVIDENCE (id_evidence, origin, description, stability_level, id_mission) VALUES
(@evid1, 'Objeto ritualístico',          'Livro antigo com símbolos',                'Perigoso',  @miss1),
(@evid2, 'Manuscrito cifrado',           'Textos estranhos em línguas mortas',       'Volatil',   @miss2),
(@evid3, 'Diário enigmático',            'Entradas sobre visões noturnas',           'Volatil',  @miss3),
(@evid4, 'Coleta de areia',              'Amostras brilhantes da praia',             'Estável',   @miss4),
(@evid5, 'Círculo ritual',               'Cacos de pedra com runas',                 'Perigoso',  @miss5),
(@evid6, 'Mapa urbano',                  'Marcas sinalizando portais',               'Volatil',   @miss6),
(@evid7, 'Fragmento metálico',           'Pedaço de maquinário corroído',            'Estável',   @miss7),
(@evid8, 'Placa comemorativa',           'Inscrições antigas apagadas',              'Volatil',  @miss8),
(@evid9, 'Relíquia cerimonial',          'Objeto entalhado com selos',               'Perigoso',  @miss9);

-- Ameaças
INSERT INTO THREATS (id_threat, description) VALUES
(@thr1,'Organização oculta que pratica rituais sombrios'),
(@thr2,'Entidade de energia sombria que se manifesta em cemitérios'),
(@thr3,'Entidade espectral aprisionada na cripta'),
(@thr4,'Ser de gelo ancestral'),
(@thr5,'Sussurros vindos do porão'),
(@thr6,'Máscara infernal ambulante'),
(@thr7,'Colônia de fungos lúgubres'),
(@thr8,'Aparição no espelho'),
(@thr9,'Ser de fogo eterno'),
(@thr10,'Criança fantasma cantando'),
(@thr11,'A entidade das correntes'),
(@thr12,'Guardião de pedra viva'),
(@thr13,'Véu de névoa carmesim'),
(@thr14,'Sombras vivas na floresta'),
(@thr15,'Gárgula vampírica');

INSERT INTO THREATS_NAMES (id_threat, name) VALUES
(@thr1,'Seita Negra'),(@thr2,'Sombra Vivente'),(@thr3,'Espírito da Cripta'),
(@thr4,'Morsa Gélida'),(@thr5,'Eco Silencioso'),(@thr6,'Máscara da Agonia'),
(@thr7,'Fungo da Perdição'),(@thr8,'Olhar Vampírico'),(@thr9,'Flama Imortal'),
(@thr10,'Lamento Infantil'),(@thr11,'Corrente Enjaulada'),(@thr12,'Guardião de Pedra'),
(@thr13,'Névoa Rubra'),(@thr14,'Árvores Sombras'),(@thr15,'Gárgula Sombria');


INSERT INTO THREAT_MISSION (id_threat, id_mission) VALUES
  (@thr1,  @miss2),
  (@thr2,  @miss1),
  (@thr3,  @miss1),
  (@thr4,  @miss3),
  (@thr5,  @miss4),
  (@thr6,  @miss5),
  (@thr7,  @miss6),
  (@thr8,  @miss7),
  (@thr9,  @miss8),
  (@thr10, @miss9),
  (@thr11, @miss3),
  (@thr12, @miss4),
  (@thr13, @miss5),
  (@thr14, @miss6),
  (@thr15, @miss7);

INSERT INTO THREAT_NEUTRALIZATION (id_team, id_mission, id_threat, method, result) VALUES
(@team2,@miss2,@thr1,'Confronto direto com encantamentos','Seita dispersa'),
(@team1,@miss1,@thr2,'Ritual de banimento','Entidade enfraquecida');

INSERT INTO THREAT_ELEMENTS (id_element, id_threat) VALUES
(@elConhe,  @thr1),
(@elEnergia,@thr1),
(@elSangue, @thr2),
(@elMorte,  @thr2),
(@elMedo,   @thr3),
(@elEnergia,@thr3),
(@elMedo,   @thr4),
(@elMorte,  @thr5),
(@elSangue, @thr6),
(@elConhe,  @thr7),
(@elEnergia,@thr8),
(@elMedo,   @thr9),
(@elMorte,  @thr10),
(@elSangue, @thr11),
(@elConhe,  @thr12),
(@elEnergia,@thr13),
(@elMedo,   @thr14),
(@elMorte,  @thr15);

INSERT INTO PARANORMAL_ENTITY (id_entity, enigma) VALUES
(@thr2,  'Decifrar os sussurros sombrios revela seu ponto fraco'),
(@thr3,  'O eco dos lamentos na cripta guia sua prisão'),
(@thr8,  'O olhar paralisa até o coração mais corajoso'),
(@thr9,  'Chamas que não consomem o corpo, mas corroem a alma'),
(@thr10, 'O choro infantil ecoa como premonição de desespero'),
(@thr11, 'As correntes carregam memórias de dor ancestral'),
(@thr12, 'O coração de pedra pulsa com guardiões adormecidos'),
(@thr13, 'A névoa rubra sussurra segredos de sacrifício'),
(@thr14, 'Sombras entrelaçadas nas raízes de antigas árvores'),
(@thr15, 'Gárgulas despertam sob a luz da lua para caçar');

INSERT INTO ENTITY_ABILITY (id_entity, ability) VALUES
(@thr2,  'Intangibilidade'),
(@thr2,  'Manipulação de sombras'),
(@thr2,  'Aura Sombria'),

(@thr3,  'Intangibilidade'),
(@thr3,  'Toque Gelado'),

(@thr8,  'Olhar Paralisante'),
(@thr8,  'Dreno de Vitalidade'),

(@thr9,  'Controle de Chamas'),
(@thr9,  'Imortalidade Térmica'),

(@thr10, 'Lamento Assombrado'),
(@thr10, 'Manipulação Emocional'),

(@thr11, 'Controle de Correntes'),
(@thr11, 'Prisão Psíquica'),

(@thr12, 'Corpo de Pedra'),
(@thr12, 'Força Titânica'),

(@thr13, 'Véu Nebuloso'),
(@thr13, 'Envenenamento Mórbido'),

(@thr14, 'Enredamento Raiz'),
(@thr14, 'Mobilidade Sombria'),

(@thr15, 'Voo de Pedra'),
(@thr15, 'Salto Sombrio');

INSERT INTO PARANORMAL_ORGANIZATION (id_organization) VALUES
(@thr1), (@thr4),(@thr5),
(@thr6), (@thr7);

INSERT INTO MEMBERS (id_member, id_organization, name, role) VALUES
(@mem1,@thr1,'Sacerdote Sombrio','Lider'),
(@mem2,@thr1,'Ana das Trevas','Pesquisador'),
(@mem3,@thr1,'Carlos Oculto','Ocultista'),
(@mem4,@thr1,'João Simpático','Simpatizante'),
(@mem5,@thr1,'Lucas Almeida','Ocultista'),

-- Para thr4 (Morsa Gélida)
(@mem6,@thr4,'Ana Couto','Líder'),
(@mem7,@thr4,'Bruno Teixeira','Pesquisador'),
(@mem8,@thr4,'Carla Dias','Ocultista'),
(@mem9,@thr4,'Daniela Porto','Simpatizante'),
(@mem10,@thr4,'Eduardo Rocha','Simpatizante'),

-- Para thr5 (Eco Silencioso)
(@mem11,@thr5,'Fábio Lima','Líder'),
(@mem12,@thr5,'Gabriela Melo','Pesquisador'),
(@mem13,@thr5,'Hugo Santos','Pesquisador'),
(@mem14,@thr5,'Isabela Freitas','Pesquisador'),
(@mem15,@thr5,'João Victor','Ocultista'),

-- Para thr6 (Máscara da Agonia)
(@mem16,@thr6,'Karen Alves','Líder'),
(@mem17,@thr6,'Leonardo Pereira','Ocultista'),
(@mem18,@thr6,'Marcos Souza','Ocultista'),
(@mem19,@thr6,'Natália Fernandes','Ocultista'),
(@mem20,@thr6,'Otávio Nunes','Ocultista'),

-- Para thr7 (Fungo da Perdição)
(@mem21,@thr7,'Patrícia Costa','Líder'),
(@mem22,@thr7,'Rafael Martins','Ocultista'),
(@mem23,@thr7,'Sílvia Barbosa','Simpatizante'),
(@mem24,@thr7,'Tiago Mendes','Simpatizante');