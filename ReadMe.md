
![header-umbra](https://github.com/user-attachments/assets/939c7e84-a772-47a2-b1e4-b27ea4148f19)

Bem-vindo ao **PROJETO UMBRA**! Este projeto é um sistema completo de gerenciamento de operações, agentes, ameaças e organizações paranormais, inspirado no universo de RPG Ordem Paranormal. O sistema é composto por:
- **Backend**: Java 17+ (Spring Boot)
- **Frontend**: React + TypeScript (Vite)
- **Banco de Dados**: MySQL (scripts SQL inclusos)

---

## ✨ Visão Geral

O sistema permite:
- Cadastro, edição e visualização de agentes, equipes, missões, ameaças (entidades e organizações paranormais), rituais e endereços.
- Atribuição de agentes a equipes e equipes a missões.
- Controle de status de missões, especializações, ranques e níveis de exposição (NEX).
- Visualização de dashboards e estatísticas para acompanhamento das operações do QG.
- Autenticação de usuários (Veríssimo) e controle de acesso por QG.

---

## 📦 Estrutura do Projeto

```
OrdemParanormalBD/
│
├── ordem-back/         # Backend Java (Spring Boot)
│   ├── OP/
│   │   ├── src/main/java/edu/cesar/taverna/bd/OP/  # Código-fonte backend
│   │   ├── docker-compose.yml
│   │   ├── pom.xml
│   │   └── ...
│   └── ...
│
├── ordem-front/        # Frontend React + TypeScript
│   ├── src/            # Código-fonte frontend
│   ├── package.json
│   └── ...
│
├── sql-scripts/        # Scripts SQL para banco de dados
│   ├── ordemdb.sql     # Estrutura do banco
│   ├── population.sql  # Dados de exemplo
│   └── exclude.sql     # Scripts auxiliares
│
└── ReadMe.md           # Este arquivo
```

---

## 🚀 Como rodar o projeto

### 1. Banco de Dados
- Requisitos: MySQL 8+
- Execute os scripts em `sql-scripts/` na ordem:
  1. `ordemdb.sql` (estrutura)
  2. `population.sql` (dados de exemplo)
- Ou utilize o `docker-compose.yml` para subir o banco rapidamente:
  ```bash
  cd ordem-back/OP
  docker compose up -d
  ```

### 2. Backend
- Requisitos: Java 17+, Maven
- Configure as variáveis de ambiente em `.env` na pasta `ordem-back/OP/`:
  ```env
  DB_URL=jdbc:mysql://localhost:3306/ordemdb
  DB_USER=seu_usuario
  DB_PASSWORD=sua_senha
  ```
- Para rodar:
  ```bash
  cd ordem-back/OP
  ./mvnw spring-boot:run
  ```
- A API estará disponível em `http://localhost:8080`

### 3. Frontend
- Requisitos: Node.js 18+
- Instale as dependências:
  ```bash
  cd ordem-front
  npm install
  ```
- Configure a .env do front-end
    ```
    VITE_API_URL=http://localhost:8080/
    VITE_MAPTILER_API_KEY=<MAPTILER_API_KEY>
    ```
- Para rodar em modo desenvolvimento:
  ```bash
  npm run dev
  ```
- Acesse em `http://localhost:5173`

---

## 🗂️ Funcionalidades Principais

- **Dashboard**: Estatísticas de agentes, missões, ameaças, NEX médio, equipes por especialização, missões por status, mapa de ameaças por elemento.
- **Gestão de Agentes**: Cadastro, edição, remoção, especializações, ranques, NEX, rituais.
- **Gestão de Equipes**: Criação de equipes, alocação de agentes, especializações.
- **Gestão de Missões**: Criação, edição, status, alocação de equipes, ameaças envolvidas, neutralizações.
- **Gestão de Ameaças**: Cadastro de entidades e organizações paranormais, elementos, habilidades.
- **Gestão de Rituais**: Cadastro e associação a agentes.
- **Endereços**: Cadastro e seleção para missões.
- **Autenticação**: Login de Veríssimo, controle de QG.
- **API RESTful**: Endpoints organizados por recurso.

---

## 🛠️ Tecnologias Utilizadas

- **Backend**: Java 17+, Spring Boot, JDBC, Maven, Lombok
- **Frontend**: React, TypeScript, Vite, React Query, Zod, Styled Components, ApexCharts
- **Banco de Dados**: MySQL
- **Outros**: Docker
- **API Externa**: [AwesomeAPI CEP - Geolocalização](https://cep.awesomeapi.com.br/json/)

---

## 📑 Principais Endpoints da API

- `/auth/login` - Login de Veríssimo
- `/agents` - CRUD de agentes
- `/teams` - CRUD de equipes
- `/missions` - CRUD de missões
- `/paranormalEntity` - CRUD de entidades paranormais
- `/ritual` - CRUD de rituais
- `/address` - CRUD de endereços
- `/qg/*` - Dashboards e estatísticas

> Consulte os controllers em `ordem-back/OP/src/main/java/edu/cesar/taverna/bd/OP/controller/` para detalhes e parâmetros.

---

## 📝 Scripts SQL

- `ordemdb.sql`: Criação de todas as tabelas e constraints do banco.
- `population.sql`: População de dados de exemplo (agentes, endereços, QGs, ameaças, etc).
- `exclude.sql`: Script para limpeza e drop de todas as tabelas e procedures.

---

## 💡 Dicas e Observações

- Use o dashboard para ter uma visão geral rápida das operações do QG.
- Utilize os scripts SQL para restaurar ou popular rapidamente o banco.
- O login é feito via usuário Veríssimo, cada QG tem seu próprio escopo de dados.
- O frontend é responsivo e pode ser customizado facilmente via Styled Components.
- Consulte os arquivos de exemplo e os controllers para entender a estrutura dos dados.

---

Desenvolvido para fins acadêmicos, inspirado no universo de **Ordem Paranormal RPG**.
