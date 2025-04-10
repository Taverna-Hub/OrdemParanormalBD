-- MySQL dump 10.13  Distrib 9.2.0, for Linux (x86_64)
--
-- Host: localhost    Database: ordemdb
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AGENTS`
--

DROP TABLE IF EXISTS `AGENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AGENTS` (
  `id_agent` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `rank_agent` varchar(20) DEFAULT NULL,
  `nex` int DEFAULT NULL,
  `retired` tinyint(1) DEFAULT NULL,
  `transcended` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AGENTS`
--

LOCK TABLES `AGENTS` WRITE;
/*!40000 ALTER TABLE `AGENTS` DISABLE KEYS */;
/*!40000 ALTER TABLE `AGENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AGENTS_IN_HQ`
--

DROP TABLE IF EXISTS `AGENTS_IN_HQ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AGENTS_IN_HQ` (
  `id_hq` char(36) NOT NULL,
  `id_agent` char(36) NOT NULL,
  PRIMARY KEY (`id_hq`,`id_agent`),
  KEY `id_agent` (`id_agent`),
  CONSTRAINT `AGENTS_IN_HQ_ibfk_1` FOREIGN KEY (`id_hq`) REFERENCES `HQ` (`id_hq`),
  CONSTRAINT `AGENTS_IN_HQ_ibfk_2` FOREIGN KEY (`id_agent`) REFERENCES `AGENTS` (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AGENTS_IN_HQ`
--

LOCK TABLES `AGENTS_IN_HQ` WRITE;
/*!40000 ALTER TABLE `AGENTS_IN_HQ` DISABLE KEYS */;
/*!40000 ALTER TABLE `AGENTS_IN_HQ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AGENTS_IN_TEAM`
--

DROP TABLE IF EXISTS `AGENTS_IN_TEAM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AGENTS_IN_TEAM` (
  `id_team` char(36) NOT NULL,
  `id_agent` char(36) NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id_agent`,`id_team`),
  KEY `id_team` (`id_team`),
  CONSTRAINT `AGENTS_IN_TEAM_ibfk_1` FOREIGN KEY (`id_team`) REFERENCES `TEAM` (`id_team`),
  CONSTRAINT `AGENTS_IN_TEAM_ibfk_2` FOREIGN KEY (`id_agent`) REFERENCES `AGENTS` (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AGENTS_IN_TEAM`
--

LOCK TABLES `AGENTS_IN_TEAM` WRITE;
/*!40000 ALTER TABLE `AGENTS_IN_TEAM` DISABLE KEYS */;
/*!40000 ALTER TABLE `AGENTS_IN_TEAM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `AGENT_RITUALS`
--

DROP TABLE IF EXISTS `AGENT_RITUALS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `AGENT_RITUALS` (
  `id_agent` char(36) NOT NULL,
  `id_ritual` char(36) NOT NULL,
  PRIMARY KEY (`id_agent`,`id_ritual`),
  KEY `id_ritual` (`id_ritual`),
  CONSTRAINT `AGENT_RITUALS_ibfk_1` FOREIGN KEY (`id_agent`) REFERENCES `AGENTS` (`id_agent`),
  CONSTRAINT `AGENT_RITUALS_ibfk_2` FOREIGN KEY (`id_ritual`) REFERENCES `RITUALS` (`id_ritual`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AGENT_RITUALS`
--

LOCK TABLES `AGENT_RITUALS` WRITE;
/*!40000 ALTER TABLE `AGENT_RITUALS` DISABLE KEYS */;
/*!40000 ALTER TABLE `AGENT_RITUALS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ELEMENTS`
--

DROP TABLE IF EXISTS `ELEMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ELEMENTS` (
  `id_element` char(36) NOT NULL,
  `name` varchar(15) DEFAULT NULL,
  `description` text,
  `id_advantage` char(36) DEFAULT NULL,
  PRIMARY KEY (`id_element`),
  UNIQUE KEY `name` (`name`),
  KEY `id_advantage` (`id_advantage`),
  CONSTRAINT `ELEMENTS_ibfk_1` FOREIGN KEY (`id_advantage`) REFERENCES `ELEMENTS` (`id_element`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ELEMENTS`
--

LOCK TABLES `ELEMENTS` WRITE;
/*!40000 ALTER TABLE `ELEMENTS` DISABLE KEYS */;
/*!40000 ALTER TABLE `ELEMENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EVIDENCE`
--

DROP TABLE IF EXISTS `EVIDENCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EVIDENCE` (
  `id_evidence` char(36) NOT NULL,
  `origin` varchar(100) DEFAULT NULL,
  `description` text,
  `stability_level` varchar(100) DEFAULT NULL,
  `id_mission` char(36) DEFAULT NULL,
  PRIMARY KEY (`id_evidence`),
  KEY `id_mission` (`id_mission`),
  CONSTRAINT `EVIDENCE_ibfk_1` FOREIGN KEY (`id_mission`) REFERENCES `MISSION` (`id_mission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EVIDENCE`
--

LOCK TABLES `EVIDENCE` WRITE;
/*!40000 ALTER TABLE `EVIDENCE` DISABLE KEYS */;
/*!40000 ALTER TABLE `EVIDENCE` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HQ`
--

DROP TABLE IF EXISTS `HQ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HQ` (
  `id_hq` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `security_level` float DEFAULT NULL,
  `location` varchar(60) DEFAULT NULL,
  `room_count` int DEFAULT NULL,
  `id_verissimo` char(36) DEFAULT NULL,
  PRIMARY KEY (`id_hq`),
  KEY `id_verissimo` (`id_verissimo`),
  CONSTRAINT `HQ_ibfk_1` FOREIGN KEY (`id_verissimo`) REFERENCES `VERISSIMO` (`id_verissimo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HQ`
--

LOCK TABLES `HQ` WRITE;
/*!40000 ALTER TABLE `HQ` DISABLE KEYS */;
/*!40000 ALTER TABLE `HQ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MEMBERS`
--

DROP TABLE IF EXISTS `MEMBERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MEMBERS` (
  `id_member` char(36) NOT NULL,
  `id_organization` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_member`,`id_organization`),
  UNIQUE KEY `id_member` (`id_member`),
  KEY `id_organization` (`id_organization`),
  CONSTRAINT `MEMBERS_ibfk_1` FOREIGN KEY (`id_organization`) REFERENCES `PARANORMAL_ORGANIZATION` (`id_organization`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MEMBERS`
--

LOCK TABLES `MEMBERS` WRITE;
/*!40000 ALTER TABLE `MEMBERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `MEMBERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MEMBER_RITUALS`
--

DROP TABLE IF EXISTS `MEMBER_RITUALS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MEMBER_RITUALS` (
  `id_member` char(36) NOT NULL,
  `id_ritual` char(36) NOT NULL,
  PRIMARY KEY (`id_member`,`id_ritual`),
  KEY `id_ritual` (`id_ritual`),
  CONSTRAINT `MEMBER_RITUALS_ibfk_1` FOREIGN KEY (`id_member`) REFERENCES `MEMBERS` (`id_member`),
  CONSTRAINT `MEMBER_RITUALS_ibfk_2` FOREIGN KEY (`id_ritual`) REFERENCES `RITUALS` (`id_ritual`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MEMBER_RITUALS`
--

LOCK TABLES `MEMBER_RITUALS` WRITE;
/*!40000 ALTER TABLE `MEMBER_RITUALS` DISABLE KEYS */;
/*!40000 ALTER TABLE `MEMBER_RITUALS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MISSION`
--

DROP TABLE IF EXISTS `MISSION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MISSION` (
  `id_mission` char(36) NOT NULL,
  `title` varchar(20) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `report` text,
  `risks` varchar(100) DEFAULT NULL,
  `objective` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_mission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MISSION`
--

LOCK TABLES `MISSION` WRITE;
/*!40000 ALTER TABLE `MISSION` DISABLE KEYS */;
/*!40000 ALTER TABLE `MISSION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MISSION_RESPONSIBLES`
--

DROP TABLE IF EXISTS `MISSION_RESPONSIBLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `MISSION_RESPONSIBLES` (
  `id_team` char(36) NOT NULL,
  `id_mission` char(36) NOT NULL,
  PRIMARY KEY (`id_team`,`id_mission`),
  KEY `id_mission` (`id_mission`),
  CONSTRAINT `MISSION_RESPONSIBLES_ibfk_1` FOREIGN KEY (`id_team`) REFERENCES `TEAM` (`id_team`),
  CONSTRAINT `MISSION_RESPONSIBLES_ibfk_2` FOREIGN KEY (`id_mission`) REFERENCES `MISSION` (`id_mission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MISSION_RESPONSIBLES`
--

LOCK TABLES `MISSION_RESPONSIBLES` WRITE;
/*!40000 ALTER TABLE `MISSION_RESPONSIBLES` DISABLE KEYS */;
/*!40000 ALTER TABLE `MISSION_RESPONSIBLES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PARANORMAL_ENTITY`
--

DROP TABLE IF EXISTS `PARANORMAL_ENTITY`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PARANORMAL_ENTITY` (
  `id_entity` char(36) NOT NULL,
  `ability` varchar(100) DEFAULT NULL,
  `enigma` text,
  PRIMARY KEY (`id_entity`),
  CONSTRAINT `PARANORMAL_ENTITY_ibfk_1` FOREIGN KEY (`id_entity`) REFERENCES `THREATS` (`id_threat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PARANORMAL_ENTITY`
--

LOCK TABLES `PARANORMAL_ENTITY` WRITE;
/*!40000 ALTER TABLE `PARANORMAL_ENTITY` DISABLE KEYS */;
/*!40000 ALTER TABLE `PARANORMAL_ENTITY` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PARANORMAL_ORGANIZATION`
--

DROP TABLE IF EXISTS `PARANORMAL_ORGANIZATION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PARANORMAL_ORGANIZATION` (
  `id_organization` char(36) NOT NULL,
  `monitoring_record` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_organization`),
  CONSTRAINT `PARANORMAL_ORGANIZATION_ibfk_1` FOREIGN KEY (`id_organization`) REFERENCES `THREATS` (`id_threat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PARANORMAL_ORGANIZATION`
--

LOCK TABLES `PARANORMAL_ORGANIZATION` WRITE;
/*!40000 ALTER TABLE `PARANORMAL_ORGANIZATION` DISABLE KEYS */;
/*!40000 ALTER TABLE `PARANORMAL_ORGANIZATION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RITUALS`
--

DROP TABLE IF EXISTS `RITUALS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RITUALS` (
  `id_ritual` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` text,
  `requirements` varchar(100) DEFAULT NULL,
  `risks` varchar(100) DEFAULT NULL,
  `id_element` char(36) DEFAULT NULL,
  PRIMARY KEY (`id_ritual`),
  KEY `id_element` (`id_element`),
  CONSTRAINT `RITUALS_ibfk_1` FOREIGN KEY (`id_element`) REFERENCES `ELEMENTS` (`id_element`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RITUALS`
--

LOCK TABLES `RITUALS` WRITE;
/*!40000 ALTER TABLE `RITUALS` DISABLE KEYS */;
/*!40000 ALTER TABLE `RITUALS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEAM`
--

DROP TABLE IF EXISTS `TEAM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TEAM` (
  `id_team` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `specialization` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id_team`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEAM`
--

LOCK TABLES `TEAM` WRITE;
/*!40000 ALTER TABLE `TEAM` DISABLE KEYS */;
/*!40000 ALTER TABLE `TEAM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TEAM_LEADERS`
--

DROP TABLE IF EXISTS `TEAM_LEADERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TEAM_LEADERS` (
  `id_team` char(36) NOT NULL,
  `id_agent` char(36) NOT NULL,
  PRIMARY KEY (`id_agent`,`id_team`),
  KEY `id_team` (`id_team`),
  CONSTRAINT `TEAM_LEADERS_ibfk_1` FOREIGN KEY (`id_team`) REFERENCES `TEAM` (`id_team`),
  CONSTRAINT `TEAM_LEADERS_ibfk_2` FOREIGN KEY (`id_agent`) REFERENCES `AGENTS` (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TEAM_LEADERS`
--

LOCK TABLES `TEAM_LEADERS` WRITE;
/*!40000 ALTER TABLE `TEAM_LEADERS` DISABLE KEYS */;
/*!40000 ALTER TABLE `TEAM_LEADERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THREATS`
--

DROP TABLE IF EXISTS `THREATS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `THREATS` (
  `id_threat` char(36) NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id_threat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THREATS`
--

LOCK TABLES `THREATS` WRITE;
/*!40000 ALTER TABLE `THREATS` DISABLE KEYS */;
/*!40000 ALTER TABLE `THREATS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THREAT_ELEMENTS`
--

DROP TABLE IF EXISTS `THREAT_ELEMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `THREAT_ELEMENTS` (
  `id_element` char(36) NOT NULL,
  `id_threat` char(36) NOT NULL,
  PRIMARY KEY (`id_element`,`id_threat`),
  KEY `id_threat` (`id_threat`),
  CONSTRAINT `THREAT_ELEMENTS_ibfk_1` FOREIGN KEY (`id_element`) REFERENCES `ELEMENTS` (`id_element`),
  CONSTRAINT `THREAT_ELEMENTS_ibfk_2` FOREIGN KEY (`id_threat`) REFERENCES `THREATS` (`id_threat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THREAT_ELEMENTS`
--

LOCK TABLES `THREAT_ELEMENTS` WRITE;
/*!40000 ALTER TABLE `THREAT_ELEMENTS` DISABLE KEYS */;
/*!40000 ALTER TABLE `THREAT_ELEMENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `THREAT_MISSION`
--

DROP TABLE IF EXISTS `THREAT_MISSION`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `THREAT_MISSION` (
  `id_threat` char(36) NOT NULL,
  `id_mission` char(36) NOT NULL,
  PRIMARY KEY (`id_threat`,`id_mission`),
  KEY `id_mission` (`id_mission`),
  CONSTRAINT `THREAT_MISSION_ibfk_1` FOREIGN KEY (`id_threat`) REFERENCES `THREATS` (`id_threat`),
  CONSTRAINT `THREAT_MISSION_ibfk_2` FOREIGN KEY (`id_mission`) REFERENCES `MISSION` (`id_mission`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `THREAT_MISSION`
--

LOCK TABLES `THREAT_MISSION` WRITE;
/*!40000 ALTER TABLE `THREAT_MISSION` DISABLE KEYS */;
/*!40000 ALTER TABLE `THREAT_MISSION` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VERISSIMO`
--

DROP TABLE IF EXISTS `VERISSIMO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VERISSIMO` (
  `id_verissimo` char(36) NOT NULL,
  `login` varchar(20) DEFAULT NULL,
  `password_ver` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_verissimo`),
  CONSTRAINT `VERISSIMO_ibfk_1` FOREIGN KEY (`id_verissimo`) REFERENCES `AGENTS` (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VERISSIMO`
--

LOCK TABLES `VERISSIMO` WRITE;
/*!40000 ALTER TABLE `VERISSIMO` DISABLE KEYS */;
/*!40000 ALTER TABLE `VERISSIMO` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-10 13:07:12
