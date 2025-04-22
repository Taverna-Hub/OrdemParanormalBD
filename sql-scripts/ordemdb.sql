create database IF NOT EXISTS ordemdb;
use ordemdb;
CREATE TABLE AGENTS (
    id_agent VARCHAR(36) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
    phone VARCHAR(20),
    specialization VARCHAR(60) NOT NULL CHECK (specialization IN ('Ocultista','Especialista','Combatente')),
    rank_agent VARCHAR(20) NOT NULL CHECK (rank_agent IN ('Recruta','Veterano','Elite')),
    nex INT NOT NULL CHECK (nex BETWEEN 0 AND 100),
    retired BOOL NOT NULL DEFAULT FALSE,
    transcended BOOL NOT NULL DEFAULT FALSE
);

CREATE TABLE VERISSIMO (
    id_verissimo VARCHAR(36) PRIMARY KEY,
    login VARCHAR(20) UNIQUE NOT NULL,
    password_ver VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_verissimo) REFERENCES AGENTS(id_agent) ON DELETE CASCADE
);

CREATE TABLE ADDRESS (
    id_address VARCHAR(36) PRIMARY KEY,
    street VARCHAR(100) NOT NULL,
    number INT,
    neighborhood VARCHAR(60),
    city VARCHAR(60) NOT NULL,
    state CHAR(2) NOT NULL,
    postal_code CHAR(9)
);

CREATE TABLE HQ (
    id_hq VARCHAR(36) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    security_level FLOAT NOT NULL DEFAULT 1.0 CHECK (security_level BETWEEN 0.0 AND 10.0),
    room_count INT NULL DEFAULT 1 CHECK (room_count > 0),
    id_address VARCHAR(36) NOT NULL,
    id_verissimo VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_address) REFERENCES ADDRESS(id_address) ON DELETE CASCADE,
    FOREIGN KEY (id_verissimo) REFERENCES VERISSIMO(id_verissimo) ON DELETE CASCADE
);

CREATE TABLE AGENTS_IN_HQ (
    id_hq VARCHAR(36) NOT NULL,
    id_agent VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_hq) REFERENCES HQ(id_hq) ON DELETE CASCADE,
    FOREIGN KEY (id_agent) REFERENCES AGENTS(id_agent) ON DELETE CASCADE,
    PRIMARY KEY (id_hq, id_agent)
);

CREATE TABLE TEAM (
    id_team VARCHAR(36) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    specialization VARCHAR(60) NOT NULL CHECK (specialization IN ('Investigação','Combate','Suporte'))
);

CREATE TABLE AGENTS_IN_TEAM (
    id_team VARCHAR(36) NOT NULL,
    id_agent VARCHAR(36) NOT NULL,
    start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date DATE,
    FOREIGN KEY (id_team) REFERENCES TEAM(id_team) ON DELETE CASCADE,
    FOREIGN KEY (id_agent) REFERENCES AGENTS(id_agent) ON DELETE CASCADE,
    PRIMARY KEY (id_agent, id_team)
);

CREATE TABLE ELEMENTS (
    id_element VARCHAR(36) PRIMARY KEY,
    name VARCHAR(15) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    id_advantage VARCHAR(36),
    FOREIGN KEY (id_advantage) REFERENCES ELEMENTS(id_element) ON DELETE CASCADE
);

CREATE TABLE RITUALS (
    id_ritual VARCHAR(36) PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    description TEXT,
    requirements VARCHAR(100) NOT NULL,
    risks VARCHAR(100),
    id_element VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_element) REFERENCES ELEMENTS(id_element) ON DELETE CASCADE
);

CREATE TABLE AGENT_RITUALS (
    id_agent VARCHAR(36) NOT NULL,
    id_ritual VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_agent) REFERENCES AGENTS(id_agent) ON DELETE CASCADE,
    FOREIGN KEY (id_ritual) REFERENCES RITUALS(id_ritual) ON DELETE CASCADE,
    PRIMARY KEY (id_agent, id_ritual)
);

CREATE TABLE MISSION (
    id_mission VARCHAR(36) PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Arquivada','Concluida','Aberta')) DEFAULT 'Aberta',
    risks TEXT NOT NULL,
    objective TEXT NOT NULL,
    start_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    end_date DATE,
    id_address VARCHAR(36),
    FOREIGN KEY (id_address) REFERENCES ADDRESS(id_address) ON DELETE CASCADE
);

CREATE TABLE MISSION_ASSIGNMENT (
    id_team VARCHAR(36) NOT NULL,
    id_mission VARCHAR(36) NOT NULL,
    allocation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deallocation_date DATE,
    FOREIGN KEY (id_team) REFERENCES TEAM(id_team) ON DELETE CASCADE,
    FOREIGN KEY (id_mission) REFERENCES MISSION(id_mission) ON DELETE CASCADE,
    PRIMARY KEY (id_team, id_mission)
);

CREATE TABLE EVIDENCE (
    id_evidence VARCHAR(36) PRIMARY KEY,
    origin VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    stability_level VARCHAR(30) NOT NULL CHECK (stability_level IN ('Estavel', 'Volatil', 'Perigoso', 'Contido')),
    id_mission VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_mission) REFERENCES MISSION(id_mission) ON DELETE CASCADE
);

CREATE TABLE THREATS (
    id_threat VARCHAR(36) PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE THREATS_NAMES (
    id_threat VARCHAR(36) NOT NULL,
    name VARCHAR(60) NOT NULL,
    FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat) ON DELETE CASCADE,
    PRIMARY KEY (id_threat, name)
);

CREATE TABLE THREAT_MISSION (
    id_threat VARCHAR(36) NOT NULL,
    id_mission VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat) ON DELETE CASCADE,
    FOREIGN KEY (id_mission) REFERENCES MISSION(id_mission) ON DELETE CASCADE,
    PRIMARY KEY (id_threat, id_mission)
);

CREATE TABLE THREAT_NEUTRALIZATION (
    id_team VARCHAR(36) NOT NULL,
    id_mission VARCHAR(36) NOT NULL,
    id_threat VARCHAR(36) NOT NULL,
    method TEXT NOT NULL,
    result TEXT NOT NULL,
    FOREIGN KEY (id_team, id_mission) REFERENCES MISSION_ASSIGNMENT(id_team, id_mission) ON DELETE CASCADE,
    FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat) ON DELETE CASCADE,
    PRIMARY KEY (id_team, id_mission, id_threat)
);

CREATE TABLE THREAT_ELEMENTS (
    id_element VARCHAR(36) NOT NULL,
    id_threat VARCHAR(36) NOT NULL,
    FOREIGN KEY (id_element) REFERENCES ELEMENTS(id_element) ON DELETE CASCADE,
    FOREIGN KEY (id_threat) REFERENCES THREATS(id_threat) ON DELETE CASCADE,
    PRIMARY KEY (id_element, id_threat)
);

CREATE TABLE PARANORMAL_ENTITY (
    id_entity VARCHAR(36) PRIMARY KEY,
    enigma TEXT,
    FOREIGN KEY (id_entity) REFERENCES THREATS(id_threat) ON DELETE CASCADE
);

CREATE TABLE ENTITY_ABILITY (
    id_entity VARCHAR(36) NOT NULL,
    ability VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_entity) REFERENCES PARANORMAL_ENTITY(id_entity) ON DELETE CASCADE,
    PRIMARY KEY (id_entity, ability)
);

CREATE TABLE PARANORMAL_ORGANIZATION (
    id_organization VARCHAR(36) PRIMARY KEY,
    FOREIGN KEY (id_organization) REFERENCES THREATS(id_threat) ON DELETE CASCADE
);

CREATE TABLE MEMBERS (
     id_member VARCHAR(36) PRIMARY KEY,
     id_organization VARCHAR(36) NOT NULL,
     name VARCHAR(60) NOT NULL,
     role VARCHAR(30) CHECK (role IN ('Lider', 'Pesquisador', 'Ocultista', 'Simpatizante')),
     FOREIGN KEY (id_organization) REFERENCES PARANORMAL_ORGANIZATION(id_organization) ON DELETE CASCADE
);
