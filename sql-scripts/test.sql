select a.name, aq.id_hq, (
    select count(*)
    from AGENTS_IN_TEAM ait
             join ordemdb.TEAM t on ait.id_team = t.id_team
             join ordemdb.MISSION_ASSIGNMENT ma on t.id_team = ma.id_team
             join ordemdb.MISSION m on m.id_mission = ma.id_mission
    where ait.id_agent = a.id_agent
      and m.status = "Concluida"
)as missoes_concluidas
from AGENTS a
         join AGENTS_IN_HQ aq ON a.id_agent = aq.id_agent
where aq.id_hq = '2efbf0a6-2933-11f0-b353-3ad0bd7cbd93';

-- workin
-- estabilidade das evidenvias por missao
SELECT m.title, e.id_evidence, e.description, e.stability_level
FROM MISSION m
         JOIN EVIDENCE e ON e.id_mission = m.id_mission
WHERE m.id_mission = ?;

-- workin
-- elementos de ameaça por missão
SELECT t.id_threat,te.id_element, e.name ,tn.name
FROM THREATS t
         JOIN THREATS_NAMES tn ON t.id_threat = tn.id_threat
         JOIN THREAT_ELEMENTS te on t.id_threat = te.id_threat
         JOIN ELEMENTS e on te.id_element = e.id_element
         JOIN THREAT_MISSION tm on t.id_threat = tm.id_threat
WHERE tm.id_mission = ?;

-- terminando
-- count de ameaças por missão no qg geral

SELECT t.id_threat, tn.name,  count(*) as quantidade_ameaças
FROM THREATS t
         JOIN THREATS_NAMES tn ON t.id_threat = tn.id_threat
         JOIN THREAT_MISSION tm ON t.id_threat = tm.id_threat
group by t.id_threat, tn.name
order by quantidade_ameaças DESC;

SELECT a.postal_code, e.name
FROM THREATS t
         JOIN THREAT_MISSION tm ON t.id_threat = tm.id_threat
         JOIN MISSION m ON tm.id_mission = m.id_mission
         JOIN ADDRESS a ON m.id_address = a.id_address
         JOIN THREAT_ELEMENTS TE on t.id_threat = TE.id_threat
         JOIN ELEMENTS e ON TE.id_element = e.id_element;
