import { Helmet } from "react-helmet-async";
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import { Navigation } from "../../../components/Navigation";

export function CreatingTeam() {
    const {control} = useForm()
    const specOptions = [
        {
            label: 'Investigação',
            value: 'Investigação'
        },
        {
            label: 'Combate',
            value: 'Combate'
        },
        {
            label: 'Suporte',
            value: 'Suporte'
        }
    ]
    const agentsOptions = [
        {
            label: 'Todos os agentes',
            value: 'all'
        }
    ]
    const agents = [
        { id: 1, name: 'Carlos Silva', role: 'Especialista Tático' },
        { id: 2, name: 'Ana Oliveira', role: 'Analista de Intel' },
        { id: 3, name: 'Bruno Santos', role: 'Operador de Campo' },
        { id: 4, name: 'Daniela Costa', role: 'Especialista Técnico' },
        { id: 5, name: 'Eduardo Lima', role: 'Médico de Campo' },
        { id: 6, name: 'Paulo Rosado', role: 'Ocultista'},
        { id: 7, name: 'Gustavo Mourato', role: 'Especialista'} 
      ];
  return (
    <S.Wrapper>
      <Helmet title="Criar Nova Equipe" />

      <h1>Criar Nova Equipe</h1>

        <S.GridWrapper>

            <S.GridColumn>
                
                <S.GridCard>
                    <h2>Informações Básicas</h2>
                    <Input
                    label="Nome da equipe"
                    placeholder="Digite o nome da equipe"
                    name="nome_do_campo_no_back"
                    />

                    <Select
                    label="Especialização da equipe"
                    placeholder="Selecione uma especialização"
                    control={control}
                    options={specOptions}
                    name="type"
                    />
                </S.GridCard>

                <S.GridCard>
                    <h2>Estatísticas da Equipe</h2>
                    <p>Selecione agentes para vizualizar estatísticas</p>
                </S.GridCard>

            </S.GridColumn>

            <S.GridColumn>
                <S.GridCard>
                    <h2>Seleção de Agentes</h2>
                    <Select 
                    control={control}
                    options={agentsOptions}
                    name="filter"
                    placeholder=""
                    />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr auto',
                        alignItems: 'center',
                        padding: '1rem 0',
                        borderBottom: '1px solid #2c2f3b',
                        color: '#ccc',
                        fontWeight: 'bold'
                    }}>
                        <span>Agentes</span>
                        <span></span>
                        <span>Líder</span>
                    </div>

                    {agents.map(agent => (
                        <div key={agent.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto 1fr auto',
                            alignItems: 'center',
                            padding: '1rem 0',
                            borderBottom: '1px solid #2c2f3b'
                        }}
                        >
                        <input type="radio" style={{ marginRight: '1rem' }} />
                        
                        <div>
                            <p style={{ margin: 0, color: 'white' }}>{agent.name}</p>
                            <p style={{ margin: 0, color: '#aaa', fontSize: '0.875rem' }}>{agent.role}</p>
                        </div>

                        <Button >Definir como líder</Button>
                        </div>
                    ))}
                </S.GridCard>

                <S.GridButtons>
                    <Button>Cancelar</Button>
                    <Button> Criar Equipe </Button>
                </S.GridButtons>
            </S.GridColumn>


        </S.GridWrapper>


      <Navigation />
    </S.Wrapper>
  );
}

