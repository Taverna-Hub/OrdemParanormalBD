import { z } from 'zod';

export const agentUpdateSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  telNumber: z.string().min(8, 'Telefone obrigatório'),
  birthDate: z.string().min(8, 'Data de nascimento obrigatória'),
  specialization: z.object({ value: z.string(), label: z.string() }),
  rank_agent: z.object({ value: z.string(), label: z.string() }),
  nex: z.coerce.number().min(0, 'NEX obrigatório'),
  retired: z.boolean().optional(),
  transcended: z.boolean().optional(),
});

export const teamUpdateSchema = z.object({
  agents: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, 'Selecione pelo menos um agente'),
});

export const threatUpdateSchema = z.object({
  name: z.string().min(2, 'Nome obrigatório'),
  ability: z.string().min(2, 'Habilidade obrigatória'),
  description: z.string().min(2, 'Descrição obrigatória'),
  enigma: z.string().min(2, 'Enigma obrigatório'),
  elements: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, 'Selecione pelo menos um elemento'),
});

export const missionAssignmentUpdateSchema = z.object({
  id_team: z.object({ value: z.string(), label: z.string() }),
});
