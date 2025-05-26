import { Helmet } from 'react-helmet-async';
import * as S from './styles';
import { Navigation } from '../../../components/Navigation';
import { useQuery } from '@tanstack/react-query';
import {
  Element,
  ElementService,
} from '../../../services/http/elements/ElementService';

type ElementWithVantagemNome = Element & { vantagemNome: string };

export function Elements() {
  const { data: elements } = useQuery({
    queryKey: ['elements'],
    queryFn: async (): Promise<ElementWithVantagemNome[]> => {
      const allElements = await ElementService.findAll();

      const idToNameMap = new Map<string, string>();
      allElements?.forEach((el: Element) => {
        idToNameMap.set(el.id_element, el.name);
      });

      return (
        allElements?.map((el: Element) => ({
          ...el,
          vantagemNome: idToNameMap.get(el.vantagem) ?? 'Desconhecida',
        })) ?? []
      );
    },
  });

  const elementsImage: Record<string, string> = {
    Medo: '/el-medo.png',
    Morte: '/el-morte.png',
    Sangue: '/el-sangue.png',
    Conhecimento: '/el-conhecimento.png',
    Energia: '/el-energia.png',
  };

  return (
    <S.Wrapper>
      <Helmet title="Elementos" />

      <h1>Elementos</h1>

      <S.GridContainer>
        {elements?.map((element: ElementWithVantagemNome) => (
          <S.GridCard key={element.id_element} className={element.name}>
            <img src={elementsImage[element.name]} />
            <S.CardTitle>{element.name}</S.CardTitle>
            <S.CardDescription>{element.desciption}</S.CardDescription>
            {element.vantagem && (
              <S.CardAdvantage>
                Vantagem: {element.vantagemNome}
              </S.CardAdvantage>
            )}
          </S.GridCard>
        ))}
      </S.GridContainer>

      <Navigation />
    </S.Wrapper>
  );
}
