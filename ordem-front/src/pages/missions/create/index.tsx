import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import { Select } from '../../../components/Select';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { useNavigate } from 'react-router';
import { Textarea } from '../../../components/Textarea';
import {
  Mission,
  MissionService,
} from '../../../services/http/missions/MissionService';
import {
  Address,
  AddressService,
} from '../../../services/http/address/AddressService';
import React from "react";

type SelectOptions = {
  label: string;
  value: string;
};

type CreateMissionProps = Omit<
  Mission,
  'id_mission' | 'id_address' | 'status'
> & {
  status: SelectOptions;
  id_address: SelectOptions;
};

export function CreateMission() {
  const navigate = useNavigate();
  const { control, register, handleSubmit } = useForm<CreateMissionProps>();

  const status = [
    {
      value: 'Arquivada',
      label: 'Arquivada',
    },
    {
      value: 'Concluida',
      label: 'Concluida',
    },
    {
      value: 'Aberta',
      label: 'Aberta',
    },
  ];

  const { data: addressess } = useQuery<Address[]>({
    queryKey: ['addressess'],
    queryFn: () => AddressService.findAll(),
  });

  const addressOptions = addressess?.map((address: Address) => {
    return {
      label: `${address.street}, ${address.number}, ${address.city} - ${address.state}, ${address.postal_code}`,
      value: address.id_address,
    };
  });

  const { mutate } = useMutation({
    mutationFn: async (data: CreateMissionProps) => {
      const reformattedData = {
        ...data,
        status: data.status.value,
        id_address: data.id_address.value,
      };

      await MissionService.create(reformattedData as Mission);
    },
    onSuccess: async () => {
      toast.success('Missão criada com sucesso!');
      navigate('/missoes');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao criar missão!');
    },
  });

  function handleCreateMission(data: CreateMissionProps) {
    mutate(data);
  }

  function handleCancelClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate('/missoes');
  }

  return (
    <S.Wrapper>
      <Helmet title="Criar Missão" />
      <S.FormWrapper>
        <div>
          <h2>Criar missão</h2>
        </div>

        <S.Form onSubmit={handleSubmit(handleCreateMission)}>
          <Input label="Título" {...register('title')} />

          <Select
            control={control}
            options={status}
            label="Status"
            name="status"
            defaultValue={{
              label: 'Aberta',
              value: 'Aberta',
            }}
          />

          <Textarea label="Riscos" {...register('risks')} />

          <Textarea label="Objetivo" {...register('objective')} />

          <Input
            label="Data de começo"
            type="date"
            defaultValue={new Date().toISOString().split('T')[0]}
            {...register('start_date')}
          />

          <Input
            label="Data de término"
            type="date"
            {...register('end_date')}
          />

          <S.Address>
            <Select
              control={control}
              options={addressOptions!}
              label="Endereço"
              name="id_address"
            />

            <Button className='button' variant="secondary" type="button" onClick={() => navigate('/endereco/criar')} aria-label='Adicionar Novo Endereço'>
              +
            </Button>
            
          </S.Address>

          <div />
          <div />

          <S.Actions>
            <Button variant="secondary" type="button" onClick={handleCancelClick}>
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Criar missão
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
