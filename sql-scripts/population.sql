-- Gerando UUIDs para todas as entidades
-- ===================================================================
-- Agentes
SET
@ag1=UUID(), @ag2=UUID(), @ag3=UUID(), @ag4=UUID(), @ag5=UUID(), @ag6=UUID(), @ag7=UUID(), @ag8=UUID(), @ag9=UUID(), @ag10=UUID(),
@ag11=UUID(), @ag12=UUID(), @ag13=UUID(), @ag14=UUID(), @ag15=UUID(), @ag16=UUID(), @ag17=UUID(), @ag18=UUID(), @ag19=UUID(), @ag20=UUID(),
@ag21=UUID(), @ag22=UUID(), @ag23=UUID(), @ag24=UUID(), @ag25=UUID(), @ag26=UUID(), @ag27=UUID(), @ag28=UUID(), @ag29=UUID(), @ag30=UUID(),
@ag31=UUID(), @ag32=UUID(), @ag33=UUID(), @ag34=UUID(), @ag35=UUID(), @ag36=UUID(), @ag37=UUID(), @ag38=UUID(), @ag39=UUID(), @ag40=UUID(),
@ag41=UUID(), @ag42=UUID(), @ag43=UUID(), @ag44=UUID(), @ag45=UUID(), @ag46=UUID(), @ag47=UUID(), @ag48=UUID(), @ag49=UUID(), @ag50=UUID(),
@ag51=UUID(), @ag52=UUID(), @ag53=UUID(), @ag54=UUID(), @ag55=UUID(), @ag56=UUID(), @ag57=UUID(), @ag58=UUID(), @ag59=UUID(), @ag60=UUID(),
@ag61=UUID(), @ag62=UUID(), @ag63=UUID(), @ag64=UUID(), @ag65=UUID(), @ag66=UUID(), @ag67=UUID(), @ag68=UUID(), @ag69=UUID(), @ag70=UUID(),
@ag71=UUID(), @ag72=UUID(), @ag73=UUID(), @ag74=UUID(), @ag75=UUID(), @ag76=UUID(), @ag77=UUID(), @ag78=UUID(), @ag79=UUID(), @ag80=UUID(),
@ag81=UUID(), @ag82=UUID(), @ag83=UUID(), @ag84=UUID(), @ag85=UUID(), @ag86=UUID(), @ag87=UUID(), @ag88=UUID(), @ag89=UUID(), @ag90=UUID(),
@ag91=UUID(), @ag92=UUID(), @ag93=UUID(), @ag94=UUID(), @ag95=UUID(), @ag96=UUID(), @ag97=UUID(), @ag98=UUID(), @ag99=UUID(), @ag100=UUID();



-- ===================================================================
-- Verissimos
SET
@ver1 = @ag2, @ver2=@ag25, @ver3=@ag49, @ver4=@ag57, @ver5=@ag75, @ver6=@ag94;

-- ===================================================================
-- Endereços
SET
@addr1  = UUID(), @addr2  = UUID(), @addr3  = UUID(), @addr4  = UUID(), @addr5  = UUID(),
@addr6  = UUID(), @addr7  = UUID(), @addr8  = UUID(), @addr9  = UUID(), @addr10 = UUID(),
@addr11 = UUID(), @addr12 = UUID(), @addr13 = UUID(), @addr14 = UUID(), @addr15 = UUID(),
@addr16 = UUID(), @addr17 = UUID(), @addr18 = UUID(), @addr19 = UUID(), @addr20 = UUID(),
@addr21 = UUID(), @addr22 = UUID(), @addr23 = UUID(), @addr24 = UUID(), @addr25 = UUID(),
@addr26 = UUID(), @addr27 = UUID(), @addr28 = UUID(), @addr29 = UUID(), @addr30 = UUID(),
@addr31 = UUID(), @addr32 = UUID(), @addr33 = UUID(), @addr34 = UUID(), @addr35 = UUID(),
@addr36 = UUID(), @addr37 = UUID(), @addr38 = UUID(), @addr39 = UUID(), @addr40 = UUID(),
@addr41 = UUID(), @addr42 = UUID(), @addr43 = UUID(), @addr44 = UUID(), @addr45 = UUID(),
@addr46 = UUID(), @addr47 = UUID(), @addr48 = UUID(), @addr49 = UUID(), @addr50 = UUID(),
@addr51 = UUID(), @addr52 = UUID(), @addr53 = UUID(), @addr54 = UUID(), @addr55 = UUID(),
@addr56 = UUID(), @addr57 = UUID(), @addr58 = UUID(), @addr59 = UUID(), @addr60 = UUID(),
@addr61 = UUID(), @addr62 = UUID(), @addr63 = UUID(), @addr64 = UUID(), @addr65 = UUID(),
@addr66 = UUID(), @addr67 = UUID(), @addr68 = UUID(), @addr69 = UUID(), @addr70 = UUID(),
@addr71 = UUID(), @addr72 = UUID(), @addr73 = UUID(), @addr74 = UUID(), @addr75 = UUID(),
@addr76 = UUID(), @addr77 = UUID(), @addr78 = UUID(), @addr79 = UUID(), @addr80 = UUID(),
@addr81 = UUID(), @addr82 = UUID(), @addr83 = UUID(), @addr84 = UUID(), @addr85 = UUID(),
@addr86 = UUID(), @addr87 = UUID(), @addr88 = UUID(), @addr89 = UUID(), @addr90 = UUID(),
@addr91 = UUID(), @addr92 = UUID(), @addr93 = UUID(), @addr94 = UUID(), @addr95 = UUID(),
@addr96 = UUID(), @addr97 = UUID(), @addr98 = UUID(), @addr99 = UUID(), @addr100 = UUID();


-- ===================================================================
-- QGs
SET @hq1= UUID(), @hq2=UUID(),   @hq3=UUID(), @hq4=UUID(), @hq5=UUID(), @hq6=UUID();

-- ===================================================================
-- Equipes
SET
@team1  = UUID(),  @team2  = UUID(),  @team3  = UUID(),  @team4  = UUID(),
@team5  = UUID(),  @team6  = UUID(),  @team7  = UUID(),  @team8  = UUID(),
@team9  = UUID(),  @team10 = UUID(),  @team11 = UUID(),  @team12 = UUID(),
@team13  = UUID(),  @team14 = UUID(),  @team15 = UUID(),  @team16 = UUID(),
@team17  = UUID(),  @team18 = UUID(),  @team19 = UUID(),  @team20 = UUID(),
@team21  = UUID(),  @team22 = UUID(),  @team23 = UUID(),  @team24 = UUID(),
@team25  = UUID(),  @team26 = UUID(),  @team27 = UUID(),  @team28 = UUID();

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
@miss1   = UUID(), @miss2   = UUID(), @miss3   = UUID(), @miss4   = UUID(), @miss5   = UUID(),
@miss6   = UUID(), @miss7   = UUID(), @miss8   = UUID(), @miss9   = UUID(), @miss10  = UUID(),
@miss11  = UUID(), @miss12  = UUID(), @miss13  = UUID(), @miss14  = UUID(), @miss15  = UUID(),
@miss16  = UUID(), @miss17  = UUID(), @miss18  = UUID(), @miss19  = UUID(), @miss20  = UUID(),
@miss21  = UUID(), @miss22  = UUID(), @miss23  = UUID(), @miss24  = UUID(), @miss25  = UUID(),
@miss26  = UUID(), @miss27  = UUID(), @miss28  = UUID(), @miss29  = UUID(), @miss30  = UUID(),
@miss31  = UUID(), @miss32  = UUID(), @miss33  = UUID(), @miss34  = UUID(), @miss35  = UUID(),
@miss36  = UUID(), @miss37  = UUID(), @miss38  = UUID(), @miss39  = UUID(), @miss40  = UUID(),
@miss41  = UUID(), @miss42  = UUID(), @miss43  = UUID(), @miss44  = UUID(), @miss45  = UUID(),
@miss46  = UUID(), @miss47  = UUID(), @miss48  = UUID(), @miss49  = UUID(), @miss50  = UUID(),
@miss51  = UUID(), @miss52  = UUID(), @miss53  = UUID(), @miss54  = UUID(), @miss55  = UUID(),
@miss56  = UUID(), @miss57  = UUID(), @miss58  = UUID(), @miss59  = UUID(), @miss60  = UUID(),
@miss61  = UUID(), @miss62  = UUID(), @miss63  = UUID(), @miss64  = UUID(), @miss65  = UUID(),
@miss66  = UUID(), @miss67  = UUID(), @miss68  = UUID(), @miss69  = UUID(), @miss70  = UUID(),
@miss71  = UUID(), @miss72  = UUID(), @miss73  = UUID(), @miss74  = UUID(), @miss75  = UUID(),
@miss76  = UUID(), @miss77  = UUID(), @miss78  = UUID(), @miss79  = UUID(), @miss80  = UUID(),
@miss81  = UUID(), @miss82  = UUID(), @miss83  = UUID(), @miss84  = UUID(), @miss85  = UUID(),
@miss86  = UUID(), @miss87  = UUID(), @miss88  = UUID(), @miss89  = UUID(), @miss90  = UUID(),
@miss91  = UUID(), @miss92  = UUID(), @miss93  = UUID(), @miss94  = UUID(), @miss95  = UUID(),
@miss96  = UUID(), @miss97  = UUID(), @miss98  = UUID(), @miss99  = UUID(), @miss100 = UUID(),
@miss101  = UUID(), @miss102  = UUID(), @miss103  = UUID(), @miss104  = UUID(), @miss105 = UUID(),
@miss106  = UUID(), @miss103  = UUID(), @miss104  = UUID(), @miss105  = UUID(), @miss106 = UUID(),
@miss107  = UUID(), @miss108  = UUID(), @miss109  = UUID(), @miss110  = UUID(), @miss111 = UUID(),
@miss111  = UUID(), @miss112  = UUID(), @miss113  = UUID(), @miss114  = UUID(), @miss115 = UUID(),
@miss116  = UUID(), @miss117  = UUID(), @miss118  = UUID(), @miss119  = UUID(), @miss120 = UUID();

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
-- População de AGENTS OK
INSERT INTO AGENTS (id_agent, name, birth_date, phone, specialization, rank_agent, nex, retired, transcended) VALUES
-- QG1
(@ag1,  'Alice Silva',    '1985-06-15', '81999990001', 'Ocultista',   'Recruta',  20, FALSE, FALSE),
(@ag2,  'Bruno Costa',    '1978-02-20', '81999990002', 'Especialista','Veterano', 45, FALSE, FALSE),
(@ag3,  'Carla Souza',    '1990-10-05', '81999990003', 'Combatente',  'Elite',    85, FALSE, TRUE),
(@ag4,  'Daniel Lima',    '1970-12-01', '81999990004', 'Especialista','Veterano', 60, FALSE,  FALSE),
(@ag5,  'Eva Santos',     '1982-03-12', '82999990005', 'Ocultista',   'Elite',    95, FALSE, TRUE),
(@ag6,  'Fabio Rocha',    '1995-07-30', '87999990006', 'Combatente',  'Recruta',  10, FALSE, FALSE),
(@ag7,  'Gustavo Pires',  '1981-01-10', '11999990007', 'Especialista','Recruta',  25, FALSE, FALSE),
(@ag8,  'Helena Dias',    '1984-05-22', '11999990008', 'Ocultista',   'Veterano', 50, TRUE, FALSE),
(@ag9,  'Igor Almeida',   '1979-11-11', '11999990009', 'Combatente',  'Elite',    90, FALSE, FALSE),
(@ag10, 'Juliana Freitas','1992-08-17', '11999990010', 'Combatente',  'Recruta',  15, FALSE, FALSE),
(@ag11, 'Karina Moura',   '1986-04-03', '11999990011', 'Ocultista',   'Veterano', 55, FALSE, FALSE),
(@ag12, 'Lucas Batista',  '1988-09-29', '11999990012', 'Especialista','Elite',    80, FALSE, FALSE),
(@ag13, 'Mariana Costa',  '1991-12-05', '21999990013', 'Combatente',  'Veterano', 65, FALSE, FALSE),
(@ag14, 'Nicolas Horn',   '1975-07-07', '21999990014', 'Especialista','Recruta',  18, FALSE, FALSE),
(@ag15, 'Olivia Reis',    '1983-02-14', '21999990015', 'Ocultista',   'Elite',    88, FALSE, TRUE),
(@ag16, 'Pedro Lima',     '1976-06-21', '21999990016', 'Combatente',  'Veterano', 58, FALSE,  FALSE),
(@ag17, 'Quesia Tavares', '1989-03-30', '11999990017', 'Especialista','Recruta',  22, FALSE, FALSE),
-- QG2
(@ag18, 'Renato Alves',   '1993-10-12', '11999990018', 'Especialista','Veterano', 47, FALSE, FALSE),
(@ag19, 'Sofia Gomes',    '1987-11-25', '11999990019', 'Ocultista',   'Elite',    92, FALSE, TRUE),
(@ag20, 'Thiago Varela',  '1990-01-18', '11999990020', 'Combatente',  'Recruta',  12, FALSE, FALSE),
(@ag21, 'Ubirajara Luz',  '1972-08-08', '81999990021', 'Especialista','Veterano', 60, FALSE,  FALSE),
(@ag22,'Gustavo Mourato','1979-03-03','1796789-0123','Especialista','Veterano',      62,FALSE,FALSE),
(@ag23,'Vinicius de Andrade','1986-11-11','4797890-1234','Combatente','Elite',           96,TRUE,FALSE),
(@ag24,'Luan Hiroshi Kato','1991-02-02','(6798901-2345','Ocultista','Veterano',       61,FALSE,FALSE),
(@ag25,'Gabriel Melo Cavalcanti de Albuquerque','1993-06-06','8799012-3456','Especialista','Recruta',28,FALSE,FALSE),
(@ag26,'Ana Clara Gomes da Silva','1984-09-09','9790123-4567','Combatente','Veterano',               59,FALSE,FALSE),
(@ag27,'Sophia de Araújo Gallindo Pinto','1978-04-04','1791234-5678','Ocultista','Elite',            67,FALSE,FALSE),
(@ag28,'Paulo Rosado','1989-01-01','3792345-6789','Especialista','Veterano',       64,FALSE,FALSE),
(@ag29, 'Cassio Nunes',   '1983-06-06', '81999990029', 'Especialista','Elite',    82, FALSE, TRUE),
(@ag30, 'Diana Azevedo',  '1989-09-09', '81999990030', 'Combatente',  'Veterano', 57, FALSE, FALSE),
(@ag31,'Camila Andrade','1988-02-05','3193456-7890','Combatente','Elite',         95,FALSE,FALSE),
(@ag32,'Diego Ferreira','1979-11-17','4194567-8901','Ocultista','Veterano',       60,FALSE,FALSE),
(@ag33,'Eduarda Gomes','1992-06-30','5195678-9012','Especialista','Recruta',      20,FALSE,FALSE),
(@ag34,'Felipe Ramos','1983-01-22','6196789-0123','Combatente','Veterano',        50,FALSE,TRUE),
-- QG3
(@ag35,'Gabriela Melo','1995-08-14','7197890-1234','Ocultista','Elite',           88,FALSE,FALSE),
(@ag36,'Henrique Alves','1981-12-09','8198901-2345','Especialista','Veterano',    65,FALSE,FALSE),
(@ag37,'Isabela Pinto','1993-03-19','9199012-3456','Combatente','Recruta',        25,FALSE,FALSE),
(@ag38,'João Duarte','1977-07-27','9590123-4567','Ocultista','Veterano',          55,FALSE,FALSE),
(@ag39,'Karina Santos','1986-10-03','4791234-5678','Especialista','Elite',        92,FALSE,FALSE),
(@ag40,'Leonardo Vieira','1980-05-11','6792345-6789','Combatente','Veterano',     58,FALSE,FALSE),
(@ag41,'Mariana Lopes','1991-12-25','2793456-7890','Ocultista','Recruta',         35,FALSE,FALSE),
(@ag42,'Nicolas Rocha','1984-04-04','3794567-8901','Especialista','Veterano',     63,FALSE,FALSE),
(@ag43,'Olívia Castro','1996-09-18','5795678-9012','Combatente','Elite',          99,TRUE,FALSE),
(@ag44,'Pedro Martins','1978-02-28','7796789-0123','Ocultista','Veterano',        68,FALSE,FALSE),
(@ag45,'Quésia Lima','1989-11-11','8797890-1234','Especialista','Recruta',        22,FALSE,FALSE),
(@ag46,'Ricardo Moura','1982-06-06','9798901-2345','Combatente','Veterano',       57,FALSE,FALSE),
(@ag47,'Sofia Teixeira','1994-03-23','1799012-3456','Ocultista','Elite',          94,FALSE,FALSE),
(@ag48,'Tiago Sousa','1976-08-08','2790123-4567','Especialista','Veterano',       66,FALSE,FALSE),
(@ag49,'Úrsula Nunes','1987-01-15','4791234-5678','Combatente','Recruta',         29,FALSE,FALSE),
(@ag50,'Vitor Braga','1990-05-05','6792345-6789','Ocultista','Veterano',          71,FALSE,FALSE),
(@ag51,'Wagner Melo','1983-10-10','8793456-7890','Especialista','Elite',          89,FALSE,FALSE),
-- QG4
(@ag52,'Ximena Farias','1992-12-12','9794567-8901','Combatente','Veterano',       54,FALSE,FALSE),
(@ag53,'Yara Costa','1985-07-07','3795678-9012','Ocultista','Recruta',            33,FALSE,FALSE),
(@ag54, 'Valéria Rocha',  '1985-09-09', '81999990022', 'Combatente',  'Recruta',  14, FALSE, FALSE),
(@ag55, 'Wellington Paz', '1982-03-03', '81999990023', 'Combatente',  'Elite',    85, FALSE, TRUE),
(@ag56, 'Ximena Duarte',  '1994-12-12', '81999990024', 'Ocultista',   'Veterano', 53, TRUE, FALSE),
(@ag57, 'Yuri Santana',   '1988-07-07', '81999990025', 'Especialista','Recruta',  19, FALSE, FALSE),
(@ag58, 'Zara Pinto',     '1992-10-10', '81999990026', 'Combatente',  'Elite',    89, FALSE, TRUE),
(@ag59, 'Alan Cardoso',   '1977-05-05', '81999990027', 'Combatente',  'Veterano', 63, FALSE, FALSE),  -- corrigido
(@ag60, 'Beatriz Silva',  '1991-02-02', '81999990028', 'Ocultista',   'Recruta',  17, FALSE, FALSE),
(@ag61,  'Eduarda Ramos',     '1988-04-12', '87999990061', 'Ocultista',    'Recruta',  10, FALSE, FALSE),
(@ag62,  'Felipe Andrade',    '1992-11-03', '87999990062', 'Combatente',   'Veterano', 35, FALSE, FALSE),
(@ag63,  'Gabriela Melo',     '1984-08-27', '87999990063', 'Especialista', 'Veterano', 50, FALSE, FALSE),
(@ag64,  'Henrique Duarte',   '1975-06-15', '82999990064', 'Ocultista',    'Elite',    95, FALSE, TRUE),
(@ag65,  'Isabela Rocha',     '1995-01-19', '82999990065', 'Combatente',   'Recruta',  15, FALSE, FALSE),
(@ag66,  'João Pedro Lima',   '1981-09-10', '82999990066', 'Especialista', 'Veterano', 40, FALSE, FALSE),
(@ag67,  'Karen Nunes',       '1986-03-24', '67999990067', 'Ocultista',    'Veterano', 55, FALSE, FALSE),
-- QG5
(@ag68,  'Lucas Fernandes',   '1990-07-06', '67999990068', 'Combatente',   'Elite',    88, FALSE, FALSE),
(@ag69,  'Marina Teixeira',   '1989-10-30', '67999990069', 'Especialista', 'Veterano', 38, FALSE, FALSE),
(@ag70,  'Nicolas Castro',    '1982-12-11', '77999990070', 'Ocultista',    'Veterano', 65, FALSE, FALSE),
(@ag71,  'Olívia Martins',    '1993-05-22', '67999990071', 'Combatente',   'Recruta',  12, FALSE, FALSE),
(@ag72,  'Paulo Henrique',    '1976-02-17', '67999990072', 'Especialista', 'Elite',    91, FALSE,  TRUE),
(@ag73,  'Quésia Lopes',      '1987-11-08', '67999990073', 'Ocultista',    'Veterano', 30, TRUE, FALSE),
(@ag74,  'Rafael Santana',    '1980-01-05', '67999990074', 'Combatente',   'Veterano', 52, FALSE, FALSE),
(@ag75,  'Sabrina Vieira',    '1994-04-18', '67999990075', 'Especialista', 'Recruta',  18, FALSE, FALSE),
(@ag76,  'Thiago Araújo',     '1983-09-21', '67999990076', 'Ocultista',    'Veterano', 44, FALSE, FALSE),
(@ag77,  'Úrsula Farias',     '1979-07-30', '67999990077', 'Combatente',   'Elite',    89, FALSE, TRUE),
(@ag78,  'Vitor Correia',     '1986-12-14', '67999990078', 'Especialista', 'Veterano', 63, FALSE, FALSE),
(@ag79,  'Wesley Monteiro',   '1991-03-07', '82999990079', 'Ocultista',    'Veterano', 36, FALSE, FALSE),
(@ag80,  'Xênia Barros',      '1985-06-29', '3999990080', 'Combatente',   'Veterano', 58, FALSE, FALSE),
(@ag81,  'Yuri Cardoso',      '1980-11-02', '21999990081', 'Especialista', 'Elite',    87, FALSE, TRUE),
(@ag82,  'Zuleika Torres',    '1996-08-13', '79999990082', 'Ocultista',    'Recruta',  20, FALSE, FALSE),
(@ag83,  'Aline Matos',       '1982-02-20', '79999990083', 'Combatente',   'Veterano', 34, FALSE, FALSE),
-- QG6
(@ag84,  'Brenda Almeida',    '1989-09-09', '81999990084', 'Especialista', 'Veterano', 61, FALSE, FALSE),
(@ag85,  'Carlos Moura',      '1974-01-11', '81999990085', 'Ocultista',    'Elite',    93, FALSE,  FALSE),
(@ag86,  'Débora Pinheiro',   '1992-05-26', '81999990086', 'Combatente',   'Recruta',  8,  FALSE, FALSE),
(@ag87,  'Emerson Leal',      '1987-10-03', '81999990087', 'Especialista', 'Veterano', 42, FALSE, FALSE),
(@ag88,  'Fernanda Prado',    '1983-07-15', '81999990088', 'Ocultista',    'Veterano', 53, FALSE, FALSE),
(@ag89,  'Gustavo Paiva',     '1977-12-19', '81999990089', 'Combatente',   'Elite',    97, FALSE,  TRUE),
(@ag90,  'Helena Bastos',     '1981-06-09', '81999990090', 'Especialista', 'Veterano', 67, FALSE, FALSE),
(@ag91,  'Igor Batista',      '1990-03-30', '21999990091', 'Ocultista',    'Veterano', 41, FALSE, FALSE),
(@ag92,  'Júlia Camargo',     '1993-10-17', '21999990092', 'Combatente',   'Recruta',  19, FALSE, FALSE),
(@ag93,  'Kauan Ribeiro',     '1988-01-22', '11999990093', 'Especialista', 'Veterano', 39, FALSE, FALSE),
(@ag94,  'Lorena Silveira',   '1984-04-11', '11999990094', 'Ocultista',    'Veterano', 59, FALSE, FALSE),
(@ag95,  'Matheus Rezende',   '1979-09-25', '11999990095', 'Combatente',   'Elite',    90, FALSE,  TRUE),
(@ag96,  'Natália Gomes',     '1986-08-05', '81999990096', 'Especialista', 'Veterano', 62, TRUE, FALSE),
(@ag97,  'Otávio Neves',      '1995-11-28', '11999990097', 'Ocultista',    'Recruta',  16, FALSE, FALSE),
(@ag98,  'Priscila Galvão',   '1991-02-08', '81999990098', 'Combatente',   'Veterano', 37, FALSE, FALSE),
(@ag99,  'Renato Cunha',      '1985-12-23', '81999990099', 'Especialista', 'Veterano', 56, FALSE, FALSE),
(@ag100, 'Simone Oliveira',   '1980-07-01', '81999990100', 'Ocultista',    'Elite',    96, FALSE,  TRUE);

-- População de VERISSIMO OK
INSERT INTO VERISSIMO (id_verissimo, login, password_ver) VALUES
(@ver1, 'BC', 'cost876'),
(@ver2,'GMCA','ellie2021'),
(@ver3,'US','naruto8715'),
(@ver4, 'YS', 'onice8877'),
(@ver5, 'SV', 'carpenter9441'),
(@ver6, 'LS', 'lore8441');

-- População de ENDEREÇOS OK
INSERT INTO ADDRESS (id_address, street, number, neighborhood, city, state, postal_code) VALUES
(@addr1,'Rua da Aurora',123,'Boa Vista','Recife','PE','50000-000'),
(@addr2,'Av. Beira Mar', 45,'Meireles','Fortaleza','CE','60000-000'),
(@addr3,'Av. Borges de Medeiros',789,'Centro','Porto Alegre','RS','90000-000'),
(@addr4, 'Av. Beira Mar',           45,  'Meireles',          'Fortaleza',     'CE', '60000-000'),
(@addr5, 'Rua dos Encantamentos',   77,  'Praia de Iracema',   'Fortaleza',     'CE', '60010-000'),
(@addr6, 'Av. da Luz',              200, 'Centro',            'Fortaleza',     'CE', '60020-000'),
(@addr7, 'Rua do Trabalho',         10,  'Distrito Industrial','Porto Alegre','RS','90010-000'),
(@addr8, 'Praça da Matriz',         1,   'Centro Histórico',  'Porto Alegre',  'RS', '90020-000'),
(@addr9, 'Rua da Câmara',           250, 'Cidade Baixa',      'Porto Alegre',  'RS', '90030-000'),
(@addr10, 'Rua das Almas',             101, 'Santo Amaro',         'Recife',        'PE', '50040-000'),
(@addr11, 'Travessa do Sol',           55,  'Boa Vista',           'Recife',        'PE', '50050-000'),
(@addr12, 'Av. do Forte',              400, 'Tamarineira',         'Recife',        'PE', '50060-000'),
(@addr13, 'Rua do Encanto',            78,  'Centro',              'Manaus',        'AM', '69000-000'),
(@addr14, 'Rua Rio Negro',             145, 'Adrianópolis',        'Manaus',        'AM', '69010-000'),
(@addr15, 'Av. Paulista',              1000, 'Bela Vista',         'São Paulo',     'SP', '01310-000'),
(@addr16, 'Rua Augusta',               250,  'Consolação',         'São Paulo',     'SP', '01305-000'),
(@addr17, 'Rua Vergueiro',             785,  'Liberdade',          'São Paulo',     'SP', '01504-001'),
(@addr18, 'Rua das Palmeiras',         66,  'Graças',              'Recife',        'PE', '50090-000'),
(@addr19, 'Av. das Nações Unidas',     3000, 'Brooklin',           'São Paulo',     'SP', '04578-000'),
(@addr20, 'Rua das Orquídeas',         98,  'Centro',              'Goiânia',       'GO', '74000-000'),
(@addr21, 'Rua do Cerrado',            204, 'Setor Bueno',         'Goiânia',       'GO', '74120-000'),
(@addr22, 'Esplanada dos Ministérios', 0,   'Zona Cívico-Administrativa','Brasília','DF','70000-000'),
(@addr23, 'SQS 308 Bloco A',           5,   'Asa Sul',             'Brasília',      'DF', '70330-550'),
(@addr24, 'Rua das Sombras',           13,  'Aflitos',             'Recife',        'PE', '50100-000'),
(@addr25, 'Rua das Laranjeiras',       12,  'Jardim Botânico',     'Rio de Janeiro','RJ','22470-000'),
(@addr26, 'Av. das Américas',          500, 'Barra da Tijuca',     'Rio de Janeiro','RJ','22640-100'),
(@addr27, 'Rua da Aurora Boreal',      42,  'Adrianópolis',        'Manaus',        'AM', '69020-000'),
(@addr28, 'Rua do Contorno',           120, 'Ponta Negra',         'Manaus',        'AM', '69037-000'),
(@addr29, 'Rua da Catedral',           1,   'Centro Histórico',    'Porto Alegre',  'RS', '90040-000'),
(@addr30, 'Rua João Pessoa',           560, 'Cidade Baixa',        'Porto Alegre',  'RS', '90050-000'),
(@addr31, 'Av. Ipiranga',              1200,'Partenon',            'Porto Alegre',  'RS', '90610-000'),
(@addr32, 'Rua Goiás',                 110, 'Funcionários',        'Belo Horizonte','MG','30150-030'),
(@addr33, 'Av. Afonso Pena',           1300,'Centro',              'Belo Horizonte','MG','30130-003'),
(@addr34, 'Av. Fernando Corrêa',       3200,'Coxipó',              'Cuiabá',        'MT', '78080-000'),
(@addr35, 'Rua do Sol Nascente',       15,  'Boa Esperança',       'Campo Grande',  'MS', '79000-000'),
(@addr36, 'Rua do Comércio',           222, 'Centro',              'Florianópolis', 'SC', '88010-000'),
(@addr37, 'Av. Beira Rio',             91,  'Centro',              'Joinville',     'SC', '89201-000'),
(@addr38, 'Rua Barão do Rio Branco',   444, 'Centro',              'Curitiba',      'PR', '80010-000'),
(@addr39, 'Rua das Violetas',          75,  'Água Verde',          'Curitiba',      'PR', '80240-320'),
(@addr40, 'Rua do Forte Orange',          150, 'Recife Antigo',    'Recife',    'PE', '50010-001'),
(@addr41, 'Rua do Arsenal',               22,  'Boa Vista',       'Recife',    'PE', '50020-002'),
(@addr42, 'Travessa do Cabanga',          75,  'Cabanga',         'Recife',    'PE', '50100-003'),
(@addr43, 'Rua da Casa Amarela',          310, 'Casa Amarela',     'Recife',    'PE', '50720-004'),
(@addr44, 'Av. Recife',                   123, 'Santo Amaro',      'Recife',    'PE', '50050-005'),
(@addr45, 'Rua das Graças',               58,  'Graças',           'Recife',    'PE', '52011-006'),
(@addr46, 'Rua da Imbiribeira',           200, 'Imbiribeira',      'Recife',    'PE', '51110-007'),
(@addr47, 'Rua do Espinheiro',            410, 'Espinheiro',       'Recife',    'PE', '52011-008'),
(@addr48, 'Rua de Casa Forte',            345, 'Casa Forte',       'Recife',    'PE', '52011-009'),
(@addr49, 'Rua da Iputinga',              129, 'Iputinga',         'Recife',    'PE', '51210-010'),
(@addr50, 'Rua da Piedade',               201, 'Piedade',          'Recife',    'PE', '52130-011'),
(@addr51, 'Rua do Parnamirim',            88,  'Parnamirim',       'Recife',    'PE', '54330-012'),
(@addr52, 'Rua Presidente Kennedy',       500, 'Santo Amaro',      'Recife',    'PE', '50790-013'),
(@addr53, 'Rua do Espinheiro',            120, 'Espinheiro',       'Recife',    'PE', '52010-014'),
(@addr54, 'Rua do Sol Poente',            26,  'Encruzilhada',     'Recife',    'PE', '51260-015'),
(@addr55, 'Rua dos Andradas',             345, 'Centro',            'Porto Alegre', 'RS', '90020-016'),
(@addr56, 'Av. Julio de Castilhos',       780, 'Centro',            'Porto Alegre', 'RS', '90030-017'),
(@addr57, 'Rua da Praia de Belas',        150, 'Praia de Belas',    'Porto Alegre', 'RS', '90110-018'),
(@addr58, 'Rua da Conceição',             220, 'Partenon',          'Porto Alegre', 'RS', '90610-019'),
(@addr59, 'Rua Sarmento Leite',           410, 'Cidade Baixa',      'Porto Alegre', 'RS', '90020-020'),
(@addr60, 'Rua Riachuelo',                90,  'Centro Histórico',  'Porto Alegre', 'RS', '90010-021'),
(@addr61, 'Rua João Alfredo',             60,  'Praia de Belas',    'Porto Alegre', 'RS', '90110-022'),
(@addr62, 'Rua Dr. Flores',               320, 'Floresta',          'Porto Alegre', 'RS', '90840-023'),
(@addr63, 'Rua Santa Cecília',            275, 'Rio Branco',        'Porto Alegre', 'RS', '90050-024'),
(@addr64, 'Av. Goethe',                   185, 'Três Figueiras',    'Porto Alegre', 'RS', '90690-025'),
(@addr65, 'Rua Mariante',                 110, 'Bom Fim',           'Porto Alegre', 'RS', '90035-026'),
(@addr66, 'Rua São Carlos',               240, 'Santana',           'Porto Alegre', 'RS', '90810-027'),
(@addr67, 'Rua Tupi',                     15,  'Menino Deus',       'Porto Alegre', 'RS', '90040-028'),
(@addr68, 'Rua Coronel Vicente',          99,  'Bom Jesus',         'Porto Alegre', 'RS', '90620-029'),
(@addr69, 'Av. Padre Cacique',            135, 'Cristal',           'Porto Alegre', 'RS', '90430-030'),
(@addr70, 'Av. Paulista',                 1578, 'Bela Vista',        'São Paulo', 'SP', '01310-031'),
(@addr71, 'Rua da Consolação',            210,  'Consolação',        'São Paulo', 'SP', '01302-032'),
(@addr72, 'Rua Augusta',                  250,  'Consolação',        'São Paulo', 'SP', '01305-033'),
(@addr73, 'Rua Vergueiro',                650,  'Liberdade',         'São Paulo', 'SP', '01504-034'),
(@addr74, 'Rua 25 de Março',              400,  'Centro',            'São Paulo', 'SP', '01021-035'),
(@addr75, 'Av. Ipiranga',                 800,  'República',         'São Paulo', 'SP', '01046-036'),
(@addr76, 'Rua da Cantareira',            110,  'Centro',            'São Paulo', 'SP', '01222-037'),
(@addr77, 'Rua Boa Vista',                100,  'Centro',            'São Paulo', 'SP', '01014-038'),
(@addr78, 'Praça da Sé',                  1,    'Sé',                'São Paulo', 'SP', '01001-039'),
(@addr79, 'Rua Direita',                  45,   'Sé',                'São Paulo', 'SP', '01002-040'),
(@addr80, 'Rua Santa Ifigênia',           350,  'Santa Ifigênia',    'São Paulo', 'SP', '01207-041'),
(@addr81, 'Rua 24 de Maio',               200,  'Sé',                'São Paulo', 'SP', '01049-042'),
(@addr82, 'Av. Rio Branco',               500,  'Centro',            'São Paulo', 'SP', '01009-043'),
(@addr83, 'Rua Helvétia',                 120,  'República',         'São Paulo', 'SP', '01225-044'),
(@addr84, 'Rua Álvaro de Carvalho',       300,  'Centro',            'São Paulo', 'SP', '01009-045'),
(@addr85, 'Rua Rio Solimões',             100, 'Centro',            'Manaus', 'AM', '69010-046'),
(@addr86, 'Rua Eduardo Ribeiro',          250, 'Centro',            'Manaus', 'AM', '69010-047'),
(@addr87, 'Rua 10 de Julho',              75,  'Adrianópolis',      'Manaus', 'AM', '69063-048'),
(@addr88, 'Av. Djalma Batista',           1200,'Chapada',           'Manaus', 'AM', '69050-049'),
(@addr89, 'Travessa East-West',           45,  'Centro',            'Manaus', 'AM', '69010-050'),
(@addr90, 'Rua Barão de Mauá',            310, 'Centro',            'Manaus', 'AM', '69010-051'),
(@addr91, 'Rua Joaquim Nabuco',           88,  'Centro',            'Manaus', 'AM', '69010-052'),
(@addr92, 'Rua Benjamin Constant',        150, 'Centro',            'Manaus', 'AM', '69010-053'),
(@addr93, 'Av. Sete de Setembro',         500, 'Adrianópolis',      'Manaus', 'AM', '69050-054'),
(@addr94, 'Rua General Carneiro',         220, 'Centro',            'Manaus', 'AM', '69010-055'),
(@addr95, 'Rua Joaquim Sarmento',         45,  'Centro Histórico',  'Manaus', 'AM', '69010-056'),
(@addr96, 'Rua Monsenhor Coutinho',       120, 'Centro',            'Manaus', 'AM', '69010-057'),
(@addr97, 'Rua Barão do Rio Branco',      390, 'Centro',            'Manaus', 'AM', '69010-058'),
(@addr98, 'Travessa Coronel Brandão',     75,  'Centro Histórico',  'Manaus', 'AM', '69010-059'),
(@addr99, 'Rua Saldanha Marinho',         210, 'Centro',            'Manaus', 'AM', '69010-060'),
(@addr100, 'Esplanada dos Ministérios',   700, 'Zona Cívico-Administrativa', 'Brasília', 'DF', '70100-000');
-- População de QGs OK
INSERT INTO HQ (id_hq, name, security_level, room_count, id_address, id_verissimo) VALUES
(@hq1,'QG Central',      9.0,  8,@addr23,@ver1),
(@hq2,'QG Recife',    8.5,  6,@addr1,@ver2),
(@hq3,'QG Porto Alegre', 8.0,  7,@addr31,@ver3),
(@hq4, 'QG São Paulo', 10.0, 10, @addr17, @ver4),
(@hq5, 'QG Manaus', 8.0, 5, @addr13, @ver5),
(@hq6, 'QG Rio de Janeiro', 4.0, 9, @addr26, @ver6);

-- Relação AGENTS_IN_HQ OK
INSERT INTO AGENTS_IN_HQ (id_hq, id_agent) VALUES
-- QG1 (17 agentes)
(@hq1,@ag1),(@hq1,@ag2),(@hq1,@ag3),(@hq1,@ag4),(@hq1,@ag5),
(@hq1,@ag6),(@hq1,@ag7),(@hq1,@ag8),(@hq1,@ag9),(@hq1,@ag10),
(@hq1,@ag11),(@hq1,@ag12),(@hq1,@ag13),(@hq1,@ag14),(@hq1,@ag15),
(@hq1,@ag16),(@hq1,@ag17),

-- QG2 (17 agentes)
(@hq2,@ag18),(@hq2,@ag19),(@hq2,@ag20),(@hq2,@ag21),(@hq2,@ag22),
(@hq2,@ag23),(@hq2,@ag24),(@hq2,@ag25),(@hq2,@ag26),(@hq2,@ag27),
(@hq2,@ag28),(@hq2,@ag29),(@hq2,@ag30),(@hq2,@ag31),(@hq2,@ag32),
(@hq2,@ag33),(@hq2,@ag34),

-- QG3 (17 agentes)
(@hq3,@ag35),(@hq3,@ag36),(@hq3,@ag37),(@hq3,@ag38),(@hq3,@ag39),
(@hq3,@ag40),(@hq3,@ag41),(@hq3,@ag42),(@hq3,@ag43),(@hq3,@ag44),
(@hq3,@ag45),(@hq3,@ag46),(@hq3,@ag47),(@hq3,@ag48),(@hq3,@ag49),
(@hq3,@ag50),(@hq3,@ag51),

-- QG4 (16 agentes)
(@hq4,@ag52),(@hq4,@ag53),(@hq4,@ag54),(@hq4,@ag55),(@hq4,@ag56),
(@hq4,@ag57),(@hq4,@ag58),(@hq4,@ag59),(@hq4,@ag60),(@hq4,@ag61),
(@hq4,@ag62),(@hq4,@ag63),(@hq4,@ag64),(@hq4,@ag65),(@hq4,@ag66),
(@hq4,@ag67),

-- QG5 (16 agentes)
(@hq5,@ag68),(@hq5,@ag69),(@hq5,@ag70),(@hq5,@ag71),(@hq5,@ag72),
(@hq5,@ag73),(@hq5,@ag74),(@hq5,@ag75),(@hq5,@ag76),(@hq5,@ag77),
(@hq5,@ag78),(@hq5,@ag79),(@hq5,@ag80),(@hq5,@ag81),(@hq5,@ag82),
(@hq5,@ag83),

-- QG6 (16 agentes)
(@hq6,@ag84),(@hq6,@ag85),(@hq6,@ag86),(@hq6,@ag87),(@hq6,@ag88),
(@hq6,@ag89),(@hq6,@ag90),(@hq6,@ag91),(@hq6,@ag92),(@hq6,@ag93),
(@hq6,@ag94),(@hq6,@ag95),(@hq6,@ag96),(@hq6,@ag97),(@hq6,@ag98),
(@hq6,@ag99),(@hq6,@ag100);


-- Elementos (ELEMENTS) OK
INSERT INTO ELEMENTS (id_element, name, description) VALUES
(@elMedo,   'Medo',         'Elemento neutro sem fraquezas ou vantagens'),
(@elMorte,  'Morte',        'Elemento forte contra Sangue'),
(@elSangue, 'Sangue',       'Elemento forte contra Conhecimento'),
(@elConhe,  'Conhecimento','Elemento forte contra Energia'),
(@elEnergia,'Energia',      'Elemento forte contra Morte');

-- Atualização de vantagem entre elementos OK
UPDATE ELEMENTS SET id_advantage = @elSangue WHERE id_element = @elMorte;
UPDATE ELEMENTS SET id_advantage = @elConhe  WHERE id_element = @elSangue;
UPDATE ELEMENTS SET id_advantage = @elEnergia WHERE id_element = @elConhe;
UPDATE ELEMENTS SET id_advantage = @elMorte   WHERE id_element = @elEnergia;

-- Rituais (RITUALS) !
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

-- Missões OK
INSERT INTO MISSION (id_mission, title, status, risks, objective, start_date, end_date, id_address, id_hq) VALUES
-- QG 1
(@miss1,  'Investigação no Cemitério',            'Aberta',    'Alto',   'Investigar aparições',           '2025-04-01 07:00:00', NULL,         @addr1,  @hq1),
(@miss2,  'Combate à Seita Oculta',               'Concluida', 'Médio',  'Desmantelar seita',              '2025-02-01 09:00:00', '2025-03-15', @addr2,  @hq1),
(@miss3, 'Escola em chamas', 'Concluida', 'Alto', 'Identificar se houve presença paranormal', '2025-04-20 09:15:00', '2025-04-27', @addr99, @hq6),
(@miss4, 'Mapeamento do Cerrado',                'Aberta',    'Médio',  'Identificar hotspots energéticos','2025-05-20 09:15:00', NULL,         @addr20, @hq1),
(@miss5, 'Coleta de Amostras',                   'Concluida', 'Baixo',  'Recolher solo e fauna local',    '2025-02-25 06:00:00', '2025-02-27', @addr21, @hq1),
(@miss6, 'Proteção de Monumentos Nacionais',     'Aberta',    'Alto',   'Evitar vandalismo ectoplásmico', '2025-05-01 07:30:00', NULL,         @addr22, @hq1),
(@miss7, 'Ronda na Asa Sul',                     'Concluida', 'Médio',  'Monitorar entradas secundárias', '2025-03-15 14:00:00', '2025-03-16', @addr23, @hq1),
(@miss8, 'Monitoramento de Fazenda',             'Concluida', 'Baixo',  'Registrar atividade animal',     '2025-03-12 05:00:00', '2025-03-13', @addr34, @hq1),
(@miss9, 'Ronda em Vila Rural',                  'Aberta',    'Médio',  'Entrevistar moradores locais',   '2025-04-25 08:00:00', NULL,         @addr35, @hq1),
(@miss10, 'Ronda nos Bairros Centrais',        'Aberta',    'Médio',  'Observar padrões místicos',         '2025-05-21 20:00:00', NULL,         @addr40, @hq1),
(@miss11, 'Verificação de Linhas de Ley',      'Aberta',    'Baixo',  'Confirmar convergência energética', '2025-05-22 08:00:00', NULL,         @addr41, @hq1),
(@miss12, 'Análise de Estrutura Abandonada',   'Concluida', 'Médio',  'Inspecionar anomalias físicas',     '2025-04-10 14:00:00', '2025-04-11', @addr42, @hq1),
(@miss13, 'Proteção de Escola Municipal',      'Aberta',    'Alto',   'Evitar surtos espirituais',         '2025-05-25 07:00:00', NULL,         @addr43, @hq1),
(@miss14, 'Exploração de Vielas Antigas',      'Aberta',    'Médio',  'Registrar ocorrências místicas',    '2025-05-26 21:30:00', NULL,         @addr44, @hq1),
(@miss15, 'Ritual de Silenciamento',           'Concluida', 'Alto',   'Conter entidade sonora',            '2025-04-02 01:00:00', '2025-04-03', @addr45, @hq1),
(@miss16, 'Proteção em Feira de Rua',          'Aberta',    'Médio',  'Evitar manipulação psíquica',       '2025-05-28 10:00:00', NULL,         @addr46, @hq1),
(@miss17, 'Mapeamento de Zonas Residenciais',  'Aberta',    'Baixo',  'Coletar dados de rotina',           '2025-05-29 08:00:00', NULL,         @addr47, @hq1),
(@miss18, 'Investida em Galpão Desativado',    'Concluida', 'Médio',  'Verificar movimentações ocultas',   '2025-04-14 15:00:00', '2025-04-15', @addr48, @hq1),
(@miss19, 'Ronda de Final de Semana',          'Aberta',    'Médio',  'Patrulhar centros culturais',       '2025-06-01 19:00:00', NULL,         @addr49, @hq1),
(@miss20, 'Calamidade', 'Aberta', 'Crítico', 'Anomalia de Classe Desconhecida detectada. Convergência de forças extraplanares em escala nunca registrada. Mobilização total autorizada.', '2021-09-04 00:00:00', NULL, @addr100, @hq1),

-- QG 2

(@miss21,  'Investigação na Praia',                'Aberta',    'Médio',  'Coletar testemunhos',            '2025-05-10 06:00:00', NULL,         @addr4,  @hq2),
(@miss22,  'Ritual de Contenção',                  'Aberta',    'Alto',   'Conter manifestação',            '2025-05-12 20:00:00', NULL,         @addr5,  @hq2),
(@miss23,  'Reconhecimento Urbano',                'Concluida', 'Baixo',  'Mapear pontos quentes',          '2025-04-20 10:00:00', '2025-04-21', @addr6,  @hq2),
(@miss24, 'Investigação no Forte Histórico',      'Aberta',    'Médio',  'Coletar artefatos',              '2025-02-15 08:30:00', NULL,         @addr10, @hq2),
(@miss25, 'Patrulha Preventiva',                  'Concluida', 'Baixo',  'Vistorias de rotina',            '2025-03-01 06:00:00', '2025-03-05', @addr11, @hq2),
(@miss26, 'Rastreamento de Fenômenos',            'Aberta',    'Alto',   'Registrar ocorrências estranhas','2025-04-10 21:00:00', NULL,         @addr12, @hq2),
(@miss27, 'Ritual de Proteção Costeira',          'Aberta',    'Médio',  'Erguer barreiras energéticas',   '2025-04-05 05:45:00', NULL,         @addr18, @hq2),
(@miss28, 'Patrulha em Armazém Abandonado',       'Aberta',    'Alto',   'Documentar estranhezas',         '2025-04-12 13:00:00', NULL,         @addr24, @hq2),
(@miss29, 'Inspeção de Mirante',               'Aberta',    'Médio',  'Evitar invasões astrais',           '2025-05-21 06:00:00', NULL,         @addr50, @hq2),
(@miss30, 'Vigilância de Zona Costeira',       'Aberta',    'Alto',   'Detectar portais dimensionais',     '2025-05-22 04:00:00', NULL,         @addr51, @hq2),
(@miss31, 'Análise de Fragmento Rúnico',       'Concluida', 'Médio',  'Investigar inscrições antigas',     '2025-04-10 16:00:00', '2025-04-11', @addr52, @hq2),
(@miss32, 'Inspeção de Navio Ancorado',        'Concluida',    'Alto',   'Averiguar distorções temporais',    '2025-05-24 02:30:00', NULL,         @addr53, @hq2),
(@miss33, 'Reconhecimento em Zona Rural',      'Concluida',    'Médio',  'Catalogar fenômenos discretos',     '2025-05-27 08:00:00', NULL,         @addr54, @hq2),
(@miss34, 'Patrulha Pós-Ritual',               'Concluida', 'Médio',  'Garantir dissipação de energia',     '2025-04-01 12:00:00', '2025-04-02', @addr55, @hq2),
(@miss35, 'Monitoramento de Assentamentos',    'Aberta',    'Baixo',  'Estabelecer perímetro seguro',      '2025-05-30 07:00:00', NULL,         @addr56, @hq2),
(@miss36, 'Ritual de Proteção de Riacho',      'Aberta',    'Médio',  'Evitar contaminação espiritual',    '2025-06-02 06:30:00', NULL,         @addr57, @hq2),
(@miss37, 'Coleta em Solo Contaminado',        'Concluida', 'Baixo',  'Extração controlada',               '2025-04-12 10:00:00', '2025-04-13', @addr58, @hq2),
(@miss38, 'Supervisão de Intervenção Mística', 'Aberta',    'Alto',   'Acompanhar conjuradores',           '2025-06-03 08:00:00', NULL,         @addr59, @hq2),
(@miss39,  'Investigação em Fábrica Abandonada',   'Aberta',    'Alto',   'Examinar fenômenos',             '2025-05-08 14:00:00', NULL,         @addr7,  @hq2),
(@miss40,  'Proteção de Local Histórico',          'Aberta',    'Médio',  'Garantir segurança',             '2025-05-15 09:00:00', NULL,         @addr8,  @hq2),

-- QG 3
(@miss41,  'Análise de Artefato',                  'Concluida', 'Baixo',  'Estudar relíquia',               '2025-03-01 08:00:00', '2025-03-03', @addr9,  @hq3),
(@miss42, 'Vigia do Centro Histórico',            'Aberta',    'Médio',  'Patrulha noturna',               '2025-05-14 22:00:00', NULL,         @addr29, @hq3),
(@miss43, 'Inspeção de Túneis Urbanos',           'Concluida', 'Alto',   'Avaliar riscos de colapso',      '2025-03-22 11:30:00', '2025-03-23', @addr30, @hq3),
(@miss44, 'Operação Ponto de Ônibus',             'Aberta',    'Baixo',  'Monitorar aparições rápidas',    '2025-04-28 17:00:00', NULL,         @addr31, @hq3),
(@miss45, 'Proteção de Porto Pesqueiro',          'Aberta',    'Médio',  'Patrulhar docas',                '2025-05-03 06:30:00', NULL,         @addr36, @hq3),
(@miss46, 'Ronda em Centro Comercial',         'Aberta',    'Médio',  'Observar distúrbios sutis',         '2025-05-21 14:00:00', NULL,         @addr60, @hq3),
(@miss47, 'Investigação de Loja Oculta',       'Aberta',    'Alto',   'Examinar fundo mágico',             '2025-05-22 10:00:00', NULL,         @addr61, @hq3),
(@miss48, 'Ritual de Harmonização Urbana',     'Concluida', 'Médio',  'Equalizar energias da região',      '2025-04-10 18:00:00', '2025-04-11', @addr62, @hq3),
(@miss49, 'Exploração de Estrutura Antiga',    'Concluida',    'Médio',  'Mapear traços arcanos',             '2025-05-24 16:00:00', NULL,         @addr63, @hq3),
(@miss50, 'Proteção em Escola Técnica',        'Concluida',    'Alto',   'Neutralizar influência nefasta',    '2025-05-26 08:00:00', NULL,         @addr64, @hq3),
(@miss51, 'Investigação no Teatro Municipal',  'Concluida', 'Médio',  'Registrar presenças não-humanas',   '2025-04-01 20:00:00', '2025-04-02', @addr65, @hq3),
(@miss52, 'Ronda Especial em Feira Noturna',   'Aberta',    'Médio',  'Prevenir ocorrências espontâneas',  '2025-05-28 19:00:00', NULL,         @addr66, @hq3),
(@miss53, 'Inspeção de Biblioteca Arcana',     'Aberta',    'Baixo',  'Verificar tomos selados',           '2025-05-29 15:00:00', NULL,         @addr67, @hq3),
(@miss54, 'Verificação de Metrô Abandonado',   'Concluida', 'Alto',   'Identificar criaturas subterrâneas','2025-04-13 22:00:00', '2025-04-14', @addr68, @hq3),
(@miss55, 'Ronda em Zona Industrial',          'Aberta',    'Médio',  'Examinar dispositivos',             '2025-06-01 17:00:00', NULL,         @addr69, @hq3),
(@miss56, 'Proteção de Arranha-céu',              'Aberta',    'Alto',   'Evitar invasões espectrais',     '2025-05-12 23:00:00', NULL,         @addr15, @hq3),
(@miss57, 'Ronda Cultural Urbana',                'Concluida', 'Baixo',  'Inspeção em teatros antigos',    '2025-02-28 18:00:00', '2025-02-28', @addr16, @hq3),
(@miss58, 'Investigação em Túnel Subterrâneo',    'Aberta',    'Médio',  'Averiguar ruídos estranhos',     '2025-05-18 22:30:00', NULL,         @addr17, @hq3),
(@miss59, 'Vigilância de Torre Corporativa',      'Concluida', 'Baixo',  'Checar alarmes místicos',        '2025-03-10 20:00:00', '2025-03-11', @addr19, @hq3),
(@miss60, 'Patrulha em Favela Histórica',         'Concluida', 'Médio',  'Coletar relatos locais',         '2025-02-18 20:00:00', '2025-02-19', @addr32, @hq3),

-- QG 4
(@miss61, 'Ritual de Purificação',                'Aberta',    'Alto',   'Realizar cerimônia noturna',     '2025-05-16 21:00:00', NULL,         @addr33, @hq4),
(@miss62, 'Inspeção de Indústria Química',        'Concluida', 'Alto',   'Verificar contaminações',        '2025-02-22 14:00:00', '2025-02-23', @addr37, @hq4),
(@miss63, 'Ronda de Rodovia',                     'Aberta',    'Médio',  'Monitorar acidentes',            '2025-04-30 15:00:00', NULL,         @addr38, @hq4),
(@miss64, 'Coleta de Testemunhos',                'Concluida', 'Baixo',  'Registrar depoimentos',          '2025-03-28 10:00:00', '2025-03-29', @addr39, @hq4),
(@miss65, 'Vigilância de Subestação Elétrica', 'Aberta',    'Médio',  'Detectar instabilidade dimensional','2025-05-21 07:00:00', NULL,         @addr70, @hq4),
(@miss66, 'Inspeção de Reservatório de Água',     'Concluida', 'Médio',  'Identificar substâncias encantadas',    '2025-04-13 05:00:00', '2025-04-14', @addr98, @hq6),
(@miss67, 'Ritual em Museu Histórico',         'Aberta',    'Alto',   'Conservar relíquias protegidas',    '2025-05-22 11:00:00', NULL,         @addr71, @hq4),
(@miss68, 'Investigação em Escadaria Secreta', 'Concluida', 'Médio',  'Desvendar padrões ocultos',         '2025-04-15 09:00:00', '2025-04-16', @addr72, @hq4),
(@miss69, 'Proteção de Prédio Governamental',  'Concluida',    'Alto',   'Evitar sabotagens espectrais',      '2025-05-24 08:30:00', '2025-04-14',         @addr73, @hq4),
(@miss70, 'Verificação de Espaço Cultural',    'Concluida',    'Médio',  'Identificar distorções no ar',      '2025-05-26 10:00:00', '2025-04-14',         @addr74, @hq4),
(@miss71, 'Supervisão de agentes Recrutas','Concluida', 'Baixo',  'Avaliar habilidades de combate',     '2025-04-03 14:00:00', '2025-04-04', @addr75, @hq4),
(@miss72, 'Patrulha em Terminal Rodoviário',   'Concluida',    'Médio',  'Prevenir influências hostis',       '2025-05-30 12:00:00', '2025-04-14',         @addr76, @hq4),
(@miss73, 'Observação de Ponto Turístico',     'Concluida',    'Baixo',  'Registrar fluxos energéticos',      '2025-06-01 09:30:00', '2025-04-14',         @addr77, @hq4),
(@miss74, 'Análise de Documento Amaldiçoado',  'Concluida', 'Médio',  'Neutralizar efeitos residuais',     '2025-04-17 10:00:00', '2025-04-18', @addr78, @hq4),
(@miss75, 'Ronda Cultural na Orla',            'Aberta',    'Médio',  'Examinar arte urbana ritualística', '2025-06-02 17:30:00', NULL,         @addr79, @hq4),
(@miss76, 'Monitoramento da Floresta',            'Aberta',    'Médio',  'Detectar sinais místicos',       '2025-05-02 07:00:00', NULL,         @addr13, @hq4),
(@miss77, 'Análise de Relíquias',                 'Concluida', 'Alto',   'Catalogar objetos sagrados',     '2025-03-20 09:00:00', '2025-04-01', @addr14, @hq4),
(@miss78, 'Expedição Fluvial',                    'Aberta',    'Médio',  'Explorar igarapés remotos',      '2025-04-18 06:00:00', NULL,         @addr27, @hq4),
(@miss79, 'Reconhecimento de Margem',             'Concluida', 'Baixo',  'Mapear cursos d’água',           '2025-03-05 07:00:00', '2025-03-07', @addr28, @hq4),
(@miss80, 'Expedição à Caverna Cristalina',     'Aberta',    'Alto',   'Explorar cavernas com energia',     '2025-05-21 08:00:00', NULL,         @addr80, @hq4),

-- QG 5
(@miss81, 'Monitoramento em Tribo Isolada',     'Aberta',    'Médio',  'Verificar contatos místicos',       '2025-05-22 06:00:00', NULL,         @addr81, @hq5),
(@miss82, 'Ritual de Isolamento Florestal',     'Concluida', 'Alto',   'Selar zona contaminada',            '2025-04-18 21:00:00', '2025-04-19', @addr82, @hq5),
(@miss83, 'Coleta em Zona Enlameada',           'Aberta',    'Baixo',  'Extrair lama simbiótica',           '2025-05-24 10:00:00', NULL,         @addr83, @hq5),
(@miss84, 'Proteção de Ponte Suspensa',         'Aberta',    'Médio',  'Evitar manifestação aquática',      '2025-05-25 07:30:00', NULL,         @addr84, @hq5),
(@miss85, 'Reconhecimento em Região Alagada',   'Concluida', 'Médio',  'Avaliar presença de portais',       '2025-04-05 15:00:00', '2025-04-06', @addr85, @hq5),
(@miss86, 'Vigilância em Comunidade Ribeirinha','Aberta',    'Médio',  'Monitorar ondas energéticas',       '2025-05-28 08:00:00', NULL,         @addr86, @hq5),
(@miss87, 'Supervisão de Pesquisadores',        'Aberta',    'Baixo',  'Garantir segurança espiritual',     '2025-05-29 07:00:00', NULL,         @addr87, @hq5),
(@miss88, 'Investigação em Ilha Fluvial',       'Concluida', 'Alto',   'Neutralizar presença oculta',       '2025-04-07 13:00:00', '2025-04-08', @addr88, @hq5),
(@miss89, 'Ritual de Reequilíbrio da Fauna',    'Aberta',    'Médio',  'Harmonizar flora e fauna afetadas', '2025-06-02 05:00:00', NULL,         @addr89, @hq5),
(@miss90, 'Inspeção em Palacete Histórico',       'Concluida', 'Médio',  'Revisar integridade estrutural', '2025-02-20 10:00:00', '2025-02-21', @addr25, @hq5),
(@miss91, 'Monitoramento de Comunidade',          'Concluida',    'Baixo',  'Entrevistar moradores',        '2025-05-08 09:00:00', '2025-04-14',         @addr26, @hq5),
(@miss92, 'Inspeção no Canal de Esgoto Antigo',   'Concluida',    'Médio',  'Rastreamento de corrupção mística',     '2025-05-21 23:00:00', '2025-04-14',         @addr90, @hq5),
(@miss93, 'Ritual de Contenção no Subsolo',       'Concluida',    'Alto',   'Selar passagem dimensional instável',   '2025-05-22 01:00:00', '2025-04-14',         @addr91, @hq5),
(@miss94, 'Exploração de Tunelamento Urbano',     'Concluida', 'Médio',  'Analisar runas esquecidas',             '2025-04-08 04:00:00', '2025-04-09', @addr92, @hq5),
(@miss95, 'Vigilância em Centro de Reciclagem',   'Aberta',    'Baixo',  'Prevenir contaminação espiritual',      '2025-05-24 05:30:00', NULL,         @addr93, @hq5),
(@miss96, 'Monitoramento de Armazém Portuário',   'Aberta',    'Médio',  'Verificar fluxos arcanos ilegais',      '2025-05-26 02:00:00', NULL,         @addr94, @hq5),
(@miss97, 'Análise de Entulho Anômalo',           'Concluida', 'Médio',  'Catalogar resíduos mágicos',            '2025-04-01 03:00:00', '2025-04-02', @addr95, @hq5),
(@miss98, 'Ronda Secreta em Distrito Industrial', 'Aberta',    'Alto',   'Identificar entidades encobertas',      '2025-05-30 22:00:00', NULL,         @addr96, @hq5),
(@miss99, 'Supervisão de Interdição Ritualística','Concluida',    'Médio',  'Manter área protegida',                 '2025-06-02 04:30:00', '2025-04-14',         @addr97, @hq5),
(@miss100, 'Verificação de Correntes Etéreas',     'Aberta',    'Médio',  'Examinar presença de vórtices sutis',   '2025-06-03 03:00:00', NULL,         @addr99, @hq5),

-- QG 6
(@miss101, 'Investigação Noturna', 'Aberta', 'Alto', 'Investigar aparições em armazém abandonado', '2025-04-01', NULL,              @addr5, @hq6),
(@miss102, 'Vigilância no Subúrbio', 'Concluída', 'Médio', 'Monitorar padrões de energia incomuns', '2025-03-15', '2025-03-20',     @addr8, @hq6),
(@miss103, 'Recuperação de Artefato', 'Arquivada', 'Alto', 'Recuperar objeto de origem paranormal', '2024-11-10', '2024-11-15',     @addr12, @hq6),
(@miss104, 'Contato Inicial', 'Aberta', 'Baixo', 'Estabelecer comunicação com entidade pacífica', '2025-05-10', NULL,               @addr9, @hq6),
(@miss105, 'Contenção Emergencial', 'Concluída', 'Alto', 'Conter entidade manifestada em hospital', '2025-02-01', '2025-02-03',     @addr4, @hq6),
(@miss106, 'Análise Dimensional', 'Arquivada', 'Médio', 'Avaliar fenda dimensional ativa', '2024-10-12', '2024-10-20',              @addr7, @hq6),
(@miss107, 'Patrulha Florestal', 'Aberta', 'Baixo', 'Investigar desaparecimentos recorrentes', '2025-05-01', NULL,                  @addr11, @hq6),
(@miss108, 'Neutralização de Ameaça', 'Concluída', 'Alto', 'Eliminar entidade hostil em zona rural', '2025-01-25', '2025-01-30',    @addr6, @hq6),
(@miss109, 'Encerramento de Ritual', 'Arquivada', 'Médio', 'Finalizar ritual incompleto com segurança', '2024-09-05', '2024-09-10', @addr14, @hq6),
(@miss110, 'Monitoramento de Nexus', 'Concluida', 'Médio', 'Observar ponto de energia instável', '2025-04-15', '2025-04-14',                   @addr10, @hq6),
(@miss111, 'Missão de Resgate', 'Concluída', 'Alto', 'Resgatar agentes desaparecidos em missão anterior', '2025-03-05','2025-03-07',@addr3, @hq6),
(@miss112, 'Mapeamento Subterrâneo', 'Arquivada', 'Baixo', 'Explorar túneis descobertos por radar', '2024-08-01', '2024-08-12',     @addr13, @hq6),
(@miss113, 'Evacuação Civil', 'Concluida', 'Alto', 'Retirar civis de área com atividade paranormal', '2025-05-12', '2025-04-14',               @addr15, @hq6),
(@miss114, 'Investigação Científica', 'Concluída', 'Médio', 'Coletar dados para estudo acadêmico autorizado', '2025-02-10','2025-02-20',@addr16, @hq6),
(@miss115, 'Detecção de Entidade', 'Arquivada', 'Baixo', 'Confirmar presença de entidade menor', '2024-12-01', '2024-12-03',        @addr17, @hq6),
(@miss116, 'Proteção de Artefato', 'Concluida', 'Médio', 'Evitar roubo de artefato lacrado', '2025-05-14', '2025-04-14',                       @addr18, @hq6),
(@miss117, 'Análise Pós-Missão', 'Concluída', 'Baixo', 'Estudo de resíduos energéticos deixados', '2025-01-18','2025-01-20',        @addr19, @hq6),
(@miss118, 'Isolamento de Área', 'Arquivada', 'Alto', 'Isolar vila com presença paranatural intensa', '2024-07-20', '2024-07-30',   @addr20, @hq6),
(@miss119, 'Recrutamento Especial', 'Aberta', 'Baixo', 'Avaliar civil com potencial psíquico', '2025-05-16', NULL,                  @addr21, @hq6),
(@miss120, 'Encerramento Dimensional', 'Concluída', 'Alto', 'Fechar portal aberto por acidente', '2025-03-25', '2025-03-28',        @addr22, @hq6);



-- Equipes OK
INSERT INTO TEAM (id_team, name, specialization) VALUES
-- QG Central (@hq1)
(@team1,  'Vigilantes da Aurora',    'Investigação'),
(@team2,  'Legião Sombria',          'Combate'),
(@team3,  'Guardiões do Crepúsculo', 'Suporte'),
(@team4,  'Olhos da Realidade',      'Investigação'),


-- QG recife (@hq2)
(@team5,  'Maré Oculta',             'Investigação'),
(@team6,  'Titãs de Rocha',          'Combate'),
(@team7,  'Sentinelas da Bruma',     'Suporte'),
(@team8,  'Oráculo do Horizonte',    'Investigação'),
(@team9, 'Sentinelas do Eclipse',     'Suporte'),
(@team10, 'Marujos do Abismo',         'Investigação'),

-- QG Porto Alegre (@hq3)
(@team11,  'Andarilhos da Névoa',     'Investigação'),
(@team12, 'Fúria do Guaíba',         'Combate'),
(@team13, 'Protetores da Pedra',     'Suporte'),
(@team14, 'Tecelões de Sombras',     'Investigação'),
(@team15, 'Guardas Rubros',            'Combate'),
(@team16, 'Sussurros da Serra',        'Suporte'),

-- QG São Paulo 4
(@team17, 'Escudos do Cerrado',        'Combate'),
(@team18, 'Estudiosos do Além',        'Investigação'),
(@team19, 'Falcões do Horizonte',      'Investigação'),
(@team20, 'Escuridão Vigilante',       'Combate'),
-- QG Manaus 5
(@team21, 'Anjos da Noite',            'Suporte'),
(@team22, 'Rastros da Verdade',        'Investigação'),
(@team23, 'Guardas da Ruptura',        'Suporte'),
(@team24, 'Olhos da Vigília',          'Investigação'),
-- QG Rio de Janeiro 6
(@team25, 'Guardas do Véu',             'Suporte'),
(@team26, 'Lâminas do Silêncio',       'Combate'),
(@team27, 'Tempestade Interna',        'Combate'),
(@team28, 'Vultos do Infinito',        'Investigação');

-- Agentes nas equipes
INSERT INTO AGENTS_IN_TEAM (id_team, id_agent, start_date, end_date) VALUES
-- QG Central (@hq1) team 1 - team 4
(@team1,@ag1, '2020-10-31', NULL),
(@team1,@ag2, '2020-10-31', NULL),
(@team1,@ag3, '2020-10-31', NULL),
(@team1,@ag4, '2020-10-31', NULL),
(@team2,@ag5, '2020-10-31', NULL),
(@team2,@ag6, '2020-10-31', NULL),
(@team2,@ag7, '2020-10-31', NULL),
(@team2,@ag8, '2020-10-31', '2024-11-11'),
(@team3,@ag9, '2020-10-31', NULL),
(@team3,@ag10, '2020-10-31', NULL),
(@team3,@ag11, '2020-10-31', NULL),
(@team4,@ag12, '2020-10-31', NULL),
(@team4,@ag13, '2020-10-31', NULL),
(@team4,@ag14, '2020-10-31', NULL),
(@team4,@ag15, '2020-10-31', NULL),


-- QG Recife (@hq2) team 5 - team 10
(@team5,@ag18, '2020-10-31', NULL),
(@team5,@ag19, '2020-10-31', NULL),
(@team5,@ag20, '2020-10-31', NULL),
(@team5,@ag21, '2020-10-31', NULL),
(@team6,@ag22, '2020-10-31', NULL),
(@team6,@ag23, '2020-10-31', NULL),
(@team6,@ag24, '2020-10-31', '2023-10-21'),
(@team7,@ag25, '2020-10-31', NULL),
(@team7,@ag26, '2020-10-31', NULL),
(@team7,@ag27, '2020-10-31', NULL),
(@team8,@ag28, '2020-10-31', NULL),
(@team8,@ag29, '2020-10-31', NULL),
(@team8,@ag30, '2020-10-31', NULL),
(@team9,@ag31, '2020-10-31', NULL),
(@team9,@ag32, '2020-10-31', NULL),
(@team10,@ag33, '2020-10-31', NULL),
(@team10,@ag34, '2020-10-31', NULL),



-- QG Porto Alegre (@hq3) team 11 - team 16
(@team11,@ag35, '2020-10-31', NULL),
(@team11,@ag36, '2020-10-31', NULL),
(@team11,@ag37, '2020-10-31', NULL),
(@team12,@ag38, '2020-10-31', NULL),
(@team12,@ag39, '2020-10-31', NULL),
(@team12,@ag40, '2020-10-31', NULL),
(@team13,@ag41, '2020-10-31', NULL),
(@team13,@ag42, '2020-10-31', NULL),
(@team13,@ag43, '2020-10-31', '2025-2-18'),
(@team14,@ag44, '2020-10-31', NULL),
(@team14,@ag45, '2020-10-31', NULL),
(@team14,@ag46, '2020-10-31', NULL),
(@team15,@ag47, '2020-10-31', NULL),
(@team15,@ag48, '2020-10-31', NULL),
(@team15,@ag49, '2020-10-31', NULL),
(@team16,@ag50, '2020-10-31', NULL),
(@team16,@ag51, '2020-10-31', NULL),


-- QG São Paulo (@hq4) team 17 - team 20
(@team17,@ag52, '2020-10-31', NULL),
(@team17,@ag53, '2020-10-31', NULL),
(@team17,@ag54, '2020-10-31', NULL),
(@team17,@ag55, '2020-10-31', '2024-10-31'),
(@team18,@ag56, '2020-10-31', NULL),
(@team18,@ag57, '2020-10-31', NULL),
(@team18,@ag58, '2020-10-31', NULL),
(@team18,@ag59, '2020-10-31', NULL),
(@team19,@ag60, '2020-10-31', NULL),
(@team19,@ag61, '2020-10-31', NULL),
(@team19,@ag62, '2020-10-31', NULL),
(@team19,@ag63, '2020-10-31', NULL),
(@team20,@ag64, '2020-10-31', NULL),
(@team20,@ag65, '2020-10-31', NULL),
(@team20,@ag66, '2020-10-31', NULL),
(@team20,@ag67, '2020-10-31', NULL),


-- QG Manaus (@hq5) team 21 - team 24
(@team21,@ag68, '2020-10-31', NULL),
(@team21,@ag69, '2020-10-31', NULL),
(@team21,@ag70, '2020-10-31', NULL),
(@team21,@ag71, '2020-10-31', NULL),
(@team22,@ag72, '2020-10-31', NULL),
(@team22,@ag73, '2020-10-31', '2025-1-30'),
(@team22,@ag74, '2020-10-31', NULL),
(@team22,@ag75, '2020-10-31', NULL),
(@team23,@ag76, '2020-10-31', NULL),
(@team23,@ag77, '2020-10-31', NULL),
(@team23,@ag78, '2020-10-31', NULL),
(@team23,@ag79, '2020-10-31', NULL),
(@team24,@ag80, '2020-10-31', NULL),
(@team24,@ag81, '2020-10-31', NULL),
(@team24,@ag82, '2020-10-31', NULL),
(@team24,@ag83, '2020-10-31', NULL),

-- QG Rio de Janeiro (@hq6) team 25 - team 28
(@team25,@ag84, '2020-10-31', NULL),
(@team25,@ag85, '2020-10-31', NULL),
(@team25,@ag86, '2020-10-31', NULL),
(@team25,@ag87, '2020-10-31', NULL),
(@team26,@ag88, '2020-10-31', NULL),
(@team26,@ag89, '2020-10-31', NULL),
(@team26,@ag90, '2020-10-31', NULL),
(@team26,@ag91, '2020-10-31', NULL),
(@team27,@ag92, '2020-10-31', NULL),
(@team27,@ag93, '2020-10-31', NULL),
(@team27,@ag94, '2020-10-31', NULL),
(@team27,@ag95, '2020-10-31', NULL),
(@team28,@ag96, '2020-10-31', '2021-10-31'),
(@team28,@ag97, '2020-10-31', NULL),
(@team28,@ag98, '2020-10-31', NULL),
(@team28,@ag99, '2020-10-31', NULL),
(@team28,@ag100, '2020-10-31', NULL);


-- Alocação de equipes em missões
INSERT INTO MISSION_ASSIGNMENT (id_team, id_mission, allocation_date, deallocation_date) VALUES
-- QG 1
(@team1, @miss1,  '2022-10-31', NULL),
(@team1, @miss2,  '2022-10-31', NULL),
(@team1, @miss3,  '2022-10-31', NULL),
(@team1, @miss4,  '2022-10-31', NULL),
(@team1, @miss5,  '2022-10-31', NULL),
(@team2, @miss6,  '2022-10-31', NULL),
(@team2, @miss7,  '2022-10-31', NULL),
(@team2, @miss8,  '2022-10-31', NULL),
(@team2, @miss9,  '2022-10-31', NULL),
(@team2, @miss10, '2022-10-31', NULL),
(@team3, @miss11, '2022-10-31', NULL),
(@team3, @miss12, '2022-10-31', NULL),
(@team3, @miss13, '2022-10-31', NULL),
(@team3, @miss14, '2022-10-31', NULL),
(@team3, @miss15, '2022-10-31', NULL),
(@team4, @miss16, '2022-10-31', NULL),
(@team4, @miss17, '2022-10-31', NULL),
(@team4, @miss18, '2022-10-31', NULL),
(@team4, @miss19, '2022-10-31', NULL),
(@team4, @miss20, '2022-10-31', NULL),
-- QG 2
(@team5, @miss21, '2022-10-31', NULL),
(@team5, @miss22, '2022-10-31', NULL),
(@team5, @miss23, '2022-10-31', NULL),
(@team5, @miss24, '2022-10-31', NULL),
(@team5, @miss25, '2022-10-31', NULL),
(@team6, @miss26, '2022-10-31', NULL),
(@team6, @miss27, '2022-10-31', NULL),
(@team6, @miss28, '2022-10-31', NULL),
(@team6, @miss29, '2022-10-31', NULL),
(@team7, @miss30, '2022-10-31', NULL),
(@team7, @miss31, '2022-10-31', NULL),
(@team7, @miss32, '2022-10-31', NULL),
(@team7, @miss33, '2022-10-31', NULL),
(@team8, @miss34, '2022-10-31', NULL),
(@team8, @miss35, '2022-10-31', NULL),
(@team8, @miss36, '2022-10-31', NULL),
(@team9, @miss37, '2022-10-31', NULL),
(@team9, @miss38, '2022-10-31', NULL),
(@team10, @miss39, '2022-10-31', NULL),
(@team10, @miss40, '2022-10-31', NULL),

-- QG 3
(@team11, @miss41, '2022-10-31', NULL),
(@team11, @miss42, '2022-10-31', NULL),
(@team11, @miss43, '2022-10-31', NULL),
(@team11, @miss44, '2022-10-31', NULL),
(@team12, @miss45, '2022-10-31', NULL),
(@team12, @miss46, '2022-10-31', NULL),
(@team12, @miss47, '2022-10-31', NULL),
(@team12, @miss48, '2022-10-31', NULL),
(@team13, @miss49, '2022-10-31', NULL),
(@team13, @miss50, '2022-10-31', NULL),
(@team13, @miss51, '2022-10-31', NULL),
(@team13, @miss52, '2022-10-31', NULL),
(@team14, @miss53, '2022-10-31', NULL),
(@team14, @miss54, '2022-10-31', NULL),
(@team14, @miss55, '2022-10-31', NULL),
(@team14, @miss56, '2022-10-31', NULL),
(@team15, @miss57, '2022-10-31', NULL),
(@team15, @miss58, '2022-10-31', NULL),
(@team16, @miss59, '2022-10-31', NULL),
(@team16, @miss60, '2022-10-31', NULL),
-- QG 4
(@team17, @miss61, '2022-10-31', NULL),
(@team17, @miss62, '2022-10-31', NULL),
(@team17, @miss63, '2022-10-31', NULL),
(@team17, @miss64, '2022-10-31', NULL),
(@team18, @miss65, '2022-10-31', NULL),
(@team18, @miss66, '2022-10-31', NULL),
(@team18, @miss67, '2022-10-31', NULL),
(@team18, @miss68, '2022-10-31', NULL),
(@team19, @miss69, '2022-10-31', NULL),
(@team19, @miss70, '2022-10-31', NULL),
(@team19, @miss71, '2022-10-31', NULL),
(@team19, @miss72, '2022-10-31', NULL),
(@team19, @miss73, '2022-10-31', NULL),
(@team19, @miss74, '2022-10-31', NULL),
(@team19, @miss75, '2022-10-31', NULL),
(@team20, @miss76, '2022-10-31', NULL),
(@team20, @miss77, '2022-10-31', NULL),
(@team20, @miss78, '2022-10-31', NULL),
(@team20, @miss79, '2022-10-31', NULL),
(@team20, @miss80, '2022-10-31', NULL),
-- QG 5
(@team21, @miss81, '2022-10-31', NULL),
(@team21, @miss82, '2022-10-31', NULL),
(@team21, @miss83, '2022-10-31', NULL),
(@team21, @miss84, '2022-10-31', NULL),
(@team21, @miss85, '2022-10-31', NULL),
(@team21, @miss86, '2022-10-31', NULL),
(@team21, @miss87, '2022-10-31', NULL),
(@team21, @miss88, '2022-10-31', NULL),
(@team22, @miss89, '2022-10-31', NULL),
(@team22, @miss90, '2022-10-31', NULL),
(@team22, @miss91, '2022-10-31', NULL),
(@team22, @miss92, '2022-10-31', NULL),
(@team22, @miss93, '2022-10-31', NULL),
(@team22, @miss94, '2022-10-31', NULL),
(@team22, @miss95, '2022-10-31', NULL),
(@team23, @miss96, '2022-10-31', NULL),
(@team23, @miss97, '2022-10-31', NULL),
(@team24, @miss98, '2022-10-31', NULL),
(@team24, @miss99, '2022-10-31', NULL),
(@team24, @miss100, '2022-10-31', NULL),
-- QG 6
(@team25, @miss101, '2022-10-31', NULL),
(@team25, @miss102, '2022-10-31', NULL),
(@team25, @miss103, '2022-10-31', NULL),
(@team25, @miss104, '2022-10-31', NULL),
(@team26, @miss105, '2022-10-31', NULL),
(@team26, @miss106, '2022-10-31', NULL),
(@team26, @miss107, '2022-10-31', NULL),
(@team26, @miss108, '2022-10-31', NULL),
(@team26, @miss109, '2022-10-31', NULL),
(@team27, @miss110, '2022-10-31', NULL),
(@team27, @miss111, '2022-10-31', NULL),
(@team27, @miss112, '2022-10-31', NULL),
(@team27, @miss113, '2022-10-31', NULL),
(@team27, @miss114, '2022-10-31', NULL),
(@team27, @miss115, '2022-10-31', NULL),
(@team27, @miss116, '2022-10-31', NULL),
(@team28, @miss117, '2022-10-31', NULL),
(@team28, @miss118, '2022-10-31', NULL),
(@team28, @miss119, '2022-10-31', NULL),
(@team28, @miss120, '2022-10-31', NULL);

-- Evidências !
INSERT INTO EVIDENCE (id_evidence, origin, description, stability_level, id_mission) VALUES
(@evid1, 'Objeto ritualístico',          'Livro antigo com símbolos',                'Perigoso',  @miss1),
(@evid2, 'Manuscrito cifrado',           'Textos estranhos em línguas mortas',       'Volatil',   @miss2),
(@evid3, 'Diário enigmático',            'Entradas sobre visões noturnas',           'Volatil',  @miss4),
(@evid4, 'Coleta de areia',              'Amostras brilhantes da praia',             'Estável',   @miss4),
(@evid5, 'Círculo ritual',               'Cacos de pedra com runas',                 'Perigoso',  @miss5),
(@evid6, 'Mapa urbano',                  'Marcas sinalizando portais',               'Volatil',   @miss6),
(@evid7, 'Fragmento metálico',           'Pedaço de maquinário corroído',            'Estável',   @miss7),
(@evid8, 'Placa comemorativa',           'Inscrições antigas apagadas',              'Volatil',  @miss8),
(@evid9, 'Relíquia cerimonial',          'Objeto entalhado com selos',               'Perigoso',  @miss9);

-- Ameaças !
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
(@team1,@miss2,@thr1,'Confronto direto com encantamentos','Seita dispersa'),
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