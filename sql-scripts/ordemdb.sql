create database ordembd;


create table AGENTS (
    id_agent VARCHAR(36) primary key,
    name VARCHAR(60),
    birth_date DATE,
    phone VARCHAR(12),
    specialization VARCHAR(60),
    rank_agent VARCHAR(20),
    nex INT,
    retired BOOL,
    transcended BOOL
);

create table VERISSIMO (
    id_verissimo VARCHAR(36),
    login VARCHAR(20) unique,
    password_ver VARCHAR(50),
    foreign key (id_verissimo) references AGENTS(id_agent),
    primary key (id_verissimo)
);

create table HQ (
    id_hq VARCHAR(36) primary key,
    name VARCHAR(60),
    security_level FLOAT,
    location VARCHAR(60),
    room_count INT,
    id_verissimo VARCHAR(36),
    foreign key (id_verissimo) references VERISSIMO(id_verissimo)
);

create table AGENTS_IN_HQ (
    id_hq VARCHAR(36),
    id_agent VARCHAR(36),
    foreign key (id_hq) references HQ(id_hq),
    foreign key (id_agent) references AGENTS(id_agent),
    primary key (id_hq, id_agent)
);

create table TEAM (
    id_team VARCHAR(36) primary key,
    name VARCHAR(60),
    specialization VARCHAR(60)
);

create table TEAM_LEADERS (
    id_team VARCHAR(36),
    id_agent VARCHAR(36),
    foreign key (id_team) references TEAM(id_team),
    foreign key (id_agent) references AGENTS(id_agent),
    primary key (id_agent, id_team)
);

create table AGENTS_IN_TEAM (
    id_team VARCHAR(36),
    id_agent VARCHAR(36),
    start_date DATE,
    end_date DATE,
    foreign key (id_team) references TEAM(id_team),
    foreign key (id_agent) references AGENTS(id_agent),
    primary key (id_agent, id_team)
);

create table ELEMENTS (
    id_element VARCHAR(36) primary key,
    name VARCHAR(15) unique,
    description TEXT,
    id_advantage VARCHAR(36),
    foreign key (id_advantage) references ELEMENTS(id_element)
);

create table RITUALS (
    id_ritual VARCHAR(36) primary key,
    name VARCHAR(60),
    description TEXT,
    requirements VARCHAR(100),
    risks VARCHAR(100),
    id_element VARCHAR(36),
    foreign key (id_element) references ELEMENTS(id_element)
);

create table AGENT_RITUALS (
    id_agent VARCHAR(36),
    id_ritual VARCHAR(36),
    foreign key (id_agent) references AGENTS(id_agent),
    foreign key (id_ritual) references RITUALS(id_ritual),
    primary key (id_agent, id_ritual)
);

create table MISSION (
    id_mission VARCHAR(36) primary key,
    title VARCHAR(100),
    status VARCHAR(20),
    report TEXT,
    risks VARCHAR(100),
    objective TEXT,
    location VARCHAR(100),
    start_date DATE,
    end_date DATE
);

create table MISSION_RESPONSIBLES (
    id_team VARCHAR(36),
    id_mission VARCHAR(36),
    foreign key (id_team) references TEAM(id_team),
    foreign key (id_mission) references MISSION(id_mission),
    primary key (id_team, id_mission)
);

create table EVIDENCE (
    id_evidence VARCHAR(36) primary key,
    origin VARCHAR(100),
    description TEXT,
    stability_level VARCHAR(100),
    id_mission VARCHAR(36),
    foreign key (id_mission) references MISSION(id_mission)
);

create table THREATS (
    id_threat VARCHAR(36) primary key,
    name VARCHAR(60),
    description TEXT
);

create table THREAT_MISSION (
    id_threat VARCHAR(36),
    id_mission VARCHAR(36),
    foreign key (id_threat) references THREATS(id_threat),
    foreign key (id_mission) references MISSION(id_mission),
    primary key (id_threat, id_mission)
);

create table THREAT_ELEMENTS (
    id_element VARCHAR(36),
    id_threat VARCHAR(36),
    foreign key (id_element) references ELEMENTS(id_element),
    foreign key (id_threat) references THREATS(id_threat),
    primary key (id_element, id_threat)
);

create table PARANORMAL_ENTITY (
    id_entity VARCHAR(36),
    ability TEXT,
    enigma TEXT,
    foreign key (id_entity) references THREATS(id_threat),
    primary key (id_entity)
);

create table PARANORMAL_ORGANIZATION (
    id_organization VARCHAR(36),
    foreign key (id_organization) references THREATS(id_threat),
    primary key (id_organization)
);

create table MEMBERS (
    id_member VARCHAR(36) unique,
    id_organization VARCHAR(36),
    name VARCHAR(60),
    foreign key (id_organization) references PARANORMAL_ORGANIZATION(id_organization),
    primary key (id_member, id_organization)
);

create table MEMBER_RITUALS (
    id_member VARCHAR(36),
    id_ritual VARCHAR(36),
    foreign key (id_member) references MEMBERS(id_member),
    foreign key (id_ritual) references RITUALS(id_ritual),
    primary key (id_member, id_ritual)
);


