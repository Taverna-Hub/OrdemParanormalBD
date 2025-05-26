import { z } from 'zod';

export const agentSchema = z.object({
  name: z.string().min(1, 'O nome do agente não pode ser nulo'),
  birthDate: z.string().refine(
    (date) => {
      if (!date) return false;
      const birth = new Date(date);
      const now = new Date();
      const minDate = new Date(
        now.getFullYear() - 18,
        now.getMonth(),
        now.getDate(),
      );
      return birth <= minDate;
    },
    { message: 'O agente deve ser maior de idade' },
  ),
  rank_agent: z.object({
    label: z.string(),
    value: z.enum(['Recruta', 'Veterano', 'Elite'], {
      errorMap: () => ({
        message: 'Escolha apenas dentre os ranques disponíveis',
      }),
    }),
  }),
  specialization: z.object({
    value: z.enum(['Especialista', 'Ocultista', 'Combatente'], {
      errorMap: () => ({
        message: 'Escolha apenas dentre as especialidades disponíveis',
      }),
    }),
    label: z.string(),
  }),
  nex: z
    .string({ required_error: 'O nível de exposição é obrigatório' })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'O nível de exposição deve ser um número',
    })
    .refine((val) => val >= 0 && val <= 100, {
      message: 'O nível de exposição deve estar entre 0 e 100',
    }),
  telNumber: z
    .string()
    .regex(
      /^(?:\+55\s?)?(?:\(?[1-9]{2}\)?[\s-]?)?(?:9\d{4}|\d{4})-?\d{4}$/,
      'Insira um número válido',
    ),
  retired: z.boolean(),
  transcended: z.boolean(),
});

export const addressSchema = z.object({
  postal_code: z.string().min(8, 'CEP obrigatório'),
  neighborhood: z.string().min(2, 'Bairro obrigatório'),
  street: z.string().min(2, 'Rua obrigatória'),
  number: z.string().min(1, 'Número obrigatório'),
  city: z.string().min(2, 'Cidade obrigatória'),
  state: z.string().min(2, 'Estado obrigatório'),
});

export const teamSchema = z.object({
  name: z.string().min(2, 'Nome da equipe obrigatório'),
  specialization: z.object({ value: z.string(), label: z.string() }),
  agents: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, 'Selecione pelo menos um agente'),
});

export const missionSchema = z.object({
  title: z.string().min(2, 'Título obrigatório'),
  status: z.object({ value: z.string(), label: z.string() }),
  risks: z.string().min(2, 'Riscos obrigatórios'),
  objective: z.string().min(2, 'Objetivo obrigatório'),
  start_date: z.string().min(8, 'Data de começo obrigatória'),
  end_date: z.string().min(8, 'Data de término obrigatória'),
  id_address: z.object({ value: z.string(), label: z.string() }),
});
