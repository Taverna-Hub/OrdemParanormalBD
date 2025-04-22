import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { Navigation } from '../../../components/Navigation';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';

import axios from 'axios';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import {
  AddressService,
  CreateAddressProps,
} from '../../../services/http/address/AddressService';
import { useNavigate } from 'react-router';

export type ZipCodeProps = {
  logradouro: string;
  bairro: string;
  uf: string;
  localidade: string;
};

export function CreateAddress() {
  const navigate = useNavigate();
  const { register, watch, setValue, handleSubmit } =
    useForm<CreateAddressProps>();

  const zip_code = watch('postal_code');

  async function handleZipCodeChange() {
    const formattedZipCode = zip_code.split('-').join('');

    if (formattedZipCode.length === 8) {
      try {
        const { data } = await axios.get<ZipCodeProps>(
          `https://viacep.com.br/ws/${zip_code}/json/`,
        );

        setValue('street', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('state', data.uf);
      } catch (error) {
        console.log(error);
        toast.error('Verifique se o CEP está certo.');
      }
    }
  }

  const { mutate } = useMutation({
    mutationFn: async (data: CreateAddressProps) => {
      await AddressService.create(data);
    },
    onSuccess: async () => {
      toast.success('Endereço cadastrado com sucesso!');
      navigate('/missoes/criar');
    },
    onError: () => {
      toast.error('Ocorreu um erro ao cadastrar endereço!');
    },
  });

  function handleCreateAddress(data: CreateAddressProps) {
    mutate(data);
  }

  return (
    <S.Wrapper>
      <Helmet title="Criar Endereço" />
      <S.FormWrapper>
        <div>
          <h2>Adicionar endereço</h2>
        </div>

        <S.Form onSubmit={handleSubmit(handleCreateAddress)}>
          <Input
            label="CEP"
            {...register('postal_code')}
            onBlur={handleZipCodeChange}
            maxLength={8}
          />
          <Input label="Bairro" {...register('neighborhood')} />
          <Input label="Rua" {...register('street')} />
          <Input label="Numero" {...register('number')} />

          <Input label="Cidade" {...register('city')} />
          <Input label="Estado" {...register('state')} />

          <div />

          <S.Actions>
            <Button variant="secondary" type="button">
              Cancelar
            </Button>

            <Button iconRight={() => <FiArrowRight />} type="submit">
              Adicionar endereço
            </Button>
          </S.Actions>
        </S.Form>
      </S.FormWrapper>

      <Navigation />
    </S.Wrapper>
  );
}
