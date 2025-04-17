create table ordemdb;

create table AGENTS (
    id_agent VARCHAR(36) primary key,
    name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
    phone VARCHAR(20),
    specialization VARCHAR(60) NOT NULL,
    rank_agent VARCHAR(20) NOT NULL CHECK (rank_agent IN ('Recruta','Veterano','Elite')),
    nex INT NOT NULL CHECK (nex BETWEEN 0 AND 100),
    retired BOOL NOT NULL DEFAULT FALSE,
    transcended BOOL NOT NULL DEFAULT FALSE
);

create table VERISSIMO (
    id_verissimo VARCHAR(36) PRIMARY KEY ,
    login VARCHAR(20) UNIQUE NOT NULL,
    password_ver VARCHAR(50) NOT NULL,
    foreign key (id_verissimo) references AGENTS(id_agent)
);


CREATE TABLE ADDRESS (
    id_address VARCHAR(36) PRIMARY KEY,
    street VARCHAR(100) NOT NULL,
    neighborhood VARCHAR(60),
    city VARCHAR(60) NOT NULL,
    state CHAR(2) NOT NULL,
    postal_code CHAR(8)
);

create table HQ (
    id_hq VARCHAR(36) primary key,
    name VARCHAR(60) NOT NULL,
    security_level FLOAT NOT NULL DEFAULT 1.0 CHECK (security_level BETWEEN 0.0 AND 10.0),
    room_count INT NULL DEFAULT 1 CHECK (room_count > 0),
    id_address VARCHAR(36) NOT NULL,
    id_verissimo VARCHAR(36) NOT NULL,
    foreign key (id_address) references ADDRESS(id_address),
    foreign key (id_verissimo) references VERISSIMO(id_verissimo)
);


create table AGENTS_IN_HQ (
    id_hq VARCHAR(36) NOT NULL,
    id_agent VARCHAR(36) NOT NULL,
    foreign key (id_hq) references HQ(id_hq),
    foreign key (id_agent) references AGENTS(id_agent),
    primary key (id_hq, id_agent)
);

create table TEAM (
    id_team VARCHAR(36) primary key,
    name VARCHAR(60) NOT NULL,
    specialization VARCHAR(60) NOT NULL CHECK ( specialization in ('Investigação','Combate','Suporte'))
);

create table TEAM_LEADERS (
                              id_team VARCHAR(36) NOT NULL,
                              id_agent VARCHAR(36) NOT NULL,
                              foreign key (id_team) references TEAM(id_team),
                              foreign key (id_agent) references AGENTS(id_agent),
                              primary key (id_agent, id_team)
);

create table AGENTS_IN_TEAM (
                                id_team VARCHAR(36) NOT NULL,
                                id_agent VARCHAR(36) NOT NULL ,
                                start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                end_date DATE,
                                foreign key (id_team) references TEAM(id_team),
                                foreign key (id_agent) references AGENTS(id_agent),
                                primary key (id_agent, id_team)
);

create table ELEMENTS (
                          id_element VARCHAR(36) primary key,
                          name VARCHAR(15) NOT NULL UNIQUE,
                          description TEXT NOT NULL,
                          id_advantage VARCHAR(36),
                          foreign key (id_advantage) references ELEMENTS(id_element)
);

create table RITUALS (
                         id_ritual VARCHAR(36) PRIMARY KEY ,
                         name VARCHAR(60) NOT NULL ,
                         description TEXT,
                         requirements VARCHAR(100) NOT NULL ,
                         risks VARCHAR(100),
                         id_element VARCHAR(36) NOT NULL ,
                         foreign key (id_element) references ELEMENTS(id_element)
);

create table AGENT_RITUALS (
                               id_agent VARCHAR(36) NOT NULL ,
                               id_ritual VARCHAR(36) NOT NULL ,
                               foreign key (id_agent) references AGENTS(id_agent),
                               foreign key (id_ritual) references RITUALS(id_ritual),
                               primary key (id_agent, id_ritual)
);

create table MISSION (
                         id_mission VARCHAR(36) PRIMARY KEY ,
                         title VARCHAR(100) NOT NULL ,
                         status VARCHAR(20) NOT NULL CHECK (status IN ('Arquivada','Concluida','Aberta')) DEFAULT 'Aberta',
                         risks TEXT NOT NULL,
                         objective TEXT NOT NULL,
                         start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                         end_date DATE,
                         id_address VARCHAR(36),
                         foreign key (id_address) references ADDRESS(id_address)
);

create table MISSION_ASSIGNMENT	(
                                       id_team VARCHAR(36) NOT NULL ,
                                       id_mission VARCHAR(36) NOT NULL ,
                                       allocation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                       foreign key (id_team) references TEAM(id_team),
                                       foreign key (id_mission) references MISSION(id_mission),
                                       primary key (id_team, id_mission)
);

create table EVIDENCE (
                          id_evidence VARCHAR(36) PRIMARY KEY ,
                          origin VARCHAR(100) NOT NULL ,
                          description TEXT NOT NULL ,
                          stability_level VARCHAR(30) NOT NULL CHECK (stability_level IN ('Estavel', 'Volatil', 'Perigoso', 'Contido')),
                          id_mission VARCHAR(36) NOT NULL ,
                          foreign key (id_mission) references MISSION(id_mission)
);

create table THREATS (
                         id_threat VARCHAR(36) PRIMARY KEY,
                         description TEXT NOT NULL
);

CREATE TABLE THREATS_NAMES (
                               id_threat VARCHAR(36) NOT NULL,
                               name VARCHAR(60) NOT NULL,
                               PRIMARY KEY (id_threat, name),
                               FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat)
);


create table THREAT_MISSION (
                                id_threat VARCHAR(36) NOT NULL ,
                                id_mission VARCHAR(36) NOT NULL ,
                                foreign key (id_threat) references THREATS(id_threat),
                                foreign key (id_mission) references MISSION(id_mission),
                                primary key (id_threat, id_mission)
);


CREATE TABLE THREAT_NEUTRALIZATION (
                                       id_team VARCHAR(36) NOT NULL ,
                                       id_mission VARCHAR(36) NOT NULL ,
                                       id_threat VARCHAR(36) NOT NULL ,
                                       method TEXT NOT NULL ,
                                       result TEXT NOT NULL ,
                                       FOREIGN KEY (id_team, id_mission) REFERENCES MISSION_ASSIGNMENT(id_team, id_mission),
                                       FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat),
                                       PRIMARY KEY (id_team, id_mission, id_threat)
);


create table THREAT_ELEMENTS (
                                 id_element VARCHAR(36) NOT NULL ,
                                 id_threat VARCHAR(36) NOT NULL ,
                                 foreign key (id_element) references ELEMENTS(id_element),
                                 foreign key (id_threat) references THREATS(id_threat),
                                 primary key (id_element, id_threat)
);

create table PARANORMAL_ENTITY (
                                   id_entity VARCHAR(36) PRIMARY KEY ,
                                   enigma TEXT,
                                   foreign key (id_entity) references THREATS(id_threat)
);

CREATE TABLE ENTITY_ABILITY (
                                id_entity VARCHAR(36) NOT NULL ,
                                ability VARCHAR(255) NOT NULL ,
                                FOREIGN KEY (id_entity) REFERENCES PARANORMAL_ENTITY(id_entity),
                                PRIMARY KEY (id_entity, ability)
);


create table PARANORMAL_ORGANIZATION (
                                         id_organization VARCHAR(36) PRIMARY KEY ,
                                         foreign key (id_organization) references THREATS(id_threat)
);

create table MEMBERS (
                         id_member VARCHAR(36) NOT NULL UNIQUE ,
                         id_organization VARCHAR(36) NOT NULL ,
                         name VARCHAR(60) NOT NULL ,
                         role VARCHAR(30) CHECK ( role in ('Lider', 'Pesquisador', 'Ocultista', 'Simpatizante')),
                         foreign key (id_organization) references PARANORMAL_ORGANIZATION(id_organization),
                         primary key (id_member, id_organization)
);

create table MEMBER_RITUALS (
                                id_member VARCHAR(36) NOT NULL ,
                                id_ritual VARCHAR(36) NOT NULL ,
                                foreign key (id_member) references MEMBERS(id_member),
                                foreign key (id_ritual) references RITUALS(id_ritual),
                                primary key (id_member, id_ritual)
);


