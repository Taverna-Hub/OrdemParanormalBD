import { FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'sonner';

import * as S from './styles';
import { Input } from '../../../components/Input';
import { Select } from '../../../components/Select';
import { Checkbox } from '../../../components/Checkbox';
import { Button } from '../../../components/Button';
import { Navigation } from '../../../components/Navigation';

import { Agent, AgentService } from '../../../services/http/agents/AgentService';
import {useEffect} from "react";

type SelectOptions = {
    label: string;
    value: string;
};

type FormValues = {
    name: string;
    telNumber: string;
    birthDate: string;
    nex: number;
    retired: boolean;
    transcended: boolean;
    specialization: SelectOptions;
    rank_agent: SelectOptions;
};

export function EditAgent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { control, register, handleSubmit, setValue } = useForm<FormValues>();


    const specialties = [
        { value: 'Especialista', label: 'Especialista' },
        { value: 'Ocultista', label: 'Ocultista' },
        { value: 'Combatente', label: 'Combatente' },
    ];

    const patents = [
        { value: 'Recruta', label: 'Recruta' },
        { value: 'Veterano', label: 'Veterano' },
        { value: 'Elite', label: 'Elite' },
    ];

    const { isPending, mutate } = useMutation({
        mutationFn: async (data: FormValues) => {
            const formattedData = {
                name: data.name,
                telNumber: data.telNumber,
                birthDate: data.birthDate,
                nex: data.nex,
                retired: data.retired,
                transcended: data.transcended,
                specialization: data.specialization.value,
                rank_agent: data.rank_agent.value,
            };

            await AgentService.update(id as string, formattedData);
        },
        onSuccess: () => {
            toast.success('Agente atualizado com sucesso!');
            navigate('/agentes');
        },
        onError: () => {
            toast.error('Erro ao atualizar agente!');
        },
    });

    const {
        data: agent,
        isLoading,
        isError,
    } = useQuery<Agent>({
        queryKey: ['agent', id],
        queryFn: () => AgentService.findById(id as string)
    });

    function handleLoadValues(){
        setValue('name', agent?.name)
        setValue('telNumber', agent?.telNumber)
        setValue('birthDate', agent?.birthDate.split('T')[0])
        setValue('nex', agent?.nex)
        setValue('retired', agent?.retired)
        setValue('transcended', agent?.transcended)
        setValue('rank_agent', { value:  agent?.rank_agent, label:  agent?.rank_agent })
        setValue('specialization', { value: agent?.specialization, label: agent?.specialization })
    }

    function onSubmit(data: FormValues) {
        mutate(data);
    }

    if (isLoading) return <p>Carregando agente...</p>;
    if (isError) return <p>Erro ao carregar agente.</p>;

    useEffect(() => {
        if (agent) {
            handleLoadValues();
        }
    }, [agent]);

    return (
        <S.Wrapper>
            <Helmet title="Editar Agente" />
            <S.FormWrapper>
                <div>
                    <h2>Editar agente</h2>
                </div>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="Nome" {...register('name')} />
                    <Input label="Telefone" {...register('telNumber')} />
                    <Input label="Data de Nascimento" type="date" {...register('birthDate')} />

                    <Select control={control} options={specialties} label="Especialidade" name="specialization" />
                    <Select control={control} options={patents} label="Patente" name="rank_agent"  />

                    <Input label="NEX" type="number" {...register('nex')} />

                    <S.BooleanFields>
                        <Checkbox control={control} name="retired"     label="Aposentado" />
                        <Checkbox control={control} name="transcended" label="Transcendido" />
                    </S.BooleanFields>

                    <S.Actions>
                        <Button variant="secondary" type="button" onClick={() => navigate('/agentes')}>
                            Cancelar
                        </Button>
                        <Button iconRight={() => <FiArrowRight />} type="submit" disabled={isPending}>
                            {isPending ? 'Salvando...' : 'Salvar alterações'}
                        </Button>
                    </S.Actions>
                </S.Form>
            </S.FormWrapper>
            <Navigation />
        </S.Wrapper>
    );
}
